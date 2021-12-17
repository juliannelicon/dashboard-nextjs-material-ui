import {
  CSSObject,
  Divider,
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
  List,
  ListItem,
  styled,
  Theme,
} from '@mui/material';

interface DrawerProps extends MuiDrawerProps {
  width: number;
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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

export default function Sidebar({ open, width }: DrawerProps) {
  return (
    <>
      <Drawer
        variant="permanent"
        open={open}
        width={width}
        sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}
      >
        <DrawerHeader>{/* <Button>teste</Button> */}</DrawerHeader>
        <Divider />
        <List>
          {['Inicial', 'chat', 'email', 'agenda'].map(text => (
            <ListItem button key={text}>
              {text}
            </ListItem>
          ))}
        </List>
      </Drawer>

      <MuiDrawer
        variant="temporary"
        open={open}
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
        <List>
          <DrawerHeader>{/* <Button>teste</Button> */}</DrawerHeader>
          <Divider />
          {['Inicial', 'chat', 'email', 'agenda'].map(text => (
            <ListItem button key={text}>
              {text}
            </ListItem>
          ))}
        </List>
      </MuiDrawer>
    </>
  );
}
