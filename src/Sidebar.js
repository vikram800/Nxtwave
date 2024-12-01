import React from 'react';
import { FaUserAlt, FaHome, FaTasks, FaChartBar, FaCogs, FaEdit, FaFolder, FaFileAlt, FaWrench, FaPaintBrush, FaBoxOpen } from 'react-icons/fa';

const Sidebar = () => {
  const menuItems = [
    { name: 'Internal Audit', icon: FaChartBar },
    { name: 'UAT Testing', icon: FaTasks },
    { name: 'Queue', icon: FaHome },
    { name: 'Workflow', icon: FaEdit },
    { name: 'Admin', icon: FaUserAlt },
    { name: 'Asset Management', icon: FaFolder },
    { name: 'Parent Control', icon: FaFileAlt },
    { name: 'Option One', icon: FaWrench },
    { name: 'Option Two', icon: FaBoxOpen },
    { name: 'All Accessories', icon: FaCogs },
    { name: 'Internal Audit', icon: FaChartBar },
    { name: 'Decorating', icon: FaPaintBrush },
    { name: 'Presenting', icon: FaChartBar },
  ];

  return (
    <div className="w-1/5 bg-gray-900 text-white p-6">
      {/* Sidebar Header */}
      <div className="text-2xl font-bold mb-6">RISK HAWK</div>

      {/* Menu Items */}
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer transition-all"
          >
            <item.icon className="text-lg" />
            <span className="text-sm">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
