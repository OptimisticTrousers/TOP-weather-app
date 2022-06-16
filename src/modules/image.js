export default function renderImage(condition) {
  const main = document.querySelector("main");

  const weatherCondition = condition.toLowerCase();

  if (weatherCondition.includes("thunder")) {
    main.style.backgroundImage = "url(../../dist/images/thunder.jpg)";
  } else if (weatherCondition.includes("rain")) {
    main.style.backgroundImage = "url(../../dist/images/rain.jpg)";
  } else if (weatherCondition.includes("snow")) {
    main.style.backgroundImage = "url(../../dist/images/snow.jpg)";
  } else if (weatherCondition.includes("clear")) {
    main.style.backgroundImage = "url(../../dist/images/clear.jpg)";
  } else if (weatherCondition.includes("cloud")) {
    main.style.backgroundImage = "url(../../dist/images/cloud.jpg)";
  } else {
    main.style.backgroundImage = "url(../../dist/images/fog.jpg)";
  }
}
