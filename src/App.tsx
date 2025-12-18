import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './shared/NotFound';
import { Box } from '@mui/material';
import SideBar from './shared/SideBar';
import Dashboard from './features/dashboard/Dashboard';
import Tasks from './features/tasks/Tasks';
import Analytics from './features/analytics/Analytics';
import './styles/style.css';
import NavBar from './shared/NavBar';
export default function App() {
  return (
    <Router>
      <Box className='flex h-[100vh] w-full overflow-hidden'>
        <SideBar />
          <main className='flex flex-col w-full overflow-hidden'>
          <NavBar />
            <Box className='overflow-y-scroll p-4'>
            <Routes>
              <Route path="/" element={<Dashboard agentAPIList={[]}/>} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
        </main>
      </Box>
    </Router>
  );
}
