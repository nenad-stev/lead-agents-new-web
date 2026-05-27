/** Fixed ambient layer for the homepage, animated yellow glows, one unified base. */
export function HomeAmbientBackground() {
  return (
    <div className="home-ambient pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="home-ambient__orb home-ambient__orb--1" />
      <div className="home-ambient__orb home-ambient__orb--2" />
      <div className="home-ambient__orb home-ambient__orb--3" />
      <div className="home-ambient__orb home-ambient__orb--4" />
    </div>
  );
}
