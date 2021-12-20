import { useEffect, useState } from 'react';

import {
  Box,
  Container,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';

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
          height: '100vh',
          overflow: 'auto',
          backgroundColor: theme =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
        }}
      >
        <Toolbar />

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
}
