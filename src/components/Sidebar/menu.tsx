import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';

import SubMenu from './subMenu';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface MenuProps {
  toggleOpen: () => void;
}

interface ListaProps {
  id: number;
  title: string;
  icon: IconProp;
  subMenu?: ListaProps[];
}

export default function Menu({ toggleOpen }: MenuProps) {
  const lista: ListaProps[] = [
    { id: 1, title: 'Inicial', icon: 'home' },
    { id: 2, title: 'Chat', icon: 'comment-alt' },
    { id: 3, title: 'E-mail', icon: 'envelope' },
    { id: 4, title: 'Agenda', icon: 'calendar-alt' },
    {
      id: 5,
      title: 'Sistemas',
      icon: 'desktop',
      subMenu: [
        { id: 1, title: 'Sistema 1', icon: 'desktop' },
        { id: 2, title: 'Sistema 2', icon: 'desktop' },
      ],
    },
    {
      id: 6,
      title: 'Serviços',
      icon: 'user-cog',
      subMenu: [
        { id: 1, title: 'Serviço 1', icon: 'user-cog' },
        { id: 2, title: 'Serviço 2', icon: 'user-cog' },
      ],
    },
  ];

  return (
    <List component="nav" sx={{ paddingTop: 0 }}>
      <DrawerHeader>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          logo
        </Typography>

        <IconButton
          aria-label="Fechar Menu"
          title="Esconder Menu"
          size="medium"
          edge="start"
          sx={{ mr: 2 }}
          onClick={toggleOpen}
        >
          <FontAwesomeIcon icon="angle-left" />
        </IconButton>
      </DrawerHeader>

      <Divider />

      {lista.map((item: ListaProps) => {
        if (item.subMenu) {
          return <SubMenu item={item} />;
        }
        return (
          <ListItem button key={item.id} title={item.title}>
            <ListItemIcon>
              <FontAwesomeIcon icon={item.icon} size="lg" />
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        );
      })}
    </List>
  );
}
