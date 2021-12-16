import { Box } from '@mui/material';

import { AppBar } from '../AppBar';

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'f2f2f2' }}>
      <AppBar />

      {children}
    </Box>
  );
}
