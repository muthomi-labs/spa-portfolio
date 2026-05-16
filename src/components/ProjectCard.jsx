function ProjectCard({ project }) {
  return (
    <article
      className="project-card"
      onClick={() => project.link && project.link !== "#" && window.open(project.link, "_blank")}
      style={{ cursor: project.link && project.link !== "#" ? "pointer" : "default" }}
    >
      <div className="card-accent" />
      <div className="card-body">
        <div className="card-header">
          <h3 className="card-title">{project.title}</h3>
          {project.link && project.link !== "#" && (
            <a
              className="card-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              ↗
            </a>
          )}
        </div>
        <p className="card-description">{project.description}</p>
        {project.tech && project.tech.length > 0 && (
          <div className="card-tags">
            {project.tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;