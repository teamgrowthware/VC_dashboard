import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CommandCenter from './pages/CommandCenter';
import PortfolioManager from './pages/PortfolioManager';
import CRM from './pages/CRM';
import LeadsInbox from './pages/LeadsInbox';
import NodeManager from './pages/NodeManager';
import SiteContent from './pages/SiteContent';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CommandCenter />} />
          <Route path="portfolio" element={<PortfolioManager />} />
          <Route path="crm" element={<CRM />} />
          <Route path="inbox" element={<LeadsInbox />} />
          <Route path="nodes" element={<NodeManager />} />
          <Route path="site-content" element={<SiteContent />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
