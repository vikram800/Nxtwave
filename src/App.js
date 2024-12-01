import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Navbar from './Navebar';

function App() {
  return (
    <div className="flex h-screen">
       <Navbar/>
      <Sidebar />
     
      <Dashboard />
    </div>
  );
}

export default App;
