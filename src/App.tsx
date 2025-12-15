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
      <Box style={{ display: 'flex', height: '100vh' }}>
        <SideBar />
        <main style={{ flex: 1, gap: '10px', display: 'flex', flexDirection: 'column' }}>
            <NavBar />
          <Box sx={{padding:'12px 16px'}}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
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
