// App.js

import Header from './Header.jsx';
import Dashboard from './Dashboard.jsx';
import Profile from './Profile.jsx';
import GrowthChart from './GrowthChart.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Dashboard />
        <Profile />
        <GrowthChart />
      </div>
    </div>
  );
}

export default App;
