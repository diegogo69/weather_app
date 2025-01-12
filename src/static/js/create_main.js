import appValues from "./app_values";

const { WEEK_DAYS } = appValues;

function createMainElements(domElements) {
  const main = document.querySelector("main");

  for (let key in domElements) {
    switch (key) {
      case "summary":
        const summary = createSummary(domElements[key]);
        main.appendChild(summary);
        break;
      case "details":
        const details = createDetails(domElements[key]);
        main.appendChild(details);
        break;
      case "days":
        const weekdays = createWeekDays();
        main.appendChild(weekdays);
        break;
    }
  }
}

function createSummary(nodes) {
  const summary = document.createElement("div");
  summary.classList.add("summary-container", "summary");

  for (let node of nodes) {
    const el = document.createElement("div");
    el.classList.add(node["class"]);

    summary.appendChild(el);
  }

  return summary;
}

function createDetails(nodes) {
  const details = document.createElement("div");
  details.classList.add("details-container", "details");

  for (let node of nodes) {
    let el;
    switch (node["class"]) {
      case "description":
        el = document.createElement("p");
        break;
      default:
        el = document.createElement("div");
        break;
    }
    el.classList.add(node["class"]);

    details.appendChild(el);
  }

  return details;
}

function createWeekDays() {
  const weekdays = document.createElement("div");
  weekdays.classList.add("days-container");

  for (let i = 0; i < WEEK_DAYS; i++) {
    const weekday = document.createElement("div");
    weekday.classList.add("week-day");

    const day = document.createElement("div");
    day.classList.add("day");

    const icon = document.createElement("div");
    icon.classList.add("weather-icon");

    const conditions = document.createElement("div");
    conditions.classList.add("conditions");

    weekday.appendChild(day);
    weekday.appendChild(icon);
    weekday.appendChild(conditions);

    weekdays.appendChild(weekday);
  }

  return weekdays;
}

export { createMainElements };
