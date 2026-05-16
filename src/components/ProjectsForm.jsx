import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tech, setTech] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setError("Please fill in both Title and Description.");
      return;
    }
    onAddProject({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      tech: tech ? tech.split(",").map((t) => t.trim()).filter(Boolean) : [],

      link: "",});
    setTitle("");
    setDescription("");
    setTech("");
    setError("");
  }

  return (
    <section className="form-section">
      <h2 className="section-title">Add Project</h2>
      <form className="project-form" onSubmit={handleSubmit}>
        {error && <p className="form-error">{error}</p>}

        <div className="form-group">
          <label className="form-label" htmlFor="title">Title</label>
          <input
            id="title"
            className="form-input"
            type="text"
            placeholder="e.g. Weather App"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="description">Description</label>
          <textarea
            id="description"
            className="form-textarea"
            placeholder="What does this project do?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="tech">
            Tech Stack{" "}
            <span className="form-hint">(comma-separated, optional)</span>
          </label>
          <input
            id="tech"
            className="form-input"
            type="text"
            placeholder="e.g. React, HTML, CSS, JavaScript"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
          />
        </div>

        <button className="btn-add" type="submit">
          + Add Project
        </button>
      </form>
    </section>
  );
}

export default ProjectForm;