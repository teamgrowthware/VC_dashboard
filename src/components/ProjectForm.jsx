import { useState } from 'react';
import { Save, X, Image as ImageIcon, Plus, X as RemoveIcon } from 'lucide-react';

export default function ProjectForm({ initialData, onSave, onCancel }) {
  const [formData, setFormData] = useState(initialData || {
    name: '',
    category: '',
    type: '',
    client: '',
    year: '',
    techStack: [],
    status: 'Draft',
    description: ''
  });

  const [techInput, setTechInput] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddTech = (e) => {
    e.preventDefault();
    if (techInput.trim() && !formData.techStack.includes(techInput.trim())) {
      setFormData(prev => ({ ...prev, techStack: [...prev.techStack, techInput.trim()] }));
      setTechInput('');
    }
  };

  const handleRemoveTech = (tech) => {
    setFormData(prev => ({ ...prev, techStack: prev.techStack.filter(t => t !== tech) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="glass-panel" style={{ padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>
        <h2 style={{ fontSize: '20px' }}>{initialData ? 'Edit Project' : 'New Project'}</h2>
        <button className="action-btn" onClick={onCancel}>
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>

          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>Project Name</label>
              <input required type="text" name="name" className="cyber-input" value={formData.name} onChange={handleChange} placeholder="e.g. ChartMind Analytics" />
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>Category</label>
                <input required type="text" name="category" className="cyber-input" value={formData.category} onChange={handleChange} placeholder="e.g. AI" />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>Type</label>
                <input required type="text" name="type" className="cyber-input" value={formData.type} onChange={handleChange} placeholder="e.g. Dashboard" />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>Client</label>
                <input required type="text" name="client" className="cyber-input" value={formData.client} onChange={handleChange} placeholder="e.g. FinTech Corp" />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>Year</label>
                <input required type="text" name="year" className="cyber-input" value={formData.year} onChange={handleChange} placeholder="e.g. 2025" />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>Tech Stack</label>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                <input
                  type="text"
                  className="cyber-input"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleAddTech(e); }}
                  placeholder="Add technology..."
                />
                <button type="button" className="cyber-button" onClick={handleAddTech} style={{ padding: '8px 12px' }}>
                  <Plus size={16} />
                </button>
              </div>
              <div className="tech-stack-preview">
                {formData.techStack.map(tech => (
                  <span key={tech} className="tech-tag" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {tech}
                    <RemoveIcon size={12} style={{ cursor: 'pointer' }} onClick={() => handleRemoveTech(tech)} />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>Preview Image</label>
              <div style={{
                border: '2px dashed var(--border-light)',
                borderRadius: '8px',
                height: '160px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                background: 'rgba(0,0,0,0.2)',
                cursor: 'pointer'
              }}>
                <ImageIcon size={32} style={{ marginBottom: '12px', opacity: 0.5 }} />
                <span className="mono-text" style={{ fontSize: '12px' }}>CLICK TO UPLOAD ASSET</span>
              </div>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>Case Study Content</label>
              <div style={{ border: '1px solid var(--border-light)', borderRadius: '6px', background: 'rgba(0,0,0,0.3)', padding: '8px', marginBottom: '8px', display: 'flex', gap: '8px' }}>
                <button type="button" style={{ color: 'var(--text-muted)' }}><b>B</b></button>
                <button type="button" style={{ color: 'var(--text-muted)' }}><i>I</i></button>
                <button type="button" style={{ color: 'var(--text-muted)' }}><u>U</u></button>
                <div style={{ width: '1px', background: 'var(--border-light)', margin: '0 4px' }}></div>
                <button type="button" style={{ color: 'var(--text-muted)' }}>H1</button>
                <button type="button" style={{ color: 'var(--text-muted)' }}>H2</button>
              </div>
              <textarea
                className="cyber-input"
                name="description"
                value={formData.description}
                onChange={handleChange}
                style={{ flex: 1, minHeight: '150px', resize: 'vertical' }}
                placeholder="Write the case study content here..."
              ></textarea>
            </div>
          </div>

        </div>

        <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-end', gap: '16px', borderTop: '1px solid var(--border-light)', paddingTop: '24px' }}>
          <button type="button" className="cyber-button" onClick={onCancel}>
            CANCEL
          </button>
          <button type="submit" className="cyber-button primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Save size={16} /> SAVE PROJECT
          </button>
        </div>
      </form>
    </div>
  );
}
