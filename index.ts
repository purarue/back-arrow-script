// fetch data from the <meta property="ba:..." /> tags
const fetchData = (prop: string, defaultValue: string): string => {
  const el = document.querySelector(`meta[property="ba:${prop}"]`);
  if (el && el["content"]) {
    return el["content"];
  }
  return defaultValue;
};

const fetchTitle = () => fetchData("title", "back");
const fetchUrl = () => fetchData("url", "/");
const fetchColor = () => fetchData("color", "#4f4f4f");

const createBackArrow = () => {
  // insert back arrow svg container at top
  const div = document.createElement("div");
  div.className = "back-arrow";

  // fetch title from metadata if it exists
  div.title = fetchTitle();
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>`;
  div.append(svg);

  // set path color
  const path = svg.querySelector("path");
  path.style.fill = fetchColor();

  // add div to top level link
  const link = document.createElement("a");
  link.href = fetchUrl();
  link.append(div);

  document.body.insertBefore(link, document.body.firstChild);

  // append CSS to head
  const cssText = `.back-arrow{
position:absolute;top:0;left:0;width:40px;height:40px;margin:1rem;
}
.back-arrow svg {
width:inherit;height:inherit;cursor:pointer;
}`;
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");

  style.appendChild(document.createTextNode(cssText));
  head.appendChild(style);
};

document.addEventListener("DOMContentLoaded", createBackArrow, false);
