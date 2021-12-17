import { useState } from 'react';

import { Box, Toolbar } from '@mui/material';

import TopBar from '../TopBar';
import Sidebar from '../Sidebar';

interface LayoutProps {
  children: JSX.Element;
}

const drawerWidth = 300;

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <TopBar open={open} marginleft={drawerWidth} toggleOpen={toggleOpen} />

      <Sidebar open={open} width={drawerWidth} toggleOpen={toggleOpen} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
}
