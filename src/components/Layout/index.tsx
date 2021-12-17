import { useState } from 'react';

import { Box, Button, Toolbar } from '@mui/material';

import TopBar from '../TopBar';
import Sidebar from '../Sidebar';

interface LayoutProps {
  children: JSX.Element;
}

const drawerWidth = 240;

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <TopBar open={open} marginleft={drawerWidth} />

      <Sidebar open={open} width={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Button onClick={toggleMenu}>teste</Button>
        {children}
      </Box>
    </Box>
  );
}
