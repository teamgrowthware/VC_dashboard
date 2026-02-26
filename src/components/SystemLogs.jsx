import { useEffect, useState, useRef } from 'react';

const mockLogs = [
  { id: 1, type: 'info', message: 'System boot sequence initiated.', time: '08:00:01' },
  { id: 2, type: 'info', message: 'Node GB-01 synced securely.', time: '08:01:23' },
  { id: 3, type: 'warn', message: 'High CPU detected on Node US-04.', time: '08:15:44' },
  { id: 4, type: 'error', message: 'Failed login attempt from IP 192.168.1.45', time: '08:42:10' },
  { id: 5, type: 'info', message: 'Backup completed successfully.', time: '09:00:00' },
  { id: 6, type: 'warn', message: 'API latency spike detected in eu-west region.', time: '09:12:33' },
];

export default function SystemLogs() {
  const [logs, setLogs] = useState(mockLogs);
  const endOfLogsRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    endOfLogsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  // Simulate incoming logs
  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = {
        id: Date.now(),
        type: Math.random() > 0.8 ? (Math.random() > 0.5 ? 'error' : 'warn') : 'info',
        message: `Node sync heartbeat received from zone ${Math.floor(Math.random() * 10)}...`,
        time: new Date().toLocaleTimeString('en-US', { hour12: false })
      };
      setLogs((prev) => [...prev.slice(-49), newLog]); // Keep max 50 logs
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel" style={{ height: '350px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '20px 20px 10px', borderBottom: '1px solid var(--border-light)' }}>
        <h3 style={{ fontSize: '16px', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between' }}>
          <span>System Console</span>
          <span className="mono-text" style={{ fontSize: '12px', color: 'var(--status-online)' }}>_LIVE</span>
        </h3>
      </div>
      <div className="terminal-feed" style={{ flex: 1, border: 'none', borderRadius: '0 0 12px 12px', padding: '16px' }}>
        {logs.map((log) => (
          <p key={log.id} className={`log-${log.type}`}>
            <span style={{ color: 'var(--text-muted)' }}>[{log.time}]</span>{' '}
            {log.type.toUpperCase()}: {log.message}
          </p>
        ))}
        <div ref={endOfLogsRef} />
      </div>
    </div>
  );
}
