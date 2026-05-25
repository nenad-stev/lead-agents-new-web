import type { SalesTool } from "@/types/sales-tool";

import { adcreativeTool } from "./adcreative";
import { attentionTool } from "./attention";
import { artisanTool } from "./artisan";
import { attioTool } from "./attio";
import { apolloTool } from "./apollo";
import { apifyTool } from "./apify";
import { botmindsTool } from "./botminds";
import { breakcoldTool } from "./breakcold";
import { clayTool } from "./clay";
import { elevenlabsTool } from "./elevenlabs";
import { expandiTool } from "./expandi";
import { fullenrichTool } from "./fullenrich";
import { heyreachTool } from "./heyreach";
import { hubspotTool } from "./hubspot";
import { instantlyTool } from "./instantly";
import { lemlistTool } from "./lemlist";
import { laGrowthMachineTool } from "./lagrowthmachine";
import { n8nTool } from "./n8n";
import { nocrmTool } from "./nocrm";
import { odooTool } from "./odoo";
import { predictleadsTool } from "./predictleads";
import { prospeoTool } from "./prospeo";
import { relevanceAiTool } from "./relevance-ai";
import { revsureTool } from "./revsure";
import { rb2bTool } from "./rb2b";
import { sendpulseTool } from "./sendpulse";
import { smartleadTool } from "./smartlead";
import { taplioTool } from "./taplio";
import { tldvTool } from "./tldv";
import { trigifyTool } from "./trigify";
import { unbounceTool } from "./unbounce";
import { wisprFlowTool } from "./wispr-flow";

const salesTools: SalesTool[] = [
  adcreativeTool,
  attentionTool,
  artisanTool,
  attioTool,
  apolloTool,
  apifyTool,
  botmindsTool,
  breakcoldTool,
  clayTool,
  elevenlabsTool,
  expandiTool,
  fullenrichTool,
  heyreachTool,
  hubspotTool,
  instantlyTool,
  laGrowthMachineTool,
  lemlistTool,
  n8nTool,
  nocrmTool,
  odooTool,
  predictleadsTool,
  prospeoTool,
  relevanceAiTool,
  revsureTool,
  rb2bTool,
  sendpulseTool,
  smartleadTool,
  taplioTool,
  tldvTool,
  trigifyTool,
  unbounceTool,
  wisprFlowTool,
];

export function getSalesToolBySlug(slug: string): SalesTool | undefined {
  return salesTools.find((tool) => tool.slug === slug);
}

export function getAllSalesToolSlugs(): string[] {
  return salesTools.map((tool) => tool.slug);
}

export { salesTools };
