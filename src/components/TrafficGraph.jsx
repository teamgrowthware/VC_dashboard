import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Mon', traffic: 4000, nodes: 24 },
  { name: 'Tue', traffic: 3000, nodes: 13 },
  { name: 'Wed', traffic: 2000, nodes: 98 },
  { name: 'Thu', traffic: 2780, nodes: 39 },
  { name: 'Fri', traffic: 1890, nodes: 48 },
  { name: 'Sat', traffic: 2390, nodes: 38 },
  { name: 'Sun', traffic: 3490, nodes: 43 },
];

export default function TrafficGraph() {
  return (
    <div className="glass-panel" style={{ padding: '20px', height: '350px' }}>
      <h3 style={{ marginBottom: '20px', fontSize: '16px', color: 'var(--text-muted)' }}>Network Traffic (7 Days)</h3>
      <div style={{ width: '100%', height: 'calc(100% - 40px)' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--cyan-glow)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--cyan-glow)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--bg-panel)',
                border: '1px solid var(--border-light)',
                borderRadius: '8px',
                color: '#fff'
              }}
              itemStyle={{ color: 'var(--cyan-glow)' }}
            />
            <Area type="monotone" dataKey="traffic" stroke="var(--cyan-glow)" strokeWidth={2} fillOpacity={1} fill="url(#colorTraffic)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
