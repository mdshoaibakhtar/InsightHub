import { Avatar, Box, Button, Stack, Typography } from '@mui/material';

const NavBar = () => {
  return (
    <Box
      sx={{
        height: 64,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
      }}
    >
      <Button sx={{borderRadius:4}}>
        <Avatar sx={{ bgcolor: 'orange' }}>OP</Avatar>
        <Stack sx={{ ml: 1, display: { xs: 'none', sm: 'flex', textAlign: 'left' } }}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Olivia Parker
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Admin
          </Typography>
        </Stack>
      </Button>
    </Box>
  );
};

export default NavBar;
