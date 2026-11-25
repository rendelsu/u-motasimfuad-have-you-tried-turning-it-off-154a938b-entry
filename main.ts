// Gag: the agent rebooted itself before answering, so the customer's smoking laptop is brand-new information to it.
// The twist lands in the final words: after the reboot, the laptop is a complete surprise to the agent too.
const fs = require("node:fs");
const path = require("node:path");

const line = "Great news: I rebooted myself before answering, so your smoking laptop is a complete surprise to me too.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
