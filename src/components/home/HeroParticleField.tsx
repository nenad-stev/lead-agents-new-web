"use client";

import { useEffect, useRef } from "react";

type Particle = {
  bx: number;
  by: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  amp: number;
  phase: number;
  speed: number;
  size: number;
  alpha: number;
  r: number;
  g: number;
  b: number;
};

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function createRng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0xffffffff;
  };
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load ${src}`));
    img.src = src;
  });
}

/** Build UV samples strictly inside the bright lion mark (ignore dark bg). */
function sampleSilhouette(
  img: HTMLImageElement,
  count: number,
  rng: () => number,
): Array<{ u: number; v: number; lum: number }> {
  const scale = 7;
  const w = Math.max(1, Math.round(img.naturalWidth * scale));
  const h = Math.max(1, Math.round(img.naturalHeight * scale));
  const off = document.createElement("canvas");
  off.width = w;
  off.height = h;
  const octx = off.getContext("2d", { willReadFrequently: true });
  if (!octx) return [];

  // Nearest-neighbor upscale → no grey AA fringe outside the mark
  octx.imageSmoothingEnabled = false;
  octx.clearRect(0, 0, w, h);
  octx.drawImage(img, 0, 0, w, h);
  const { data } = octx.getImageData(0, 0, w, h);

  const isInside = (x: number, y: number) => {
    if (x < 0 || y < 0 || x >= w || y >= h) return false;
    const i = (y * w + x) * 4;
    // Lion is near-white on near-black; ignore everything that isn't the mark
    const lum = (data[i] + data[i + 1] + data[i + 2]) / 3;
    return lum >= 200;
  };

  const solid: Array<{ u: number; v: number; lum: number }> = [];
  const edge: Array<{ u: number; v: number; lum: number }> = [];

  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      if (!isInside(x, y)) continue;

      const i = (y * w + x) * 4;
      const lum = Math.min(1, (data[i] + data[i + 1] + data[i + 2]) / 255);
      const u = (x + 0.5) / w;
      const v = (y + 0.5) / h;
      const sample = { u, v, lum };

      const onEdge =
        !isInside(x - 1, y) ||
        !isInside(x + 1, y) ||
        !isInside(x, y - 1) ||
        !isInside(x, y + 1);

      if (onEdge) edge.push(sample);
      else solid.push(sample);
    }
  }

  const picks: Array<{ u: number; v: number; lum: number }> = [];
  const edgeShare = Math.floor(count * 0.34);
  const solidShare = count - edgeShare;

  const take = (pool: typeof solid, n: number) => {
    if (!pool.length) return;
    for (let i = 0; i < n; i++) {
      const p = pool[Math.floor(rng() * pool.length)];
      // Tiny jitter, then snap back if it left the mark
      let u = p.u + (rng() - 0.5) * (0.6 / w);
      let v = p.v + (rng() - 0.5) * (0.6 / h);
      const sx = Math.floor(u * w);
      const sy = Math.floor(v * h);
      if (!isInside(sx, sy)) {
        u = p.u;
        v = p.v;
      }
      picks.push({ u, v, lum: p.lum });
    }
  };

  take(edge, edgeShare);
  take(solid.length ? solid : edge, solidShare);
  return picks;
}

type HeroParticleFieldProps = {
  className?: string;
};

/** Yellow particle lion mark — right hero, soft mouse void. */
export function HeroParticleField({ className }: HeroParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let running = true;
    let cancelled = false;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const particleCount = isMobile ? 3200 : 6500;
    const rng = createRng(0xffcc00);

    const mouse = {
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
      vx: 0,
      vy: 0,
      active: false,
      strength: 0,
    };
    const affectR = isMobile ? 0 : 58;

    const particles: Particle[] = [];
    let markAspect = 93 / 115;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onPointerMove = (clientX: number, clientY: number) => {
      const rect = wrap.getBoundingClientRect();
      const lx = clientX - rect.left;
      const ly = clientY - rect.top;
      if (lx < -40 || lx > rect.width + 40 || ly < -40 || ly > rect.height + 40) {
        mouse.active = false;
        return;
      }
      mouse.tx = lx;
      mouse.ty = ly;
      mouse.active = true;
    };

    const onMouseMove = (e: MouseEvent) => onPointerMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onLeave = () => {
      mouse.active = false;
    };

    const draw = (t: number) => {
      if (!particles.length) return;
      ctx.clearRect(0, 0, width, height);
      const time = t * 0.001;

      const prevX = mouse.x;
      const prevY = mouse.y;
      mouse.x += (mouse.tx - mouse.x) * 0.16;
      mouse.y += (mouse.ty - mouse.y) * 0.16;
      mouse.vx = mouse.x - prevX;
      mouse.vy = mouse.y - prevY;
      mouse.strength += ((mouse.active ? 1 : 0) - mouse.strength) * 0.1;

      // Fit lion mark in the right panel with breathing room
      const maxH = height * 0.88;
      const maxW = width * 0.9;
      let drawH = maxH;
      let drawW = drawH * markAspect;
      if (drawW > maxW) {
        drawW = maxW;
        drawH = drawW / markAspect;
      }
      const padX = (width - drawW) * 0.55;
      const padY = (height - drawH) * 0.45;

      const speed = Math.hypot(mouse.vx, mouse.vy);
      const stretch = Math.min(0.25, speed * 0.05);
      const rx = affectR * (1 + stretch);
      const ry = affectR * (1 - stretch * 0.35);

      const floatX = Math.sin(time * 0.35) * 2.2;
      const floatY = Math.sin(time * 0.48 + 0.6) * 3.2;

      for (const p of particles) {
        const wobbleX =
          Math.sin(time * p.speed + p.phase) * p.amp +
          Math.sin(time * p.speed * 0.4 + p.phase * 1.4) * p.amp * 0.35;
        const wobbleY =
          Math.cos(time * p.speed * 0.88 + p.phase * 1.1) * p.amp +
          Math.sin(time * p.speed * 0.52 + p.phase) * p.amp * 0.3;

        const homeX = padX + (p.bx + wobbleX) * drawW + floatX;
        const homeY = padY + (p.by + wobbleY) * drawH + floatY;

        let forceX = 0;
        let forceY = 0;
        let voidFade = 1;

        if (mouse.strength > 0.02 && affectR > 0) {
          const dx = homeX - mouse.x;
          const dy = homeY - mouse.y;
          const nx = dx / Math.max(1, rx);
          const ny = dy / Math.max(1, ry);
          const eg = nx * nx + ny * ny;
          if (eg < 3.2) {
            const falloff = Math.exp(-eg * 1.6);
            const s = falloff * mouse.strength;
            const dist = Math.hypot(dx, dy) || 1;
            const push = s * affectR * 0.52;
            forceX += (dx / dist) * push;
            forceY += (dy / dist) * push;
            const swirl = s * affectR * 0.2;
            forceX += (-dy / dist) * swirl;
            forceY += (dx / dist) * swirl;
            forceX += mouse.vx * s * 3.5;
            forceY += mouse.vy * s * 3.5;
            voidFade = 1 - s * 0.75;
          }
        }

        const targetX = homeX + forceX;
        const targetY = homeY + forceY;

        const ax = (targetX - p.x) * 22 - p.vx * 9.5;
        const ay = (targetY - p.y) * 22 - p.vy * 9.5;
        p.vx += ax * 0.016;
        p.vy += ay * 0.016;
        p.x += p.vx * 0.016;
        p.y += p.vy * 0.016;

        const pulse = 0.9 + 0.1 * Math.sin(time * 0.7 + p.phase);
        const a = p.alpha * pulse * Math.max(0, voidFade);
        if (a < 0.03) continue;

        ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${a})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const boot = async () => {
      resize();
      try {
        const img = await loadImage("/images/hero/lion-mark.png");
        if (cancelled) return;
        markAspect = img.naturalWidth / img.naturalHeight;
        const samples = sampleSilhouette(img, particleCount, rng);
        for (const s of samples) {
          // Brand yellow with soft warm variation / edge brightness
          const warmth = (rng() - 0.5) * 18;
          const r = Math.round(255);
          const g = Math.round(204 + warmth * 0.4 + (s.lum - 0.7) * 20);
          const b = Math.round(Math.max(0, 8 + warmth * 0.2));
          particles.push({
            bx: s.u,
            by: s.v,
            x: 0,
            y: 0,
            vx: 0,
            vy: 0,
            amp: 0.003 + rng() * 0.008,
            phase: rng() * Math.PI * 2,
            speed: 0.28 + rng() * 0.75,
            size: (isMobile ? 0.7 : 0.85) + rng() * (isMobile ? 1.0 : 1.25),
            alpha: 0.28 + rng() * 0.5,
            r,
            g: Math.max(160, Math.min(230, g)),
            b,
          });
        }

        // Init pixel positions on first layout
        const rect = wrap.getBoundingClientRect();
        let drawH = rect.height * 0.88;
        let drawW = drawH * markAspect;
        if (drawW > rect.width * 0.9) {
          drawW = rect.width * 0.9;
          drawH = drawW / markAspect;
        }
        const padX = (rect.width - drawW) * 0.55;
        const padY = (rect.height - drawH) * 0.45;
        for (const p of particles) {
          p.x = padX + p.bx * drawW;
          p.y = padY + p.by * drawH;
        }
      } catch {
        // Silently no-op if asset missing
        return;
      }

      if (reduceMotion) {
        draw(0);
        return;
      }

      const loop = (frameT: number) => {
        if (!running || cancelled) return;
        draw(frameT);
        raf = window.requestAnimationFrame(loop);
      };
      raf = window.requestAnimationFrame(loop);
    };

    void boot();

    const ro = new ResizeObserver(() => {
      resize();
      if (reduceMotion && particles.length) draw(0);
    });
    ro.observe(wrap);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        window.cancelAnimationFrame(raf);
      } else if (!reduceMotion) {
        running = true;
        raf = window.requestAnimationFrame((frameT) => {
          const loop = (time: number) => {
            if (!running || cancelled) return;
            draw(time);
            raf = window.requestAnimationFrame(loop);
          };
          loop(frameT);
        });
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelled = true;
      running = false;
      window.cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={cn(
        "pointer-events-none absolute inset-y-0 right-0 w-[62%] max-w-[720px] overflow-hidden md:w-[54%]",
        className,
      )}
      aria-hidden
    >
      <canvas ref={canvasRef} className="home-hero-particles h-full w-full" />
    </div>
  );
}
