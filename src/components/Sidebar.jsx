import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Activity,
  Layers,
  Users,
  Inbox,
  Globe,
  Settings,
  LogOut,
  PenTool
} from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { path: '/', icon: Activity, label: 'Command Center' },
  { path: '/portfolio', icon: Layers, label: 'Portfolio Engine' },
  { path: '/crm', icon: Users, label: 'Client CRM' },
  { path: '/inbox', icon: Inbox, label: 'Leads Inbox' },
  { path: '/nodes', icon: Globe, label: 'Global Nodes' },
  { path: '/site-content', icon: PenTool, label: 'Site Content' },
  { path: '/settings', icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar glass-panel">
      <div className="sidebar-header">
        <div className="logo-cube">
          <div className="cube-inner"></div>
        </div>
        <div>
          <h2 className="brand-name">VORTEX CUBES</h2>
          <span className="brand-subtitle">SYS_ADMIN_v2.4</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <item.icon className="nav-icon" size={18} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="avatar">A</div>
          <div className="user-details">
            <span className="user-name">Admin Root</span>
            <span className="user-role">Super Admin</span>
          </div>
        </div>
        <button className="logout-btn">
          <LogOut size={16} />
        </button>
      </div>
    </aside>
  );
}
