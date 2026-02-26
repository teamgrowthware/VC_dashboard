import { useState } from 'react';
import { Search, Shield, MoreVertical } from 'lucide-react';

const mockUsers = [
  { id: 1, name: 'Mahek Saarla', email: 'mahek@vortexcubes.com', role: 'Super Admin', status: 'Active', lastLogin: 'Just now' },
  { id: 2, name: 'Alex Chen', email: 'alex@vortexcubes.com', role: 'Engineer/Dev', status: 'Active', lastLogin: '2h ago' },
  { id: 3, name: 'Sarah Jenkins', email: 'sarah@fintechcorp.com', role: 'Client', status: 'Offline', lastLogin: '1d ago' },
  { id: 4, name: 'Michael Ross', email: 'm.ross@aurahotels.com', role: 'Client', status: 'Suspended', lastLogin: '1w ago' },
  { id: 5, name: 'Dev Team Lead', email: 'dev@vortexcubes.com', role: 'Engineer/Dev', status: 'Active', lastLogin: '5m ago' },
];

export default function CRM() {
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleStatus = (id) => {
    setUsers(users.map(u => {
      if (u.id === id) {
        const nextStatus = u.status === 'Active' ? 'Suspended' : u.status === 'Suspended' ? 'Offline' : 'Active';
        return { ...u, status: nextStatus };
      }
      return u;
    }));
  };

  return (
    <div className="page-container">
      <header className="page-header" style={{ marginBottom: '32px' }}>
        <h1 style={{ marginBottom: '8px' }}>Client CRM</h1>
        <p className="text-muted" style={{ fontSize: '15px' }}>Manage directory access, roles, and client status.</p>
      </header>

      <div className="glass-panel" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div style={{ position: 'relative', width: '300px' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '10px', color: 'var(--text-muted)' }} />
            <input
              type="text"
              className="cyber-input"
              placeholder="Search users..."
              style={{ paddingLeft: '36px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="cyber-button primary">
            <Shield size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }} />
            PROVISION ACCESS
          </button>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)', color: 'var(--text-muted)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                <th style={{ padding: '16px 12px' }}>User</th>
                <th style={{ padding: '16px 12px' }}>Role</th>
                <th style={{ padding: '16px 12px' }}>Status</th>
                <th style={{ padding: '16px 12px' }}>Last Login</th>
                <th style={{ padding: '16px 12px', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', transition: 'background 0.2s' }}>
                  <td style={{ padding: '16px 12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div className="avatar">{user.name.charAt(0)}</div>
                      <div>
                        <div style={{ fontWeight: 500 }}>{user.name}</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '16px 12px' }}>
                    <span className="mono-text" style={{ fontSize: '13px', color: user.role === 'Super Admin' ? 'var(--cyan-glow)' : 'var(--text-primary)' }}>
                      {user.role}
                    </span>
                  </td>
                  <td style={{ padding: '16px 12px' }}>
                    <button
                      onClick={() => toggleStatus(user.id)}
                      style={{
                        background: 'transparent',
                        color: user.status === 'Active' ? 'var(--status-online)' : user.status === 'Suspended' ? 'var(--status-offline)' : 'var(--text-muted)',
                        cursor: 'pointer',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        border: `1px solid ${user.status === 'Active' ? 'var(--status-online)' : user.status === 'Suspended' ? 'var(--status-offline)' : 'var(--text-muted)'}`
                      }}
                    >
                      {user.status}
                    </button>
                  </td>
                  <td style={{ padding: '16px 12px', color: 'var(--text-muted)', fontSize: '14px' }}>
                    {user.lastLogin}
                  </td>
                  <td style={{ padding: '16px 12px', textAlign: 'right' }}>
                    <button className="action-btn" style={{ display: 'inline-flex', padding: '4px' }}>
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
