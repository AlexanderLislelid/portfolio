import { projects } from "./projects.js";

const wrapper = document.getElementById("projects");

projects.forEach((project) => {
  const card = document.createElement("div");
  const title = document.createElement("h2");
  const description = document.createElement("p");
  const image = document.createElement("img");
  const repo = document.createElement("a");
  const demo = document.createElement("a");
  const tech = document.createElement("p");

  card.className = "project-card";

  title.textContent = project.title;
  title.className = "project-title";

  description.textContent = project.description;
  description.className = "project-description";

  image.src = project.image;
  image.alt = project.description;
  image.className = "project-image";

  repo.className = "fa-brands fa-github";
  repo.href = project.repo;

  demo.className = "cta";
  demo.href = project.demo;
  demo.textContent = "Live Demo";

  tech.textContent = project.tech;
  tech.className = "project-tech";

  wrapper.append(card);
  card.append(title, description, image, repo, demo, tech);
});
