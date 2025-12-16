import { projects } from "./projects.js";
import { tools } from "./tools.js";

const projectsWrapper = document.getElementById("projects");

projects.forEach((project) => {
  const card = document.createElement("div");
  const title = document.createElement("h2");
  const description = document.createElement("p");
  const image = document.createElement("img");
  const repo = document.createElement("a");
  const demo = document.createElement("a");
  const topCard = document.createElement("div");
  const techWrapper = document.createElement("div");
  const linkWrapper = document.createElement("div");

  topCard.className = "card-desc";
  card.className = "project-card";
  techWrapper.className = "tech-wrapper";
  linkWrapper.className = "link-wrapper";

  title.textContent = project.title;
  title.className = "project-title";

  description.textContent = project.description;
  description.className = "project-description";

  image.src = project.image;
  image.alt = project.title;
  image.className = "project-image";

  repo.innerHTML = '<i class="fa-regular fa-folder"></i> Repo';
  repo.href = project.repo;
  repo.className = "cta-card";

  demo.className = "cta-card";
  demo.href = project.demo;
  demo.innerHTML = '<i class="fa-solid fa-globe"></i>  Demo';

  project.tech.forEach((techIcon) => {
    const icon = document.createElement("img");
    icon.src = techIcon;
    icon.className = "tech-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.alt = "icon";
    techWrapper.append(icon);
  });

  topCard.append(title, description, linkWrapper, techWrapper);
  projectsWrapper.append(card);

  linkWrapper.append(demo, repo);

  card.append(image, topCard);
});

// Tools and tech

const toolsImages = document.querySelector(".tools-images");
const toolsInfo = document.querySelector(".tools-info");

const defaultText = "Click a tool to view more information";
toolsInfo.textContent = defaultText;

function showToolInfo(tool) {
  toolsInfo.innerHTML = "";
  toolsInfo.classList.add("is-open");

  const closeBtn = document.createElement("button");
  closeBtn.className = "close-btn";
  closeBtn.type = "button";
  closeBtn.setAttribute("aria-label", "Close");

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";
  closeBtn.appendChild(icon);

  closeBtn.addEventListener("click", () => {
    toolsInfo.textContent = defaultText;
    toolsInfo.classList.remove("is-open");
  });

  const title = document.createElement("h3");
  title.textContent = tool.title;

  const description = document.createElement("p");
  description.textContent = tool.description;

  toolsInfo.append(closeBtn, title, description);
}

tools.forEach((tool) => {
  const img = document.createElement("img");
  img.src = tool.image;
  img.alt = tool.title;
  img.className = "tool-icon";

  img.addEventListener("click", () => showToolInfo(tool));

  toolsImages.appendChild(img);
});
