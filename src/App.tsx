import './index.css';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey', justifyContent: 'center', textAlign: 'center' }}>
      This Box renders as an HTML section element.
    </Box>
  );
}

export default App;
