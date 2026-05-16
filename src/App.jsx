import { useState } from "react";
import initialProjects from "./data/projects";
import Header from "./components/Header";
import ProjectsForm from "./components/ProjectsForm";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchQuery, setSearchQuery] = useState("");

  function handleAddProject(newProject) {
    setProjects((prev) => [newProject, ...prev]);
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="container">
          <ProjectsForm onAddProject={handleAddProject} />
          <ProjectList
            projects={projects}
            searchQuery={searchQuery}
            onSearch={setSearchQuery}
          />
        </div>
      </main>
      <footer className="footer">
        <p>Built with React · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;