import { useEffect, useState } from 'react';

import {
  Box,
  Container,
  ThemeProvider,
  Toolbar,
  useMediaQuery,
} from '@mui/material';

import TopBar from '../TopBar';
import Sidebar from '../Sidebar';

import { useAppTheme } from '../../contexts/theme';

interface LayoutProps {
  children: JSX.Element;
}

const drawerWidth = 300;

export default function Layout({ children }: LayoutProps) {
  const { theme } = useAppTheme();

  const [open, setOpen] = useState(false);

  const matches = useMediaQuery(theme.breakpoints.up('xl'));

  useEffect(() => {
    setOpen(matches);
  }, [matches]);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <TopBar open={open} marginleft={drawerWidth} toggleOpen={toggleOpen} />

        <Sidebar open={open} width={drawerWidth} toggleOpen={toggleOpen} />

        <Box
          component="main"
          sx={{
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
    </ThemeProvider>
  );
}
