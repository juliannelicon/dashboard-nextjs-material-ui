import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Avatar,
  Toolbar,
  Typography,
} from '@mui/material';

import { styled } from '@mui/material/styles';

interface BarProps extends MuiAppBarProps {
  open: boolean;
  drawerWidth: number;
}
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<BarProps>(({ theme, open, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function TopBar({ open, drawerWidth }: BarProps) {
  return (
    <AppBar position="fixed" open={open} drawerWidth={drawerWidth}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          logo
        </Typography>

        <Avatar>J</Avatar>
      </Toolbar>
    </AppBar>
  );
}
