import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';
import { useState } from 'react';

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
}

export default function Menu({ toggleOpen }: MenuProps) {
  const [open, openSet] = useState(false);

  const lista: ListaProps[] = [
    { id: 1, title: 'Inicial', icon: 'home' },
    { id: 2, title: 'Chat', icon: 'comment-alt' },
    { id: 3, title: 'E-mail', icon: 'envelope' },
    { id: 4, title: 'Agenda', icon: 'calendar-alt' },
  ];

  const toggleModal = () => {
    openSet(!open);
  };

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

      {lista.map((item: ListaProps) => (
        <ListItem button key={item.id}>
          <ListItemIcon>
            <FontAwesomeIcon icon={item.icon} size="lg" />
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItem>
      ))}

      <ListItem button onClick={toggleModal}>
        <ListItemIcon>
          <FontAwesomeIcon icon="desktop" size="lg" />
        </ListItemIcon>

        <ListItemText primary="Sistemas" />

        <ListItemIcon>
          {open ? (
            <FontAwesomeIcon icon="angle-down" size="lg" />
          ) : (
            <FontAwesomeIcon icon="angle-right" size="lg" />
          )}
        </ListItemIcon>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FontAwesomeIcon icon="desktop" size="sm" />
            </ListItemIcon>

            <ListItemText primary="Sistema 1" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FontAwesomeIcon icon="desktop" size="sm" />
            </ListItemIcon>

            <ListItemText primary="Sistema 2" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
