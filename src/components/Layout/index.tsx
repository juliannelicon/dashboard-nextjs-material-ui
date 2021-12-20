import { useEffect, useState } from 'react';

import { Box, Toolbar, useMediaQuery, useTheme } from '@mui/material';

import TopBar from '../TopBar';
import Sidebar from '../Sidebar';

interface LayoutProps {
  children: JSX.Element;
}

const drawerWidth = 300;

export default function Layout({ children }: LayoutProps) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const matches = useMediaQuery(theme.breakpoints.up('xl'));

  useEffect(() => {
    setOpen(matches);
  }, [matches]);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <TopBar open={open} marginleft={drawerWidth} toggleOpen={toggleOpen} />

      <Sidebar open={open} width={drawerWidth} toggleOpen={toggleOpen} />

      <Box
        component="main"
        sx={{
          p: 2,
          flexGrow: 1,
          bgcolor: '#f1f1f1',
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
}
