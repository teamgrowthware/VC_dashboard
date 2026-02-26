import { useState } from 'react';
import { Plus, Search, Edit2, Trash2, ExternalLink } from 'lucide-react';
import { mockProjects } from '../data/projects';
import ProjectForm from '../components/ProjectForm';
import './PortfolioManager.css';

export default function PortfolioManager() {
  const [projects, setProjects] = useState(mockProjects);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const filteredProjects = projects.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const handleSave = (projectData) => {
    if (editingProject) {
      setProjects(projects.map(p => p.id === editingProject.id ? { ...p, ...projectData } : p));
    } else {
      setProjects([...projects, { ...projectData, id: Date.now().toString() }]);
    }
    setIsFormOpen(false);
    setEditingProject(null);
  };

  return (
    <div className="page-container">
      <header className="page-header" style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ marginBottom: '8px' }}>Portfolio Engine</h1>
          <p className="text-muted" style={{ fontSize: '15px' }}>Manage case studies, tech stacks, and live projects.</p>
        </div>
        <button
          className="cyber-button primary"
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          onClick={() => { setEditingProject(null); setIsFormOpen(true); }}
        >
          <Plus size={16} /> NEW PROJECT
        </button>
      </header>

      {isFormOpen ? (
        <ProjectForm
          initialData={editingProject}
          onSave={handleSave}
          onCancel={() => { setIsFormOpen(false); setEditingProject(null); }}
        />
      ) : (
        <div className="glass-panel" style={{ padding: '24px' }}>
          <div className="controls-bar" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
            <div className="search-box" style={{ position: 'relative', width: '300px' }}>
              <Search size={16} style={{ position: 'absolute', left: '12px', top: '10px', color: 'var(--text-muted)' }} />
              <input
                type="text"
                className="cyber-input"
                placeholder="Search projects..."
                style={{ paddingLeft: '36px' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-box">
              <select className="cyber-input" style={{ width: '150px' }}>
                <option value="all">All Statuses</option>
                <option value="published">Published</option>
                <option value="draft">Drafts</option>
              </select>
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image-placeholder">
                  {project.image ? <img src={project.image} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} /> : 'NO IMAGE'}
                  <div className={`status-badge ${project.status.toLowerCase()}`}>{project.status}</div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.name}</h3>
                  <div className="project-meta">
                    <span className="mono-text">{project.category}</span> • <span>{project.type}</span>
                  </div>
                  <div className="tech-stack-preview">
                    {project.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                    {project.techStack.length > 3 && <span className="tech-tag">+{project.techStack.length - 3}</span>}
                  </div>
                </div>
                <div className="project-actions">
                  <button className="action-btn" onClick={() => { setEditingProject(project); setIsFormOpen(true); }}>
                    <Edit2 size={16} />
                  </button>
                  <button className="action-btn">
                    <ExternalLink size={16} />
                  </button>
                  <button className="action-btn danger" onClick={() => handleDelete(project.id)}>
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
