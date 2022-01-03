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
    { id: 1, title: 'Início', icon: 'home' },
    { id: 2, title: 'Chat', icon: 'comment-alt' },
    { id: 3, title: 'E-mail', icon: 'envelope' },
    { id: 4, title: 'Agenda', icon: 'calendar-alt' },
    {
      id: 5,
      title: 'Institucional',
      icon: 'building',
      subMenu: [
        { id: 1, title: 'Sobre instituição', icon: 'building' },
        { id: 2, title: 'Departamento 1', icon: 'building' },
        { id: 3, title: 'Departamento 2', icon: 'building' },
        { id: 4, title: 'Departamento 3', icon: 'building' },
      ],
    },
    {
      id: 6,
      title: 'Sistemas',
      icon: 'desktop',
      subMenu: [
        { id: 1, title: 'Sistema 1', icon: 'desktop' },
        { id: 2, title: 'Sistema 2', icon: 'desktop' },
        { id: 3, title: 'Sistema 3', icon: 'desktop' },
        { id: 4, title: 'Sistema 4', icon: 'desktop' },
      ],
    },
    {
      id: 7,
      title: 'Serviços',
      icon: 'user-cog',
      subMenu: [
        { id: 1, title: 'Serviço 1', icon: 'user-cog' },
        { id: 2, title: 'Serviço 2', icon: 'user-cog' },
      ],
    },

    {
      id: 8,
      title: 'Documentos',
      icon: 'file-alt',
      subMenu: [
        { id: 1, title: 'Documento 1', icon: 'file-alt' },
        { id: 2, title: 'Documento 2', icon: 'file-alt' },
        { id: 3, title: 'Documento 3', icon: 'file-alt' },
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
          color="primary"
        >
          <FontAwesomeIcon icon="angle-left" />
        </IconButton>
      </DrawerHeader>

      <Divider />

      {lista.map((item: ListaProps) => {
        if (item.subMenu) {
          return <SubMenu key={item.id} item={item} />;
        }
        return (
          <ListItem button key={item.id} title={item.title}>
            <ListItemIcon sx={{ color: 'primary.main' }}>
              <FontAwesomeIcon icon={item.icon} size="lg" />
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        );
      })}
    </List>
  );
}
