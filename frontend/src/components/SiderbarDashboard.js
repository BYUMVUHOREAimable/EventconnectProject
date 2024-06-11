import React from 'react';

const SidebarDashboard = () => {
  return (
    <div className="w-1/4 bg-gray-100 h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Skydash</h2>
      <ul>
        <li className="mb-4"><a href="/dashboard" className="text-gray-700">Dashboard</a></li>
        <li className="mb-4"><a href="/widgets" className="text-gray-700">Widgets</a></li>
        <li className="mb-4"><a href="/ui-elements" className="text-gray-700">UI Elements</a></li>
        <li className="mb-4"><a href="/advanced-ui" className="text-gray-700">Advanced UI</a></li>
        <li className="mb-4"><a href="form-elements" className="text-gray-700">Form elements</a></li>
        <li className="mb-4"><a href="/editors" className="text-gray-700">Editors</a></li>
        <li className="mb-4"><a href="/charts" className="text-gray-700">Charts</a></li>
        <li className="mb-4"><a href="tables" className="text-gray-700">Tables</a></li>
        <li className="mb-4"><a href="/popups" className="text-gray-700">Popups</a></li>
        <li className="mb-4"><a href="/notifications" className="text-gray-700">Notifications</a></li>
        <li className="mb-4"><a href="/icons" className="text-gray-700">Icons</a></li>
        <li className="mb-4"><a href="/maps" className="text-gray-700">Maps</a></li>
      </ul>
    </div>
  );
}

export default SidebarDashboard;