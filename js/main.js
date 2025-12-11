import { projects } from "./projects.js";

const wrapper = document.getElementById("projects");

projects.forEach((project) => {
  const card = document.createElement("div");
  const title = document.createElement("h2");
  const description = document.createElement("p");
  const image = document.createElement("img");
  const repo = document.createElement("a");
  const demo = document.createElement("a");
  const bottomCard = document.createElement("div");
  const techWrapper = document.createElement("div");
  const linkWrapper = document.createElement("div");

  card.className = "project-card";
  techWrapper.className = "tech-wrapper";
  linkWrapper.className = "link-wrapper";
  bottomCard.className = "bottom-card-wrapper";

  title.textContent = project.title;
  title.className = "project-title";

  description.textContent = project.description;
  description.className = "project-description";

  image.src = project.image;
  image.alt = project.description;
  image.className = "project-image";

  repo.innerHTML = `Repository <i class="fa-brands fa-github"></i>`;
  repo.href = project.repo;
  repo.className = "repo";

  demo.className = "cta";
  demo.href = project.demo;
  demo.textContent = "Live Demo";

  project.tech.forEach((techIcon) => {
    const icon = document.createElement("img");
    icon.src = techIcon;
    icon.className = "tech-icon";
    techWrapper.append(icon);
  });

  wrapper.append(card);
  bottomCard.append(linkWrapper, techWrapper);
  linkWrapper.append(demo, repo);

  card.append(title, description, image, bottomCard);
});
