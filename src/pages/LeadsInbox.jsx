import { useState } from 'react';
import { Mail, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import './LeadsInbox.css';

const mockLeads = [
  { id: 1, name: 'David Smith', email: 'david.smith@enterprise.com', org: 'Enterprise Corp', service: 'AI Dashboard', status: 'New', date: '2026-02-26 14:30', message: 'Looking for a custom dashboard solution for our data.' },
  { id: 2, name: 'Elena Rodriguez', email: 'elena@startup.io', org: 'Startup.io', service: 'Web Portal', status: 'In Discussion', date: '2026-02-25 09:15', message: 'Need a team to build our MVP scalable portal.' },
  { id: 3, name: 'James Wilson', email: 'j.wilson@logistics.net', org: 'Global Logistics', service: 'Mobile App', status: 'Proposal Sent', date: '2026-02-20 11:00', message: 'Requesting RFQ for fleet tracking application.' },
  { id: 4, name: 'Anita Patel', email: 'apatel@meditech.org', org: 'MediTech', service: 'UI/UX Redesign', status: 'Closed', date: '2026-02-15 16:45', message: 'Our current system needs a modern overhaul.' },
];

const statuses = ['New', 'In Discussion', 'Proposal Sent', 'Closed'];

export default function LeadsInbox() {
  const [leads, setLeads] = useState(mockLeads);
  const [selectedLead, setSelectedLead] = useState(null);

  const updateStatus = (id, newStatus) => {
    setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
    if (selectedLead?.id === id) {
      setSelectedLead({ ...selectedLead, status: newStatus });
    }
  };

  return (
    <div className="page-container" style={{ height: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column' }}>
      <header className="page-header" style={{ marginBottom: '24px', flexShrink: 0 }}>
        <h1 style={{ marginBottom: '8px' }}>Leads Inbox</h1>
        <p className="text-muted" style={{ fontSize: '15px' }}>Manage incoming inquiries and proposals.</p>
      </header>

      <div style={{ display: 'flex', gap: '24px', flex: 1, minHeight: 0 }}>

        {/* Inbox Feed (List) */}
        <div className="glass-panel" style={{ width: '400px', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '14px', margin: 0 }}>Recent Inquiries</h3>
            <span className="mono-text" style={{ fontSize: '12px', color: 'var(--cyan-glow)' }}>{leads.length} TOTAL</span>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: '12px' }}>
            {leads.map(lead => (
              <div
                key={lead.id}
                className={`lead-item ${selectedLead?.id === lead.id ? 'active' : ''}`}
                onClick={() => setSelectedLead(lead)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontWeight: 600, fontSize: '14px' }}>{lead.name}</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{lead.date.split(' ')[0]}</span>
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  {lead.org} • {lead.service}
                </div>
                <div style={{ display: 'inline-block', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', border: '1px solid var(--border-light)' }}>
                  {lead.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Focus View */}
        <div className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {selectedLead ? (
            <>
              <div style={{ padding: '24px', borderBottom: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>{selectedLead.name}</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
                      <a href={`mailto:${selectedLead.email}`} className="email-link">
                        <Mail size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                        {selectedLead.email}
                      </a>
                    </p>
                  </div>

                  {/* Pipeline Pipeline Dropdown */}
                  <div className="pipeline-control">
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginRight: '12px' }}>STATUS</span>
                    <select
                      className="cyber-input"
                      style={{ width: '160px', padding: '6px 10px' }}
                      value={selectedLead.status}
                      onChange={(e) => updateStatus(selectedLead.id, e.target.value)}
                    >
                      {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '32px', marginTop: '24px' }}>
                  <div>
                    <span style={{ display: 'block', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>ORGANIZATION</span>
                    <span style={{ fontWeight: 500 }}>{selectedLead.org}</span>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>SERVICE REQUESTED</span>
                    <span style={{ fontWeight: 500 }}>{selectedLead.service}</span>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>RECEIVED</span>
                    <span className="mono-text" style={{ fontSize: '13px' }}>{selectedLead.date}</span>
                  </div>
                </div>
              </div>

              <div style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
                <h4 style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>MESSAGE</h4>
                <div style={{
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid var(--border-light)',
                  padding: '20px',
                  borderRadius: '8px',
                  lineHeight: '1.6',
                  color: 'rgba(255,255,255,0.9)'
                }}>
                  {selectedLead.message}
                </div>
              </div>

              <div style={{ padding: '20px 24px', borderTop: '1px solid var(--border-light)', background: 'rgba(0,0,0,0.2)' }}>
                <a href={`mailto:${selectedLead.email}`} className="cyber-button primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                  <Mail size={16} /> REPLY VIA EMAIL
                </a>
              </div>
            </>
          ) : (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
              <Inbox size={48} style={{ opacity: 0.2, marginBottom: '16px' }} />
              <p>Select an inquiry to view details</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
