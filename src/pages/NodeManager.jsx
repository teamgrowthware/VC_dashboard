import { useState } from 'react';
import { Activity, MapPin, Power, RefreshCw } from 'lucide-react';
import './NodeManager.css';

const initialNodes = [
  { id: 'gb-01', location: 'London, UK', lat: '51.5074', lng: '-0.1278', client: 'Enterprise Corp', status: 'ONLINE', latency: '12ms' },
  { id: 'us-04', location: 'San Francisco, CA', lat: '37.7749', lng: '-122.4194', client: 'Aura Hotels', status: 'ONLINE', latency: '24ms' },
  { id: 'nl-02', location: 'Amsterdam, NL', lat: '52.3676', lng: '4.9041', client: 'Green Earth', status: 'ONLINE', latency: '15ms' },
  { id: 'de-01', location: 'Berlin, DE', lat: '52.5200', lng: '13.4050', client: 'Internal Core', status: 'OFFLINE', latency: '--' },
  { id: 'bd-01', location: 'Dhaka, BD', lat: '23.8103', lng: '90.4125', client: 'MediTech', status: 'ONLINE', latency: '48ms' },
];

export default function NodeManager() {
  const [nodes, setNodes] = useState(initialNodes);
  const [isSyncing, setIsSyncing] = useState(false);

  const toggleNodeStatus = (id) => {
    setNodes(nodes.map(node => {
      if (node.id === id) {
        return {
          ...node,
          status: node.status === 'ONLINE' ? 'OFFLINE' : 'ONLINE',
          latency: node.status === 'ONLINE' ? '--' : Math.floor(Math.random() * 50 + 10) + 'ms'
        };
      }
      return node;
    }));
  };

  const handleGlobalSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 2000);
  };

  const onlineCount = nodes.filter(n => n.status === 'ONLINE').length;

  return (
    <div className="page-container">
      <header className="page-header" style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ marginBottom: '8px' }}>Global Nodes</h1>
          <p className="text-muted" style={{ fontSize: '15px' }}>Manage 3D globe synchronization and node status.</p>
        </div>
        <button
          className="cyber-button"
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          onClick={handleGlobalSync}
          disabled={isSyncing}
        >
          <RefreshCw size={16} className={isSyncing ? 'spin' : ''} />
          {isSyncing ? 'SYNCING GLOBE...' : 'SYNC GLOBE DATA'}
        </button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr)', gap: '24px', marginBottom: '24px' }}>
        <div className="glass-panel" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ padding: '12px', background: 'rgba(0, 240, 255, 0.1)', borderRadius: '8px', color: 'var(--cyan-glow)' }}><Activity size={24} /></div>
          <div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Total Nodes</div>
            <div className="mono-text" style={{ fontSize: '24px' }}>{nodes.length}</div>
          </div>
        </div>
        <div className="glass-panel" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ padding: '12px', background: 'rgba(0, 255, 170, 0.1)', borderRadius: '8px', color: 'var(--status-online)' }}><Power size={24} /></div>
          <div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Active Zones</div>
            <div className="mono-text" style={{ fontSize: '24px', color: 'var(--status-online)' }}>{onlineCount}</div>
          </div>
        </div>
        <div className="glass-panel" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', color: 'var(--text-muted)' }}><MapPin size={24} /></div>
          <div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Global Coverage</div>
            <div className="mono-text" style={{ fontSize: '24px' }}>{Math.round((onlineCount / nodes.length) * 100)}%</div>
          </div>
        </div>
      </div>

      <div className="glass-panel">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)', color: 'var(--text-muted)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                <th style={{ padding: '20px 24px' }}>Node ID</th>
                <th style={{ padding: '20px 24px' }}>Location</th>
                <th style={{ padding: '20px 24px' }}>Coordinates (Lat, Lng)</th>
                <th style={{ padding: '20px 24px' }}>Assigned Client</th>
                <th style={{ padding: '20px 24px' }}>Latency</th>
                <th style={{ padding: '20px 24px', textAlign: 'right' }}>Status / Action</th>
              </tr>
            </thead>
            <tbody>
              {nodes.map(node => (
                <tr key={node.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', transition: 'background 0.2s', background: node.status === 'OFFLINE' ? 'rgba(0,0,0,0.2)' : 'transparent' }}>
                  <td style={{ padding: '16px 24px' }}>
                    <span className="mono-text" style={{ fontSize: '13px', color: 'var(--cyan-glow)' }}>{node.id.toUpperCase()}</span>
                  </td>
                  <td style={{ padding: '16px 24px', fontWeight: 500 }}>
                    {node.location}
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <span className="mono-text" style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                      {node.lat}, {node.lng}
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px', fontSize: '14px', color: 'var(--text-muted)' }}>
                    {node.client}
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <span className="mono-text" style={{ fontSize: '13px', color: node.status === 'ONLINE' ? 'var(--status-online)' : 'var(--text-muted)' }}>
                      {node.latency}
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                    <button
                      onClick={() => toggleNodeStatus(node.id)}
                      className={`node-toggle-btn ${node.status.toLowerCase()}`}
                    >
                      <span className="pulse-dot"></span>
                      {node.status}
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
