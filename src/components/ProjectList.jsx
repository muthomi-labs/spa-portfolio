import ProjectCard from "./ProjectCard";
import SearchBar from "./SearchBar";

function ProjectList({ projects, searchQuery, onSearch }) {
  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="list-section">
      <div className="list-header">
        <h2 className="section-title">Projects</h2>
        <span className="project-count">
          {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      <SearchBar searchQuery={searchQuery} onSearch={onSearch} />

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p>No projects match "<strong>{searchQuery}</strong>"</p>
          <p className="empty-hint">Try a different search term.</p>
        </div>
      ) : (
        <div className="projects-grid">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProjectList;