import { useState } from 'react';

import { Box, Button, Toolbar } from '@mui/material';

import TopBar from '../TopBar';

const drawerWidth = 240;

export default function Layout() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <TopBar open={open} drawerWidth={drawerWidth} />

      <Toolbar />

      <Button onClick={toggleMenu}>teste</Button>
    </Box>
  );
}
