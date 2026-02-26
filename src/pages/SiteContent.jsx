import { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Share2, Save } from 'lucide-react';

export default function SiteContent() {
  const [formData, setFormData] = useState({
    phone: '+1 (555) 123-4567',
    email: 'hello@vortexcubes.com',
    address: '100 Cybernetic Way, Suite 404, San Francisco, CA 94105',
    linkedin: 'https://linkedin.com/company/vortex-cubes',
    twitter: 'https://twitter.com/vortexcubes',
    github: 'https://github.com/vortex-cubes',
    metaTitle: 'Vortex Cubes | Next-Gen Enterprise Software',
    metaDesc: 'We build high-performance, dark-mode, and cyber-aesthetic web portals for enterprise clients globally.'
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      // alert('Site Content Updated!');
    }, 1000);
  };

  return (
    <div className="page-container" style={{ paddingBottom: '60px' }}>
      <header className="page-header" style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ marginBottom: '8px' }}>Site Content</h1>
          <p className="text-muted" style={{ fontSize: '15px' }}>Manage public-facing footer details, contacts, and SEO metadata.</p>
        </div>
        <button
          className="cyber-button primary"
          onClick={handleSave}
          disabled={isSaving}
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <Save size={16} /> {isSaving ? 'SAVING...' : 'SAVE CHANGES'}
        </button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>

        {/* Contact Info (Footer) */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px' }}>
            <MapPin className="text-muted" />
            <h2 style={{ fontSize: '16px' }}>Public Contact Info (Footer)</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <Phone size={14} /> Main Phone Number
              </label>
              <input type="text" name="phone" className="cyber-input" value={formData.phone} onChange={handleChange} />
            </div>

            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <Mail size={14} /> Support Email
              </label>
              <input type="email" name="email" className="cyber-input" value={formData.email} onChange={handleChange} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>Physical Address</label>
              <textarea name="address" className="cyber-input" style={{ width: '100%', minHeight: '80px', resize: 'vertical' }} value={formData.address} onChange={handleChange}></textarea>
            </div>
          </div>
        </div>

        {/* Social Links & SEO */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

          <div className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px' }}>
              <Share2 className="text-muted" />
              <h2 style={{ fontSize: '16px' }}>Social Links</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>LinkedIn URL</label>
                <input type="url" name="linkedin" className="cyber-input" value={formData.linkedin} onChange={handleChange} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>Twitter/X URL</label>
                <input type="url" name="twitter" className="cyber-input" value={formData.twitter} onChange={handleChange} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>GitHub URL</label>
                <input type="url" name="github" className="cyber-input" value={formData.github} onChange={handleChange} />
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px' }}>
              <Globe className="text-muted" />
              <h2 style={{ fontSize: '16px' }}>SEO / Brand Meta</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>Global Meta Title</label>
                <input type="text" name="metaTitle" className="cyber-input" value={formData.metaTitle} onChange={handleChange} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>Global Meta Description</label>
                <textarea name="metaDesc" className="cyber-input" style={{ width: '100%', minHeight: '80px', resize: 'vertical' }} value={formData.metaDesc} onChange={handleChange}></textarea>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
