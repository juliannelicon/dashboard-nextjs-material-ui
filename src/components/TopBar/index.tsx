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
  marginleft: number;
}
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<BarProps>(({ theme, open, marginleft }) => ({
  zIndex: theme.zIndex.drawer + 1,
  [theme.breakpoints.between('xs', 'md')]: {
    zIndex: theme.zIndex.drawer,
  },
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.up('md')]: {
    ...(open && {
      marginLeft: marginleft,
      width: `calc(100% - ${marginleft}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  },
}));

export default function TopBar({ open, marginleft }: BarProps) {
  return (
    <AppBar position="fixed" open={open} marginleft={marginleft}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          logo
        </Typography>

        <Avatar>J</Avatar>
      </Toolbar>
    </AppBar>
  );
}
