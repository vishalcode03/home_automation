import React, { useState } from "react";
import {
  Bell,
  ChevronLeft,
  Menu,
  Sun,
  Thermometer,
  Lock,
  Power,
  Fan,
} from "lucide-react";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [lightBrightness, setLightBrightness] = useState(50);
  const [temperature, setTemperature] = useState(22);
  const [fanOn, setFanOn] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white w-64 p-4 ${sidebarOpen ? "block" : "hidden"} md:block`}>
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-xl font-bold">Categories</h2>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden">
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <ul className="mt-4 space-y-4">
          <li>
            <button className="flex items-center w-full text-left">
              <Sun className="mr-3 w-5 h-5" /> Lighting
            </button>
          </li>
          <li>
            <button className="flex items-center w-full text-left">
              <Thermometer className="mr-3 w-5 h-5" /> Climate Control
            </button>
          </li>
          <li>
            <button className="flex items-center w-full text-left">
              <Lock className="mr-3 w-5 h-5" /> Security
            </button>
          </li>
          <li>
            <button className="flex items-center w-full text-left">
              <Power className="mr-3 w-5 h-5" /> Appliances
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-gray-700 text-white p-4 shadow-md flex justify-between items-center">
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold">Smart Home Dashboard</h1>
          <button>
            <Bell className="w-6 h-6" />
          </button>
        </header>

        {/* Dashboard */}
        <main className="flex-1 bg-gray-100 p-6">
          <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Temperature Control */}
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold">Temperature Control</h3>
              <p className="text-sm text-gray-600">Current room temperature</p>
              <div className="text-4xl font-bold my-4">{temperature}°C</div>
              <input
                type="range"
                min="15"
                max="30"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Lighting Control */}
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold">Lighting Control</h3>
              <p className="text-sm text-gray-600">Adjust brightness</p>
              <div className="text-2xl font-bold my-4">{lightBrightness}%</div>
              <input
                type="range"
                min="0"
                max="100"
                value={lightBrightness}
                onChange={(e) => setLightBrightness(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Fan Control */}
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold">Fan Control</h3>
              <p className="text-sm text-gray-600">Toggle fan on/off</p>
              <div className="flex items-center justify-between my-4">
                <Fan className={`w-10 h-10 ${fanOn ? "text-green-500" : "text-gray-400"}`} />
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={fanOn}
                    onChange={(e) => setFanOn(e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
              <p>Status: {fanOn ? "On" : "Off"}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
