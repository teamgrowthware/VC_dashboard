import { useState } from 'react';
import { Shield, Key, Database, Bell, AlertTriangle } from 'lucide-react';

export default function Settings() {
  const [apiKeyVisible, setApiKeyVisible] = useState(false);

  return (
    <div className="page-container" style={{ paddingBottom: '60px' }}>
      <header className="page-header" style={{ marginBottom: '32px' }}>
        <h1 style={{ marginBottom: '8px' }}>System Configuration</h1>
        <p className="text-muted" style={{ fontSize: '15px' }}>Security policies, API management, and internal settings.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) minmax(400px, 1fr)', gap: '24px' }}>

        {/* Security Policies */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px' }}>
            <Shield className="text-muted" />
            <h2 style={{ fontSize: '16px' }}>Security Policies</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 500, marginBottom: '4px' }}>Force 2FA</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Require two-factor authentication for all Admin roles.</div>
              </div>
              <label style={{ position: 'relative', display: 'inline-block', width: '40px', height: '24px' }}>
                <input type="checkbox" defaultChecked style={{ opacity: 0, width: 0, height: 0 }} />
                <span style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'var(--cyan-glow)', borderRadius: '24px', transition: '0.4s' }}></span>
                <span style={{ position: 'absolute', content: '""', height: '16px', width: '16px', left: '20px', bottom: '4px', backgroundColor: 'var(--bg-deep)', borderRadius: '50%', transition: '0.4s' }}></span>
              </label>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>Session Timeout (Minutes)</label>
              <input type="number" className="cyber-input" defaultValue={30} style={{ width: '100px' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>Admin IP Whitelist</label>
              <textarea className="cyber-input" style={{ width: '100%', minHeight: '80px', resize: 'vertical' }} placeholder="Enter IPs separated by commas..." defaultValue={"192.168.1.1, 10.0.0.2"}></textarea>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* API Management */}
          <div className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px' }}>
              <Key className="text-muted" />
              <h2 style={{ fontSize: '16px' }}>API Management</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>Production Endpoint</label>
                <input type="text" className="cyber-input mono-text" defaultValue="https://api.vortexcubes.com/v1" />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>Master API Key</label>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <input
                    type={apiKeyVisible ? "text" : "password"}
                    className="cyber-input mono-text"
                    defaultValue="vc_live_8f92bd3910c44f0b"
                    readOnly
                  />
                  <button className="cyber-button" onClick={() => setApiKeyVisible(!apiKeyVisible)}>
                    {apiKeyVisible ? 'HIDE' : 'SHOW'}
                  </button>
                  <button className="cyber-button">ROTATE</button>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px' }}>
              <Bell className="text-muted" />
              <h2 style={{ fontSize: '16px' }}>Alerts & Notifications</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked /> Slack alerts for Critical Errors
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked /> Email alerts for New Deployments
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', cursor: 'pointer' }}>
                <input type="checkbox" /> Weekly Analytics Report summary
              </label>
            </div>
          </div>
        </div>

        {/* Database Operations (Danger Zone) */}
        <div className="glass-panel" style={{ padding: '24px', gridColumn: '1 / -1', border: '1px solid rgba(255, 51, 102, 0.3)', background: 'rgba(255, 51, 102, 0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', borderBottom: '1px solid rgba(255, 51, 102, 0.3)', paddingBottom: '12px' }}>
            <Database style={{ color: 'var(--status-offline)' }} />
            <h2 style={{ fontSize: '16px', color: 'var(--status-offline)' }}>Database Operations</h2>
          </div>

          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                Manual database controls. These actions directly affect the production environment. Proceed with caution.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button className="cyber-button">TRIGGER BACKUP</button>
              <button className="cyber-button danger" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertTriangle size={16} /> FLUSH CACHE
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
