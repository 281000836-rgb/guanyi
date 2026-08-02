const CHECKS = {
  daylight: "让常用区域获得更稳定的自然光",
  airflow: "检查开窗与空气流动是否顺畅",
  pathway: "清理高频动线上的阻挡物",
  storage: "为常用物品设置固定收纳位置",
  quiet: "保留一个低干扰的休息角落",
};

export function observeSpace(selected = []) {
  const unique = [...new Set(selected)].filter((key) => key in CHECKS);
  return {
    completed: unique,
    suggestions: unique.map((key) => CHECKS[key]),
    remaining: Object.keys(CHECKS).filter((key) => !unique.includes(key)),
    disclaimer: "这是生活环境观察清单，不属于风水效果承诺。",
  };
}

export const spaceCheckKeys = Object.freeze(Object.keys(CHECKS));
