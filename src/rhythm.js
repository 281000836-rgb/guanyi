const PHASES = [
  { name: "萌生", action: "收集线索，写下一个最小起点" },
  { name: "舒展", action: "推进一件已经开始的小事" },
  { name: "整理", action: "减少干扰，完成一次收束" },
  { name: "沉静", action: "留出空白，复盘近期变化" },
];

function stableDayNumber(date) {
  const utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  return Math.floor(utc / 86400000);
}

export function dailyRhythm(input = new Date()) {
  const date = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(date.getTime())) throw new TypeError("Invalid date");
  const phase = PHASES[((stableDayNumber(date) % PHASES.length) + PHASES.length) % PHASES.length];
  return {
    date: date.toISOString().slice(0, 10),
    phase: phase.name,
    suggestion: phase.action,
    disclaimer: "用于文化体验和自我观察，不构成命运预测或专业意见。",
  };
}
