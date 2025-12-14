import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './shared/NotFound';
import { Box } from '@mui/material';
import SideBar from './shared/SideBar';
import Dashboard from './features/dashboard/Dashboard';
import Tasks from './features/tasks/Tasks';
import Analytics from './features/analytics/Analytics';
import './styles/style.css'
export default function App() {
  return (
    <Router>
      <Box style={{ display: 'flex', height: '100vh' }}>
        <SideBar />
        <main style={{ flex: 1, padding: '24px 48px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Box>
    </Router>
  );
}
