import { dailyRhythm, observeSpace } from "../src/index.js";

document.querySelector("#rhythm").addEventListener("click", () => {
  const value = dailyRhythm();
  document.querySelector("#rhythm-result").textContent = `${value.phase}：${value.suggestion}`;
});
document.querySelector("#space").addEventListener("click", () => {
  const value = observeSpace(["daylight", "airflow", "pathway"]);
  document.querySelector("#space-result").innerHTML = value.suggestions.map((item) => `<div>· ${item}</div>`).join("");
});
