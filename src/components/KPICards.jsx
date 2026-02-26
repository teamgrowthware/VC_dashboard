import { Users, Server, Zap, Activity } from 'lucide-react';
import './KPICards.css';

const kpis = [
  {
    id: 1,
    label: 'Total Visits',
    value: '124.5K',
    trend: '+12.4%',
    trendUp: true,
    icon: Users
  },
  {
    id: 2,
    label: 'Server Uptime',
    value: '99.98%',
    trend: 'Stable',
    trendUp: true,
    icon: Server
  },
  {
    id: 3,
    label: 'API Latency',
    value: '12ms',
    trend: '-2ms',
    trendUp: true,
    icon: Zap
  },
  {
    id: 4,
    label: 'Active Nodes',
    value: '42',
    trend: '+3',
    trendUp: true,
    icon: Activity
  },
];

export default function KPICards() {
  return (
    <div className="kpi-grid">
      {kpis.map((kpi) => (
        <div key={kpi.id} className="kpi-card glass-panel scanline">
          <div className="kpi-header">
            <span className="kpi-label">{kpi.label}</span>
            <div className="kpi-icon-wrapper">
              <kpi.icon size={18} />
            </div>
          </div>
          <div className="kpi-body">
            <h3 className="kpi-value mono-text">{kpi.value}</h3>
            <span className={`kpi-trend ${kpi.trendUp ? 'trend-up' : 'trend-down'}`}>
              {kpi.trend}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
