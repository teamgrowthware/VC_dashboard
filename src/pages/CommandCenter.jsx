import KPICards from '../components/KPICards';
import TrafficGraph from '../components/TrafficGraph';
import SystemLogs from '../components/SystemLogs';

export default function CommandCenter() {
  return (
    <div className="page-container">
      <header className="page-header" style={{ marginBottom: '32px' }}>
        <h1 style={{ marginBottom: '8px' }}>Command Center</h1>
        <p className="text-muted" style={{ fontSize: '15px' }}>Live metrics and system overview.</p>
      </header>

      <KPICards />

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <TrafficGraph />
        <SystemLogs />
      </div>
    </div>
  );
}
