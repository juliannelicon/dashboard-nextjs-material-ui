import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Avatar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';

import { styled } from '@mui/material/styles';

import Configuracoes from './Configuracoes';

interface AppBarProps extends MuiAppBarProps {
  open: boolean;
  marginleft: number;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({ theme, open, marginleft }) => ({
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

interface TopBar extends AppBarProps {
  toggleOpen: () => void;
}

export default function TopBar({ open, marginleft, toggleOpen }: TopBar) {
  return (
    <AppBar position="fixed" open={open} marginleft={marginleft}>
      <Toolbar>
        <IconButton
          aria-label="Menu"
          title="Menu"
          size="medium"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
          onClick={toggleOpen}
        >
          <FontAwesomeIcon icon="bars" />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          logo
        </Typography>

        <Stack direction="row" spacing={2}>
          <Configuracoes />

          <Avatar>J</Avatar>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
