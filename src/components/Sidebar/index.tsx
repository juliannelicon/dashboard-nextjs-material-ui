import {
  CSSObject,
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
  styled,
  Theme,
} from '@mui/material';
import Menu from './menu';

interface DrawerProps extends MuiDrawerProps {
  width: number;
}

const openedMixin = (theme: Theme, width: number): CSSObject => ({
  width,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})<DrawerProps>(({ theme, open, width }) => ({
  width,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme, width),
    '& .MuiDrawer-paper': openedMixin(theme, width),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

interface SideBarProps extends DrawerProps {
  toggleOpen: () => void;
}

export default function Sidebar({ open, width, toggleOpen }: SideBarProps) {
  return (
    <>
      <Drawer
        variant="permanent"
        open={open}
        width={width}
        sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}
      >
        <Menu toggleOpen={toggleOpen} />
      </Drawer>

      <MuiDrawer
        variant="temporary"
        open={open}
        onClose={toggleOpen}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { sm: 'flex', md: 'none', lg: 'none' },
          width,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          '& .MuiDrawer-paper': { width },
        }}
      >
        <Menu toggleOpen={toggleOpen} />
      </MuiDrawer>
    </>
  );
}
