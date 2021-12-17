import { useState } from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

interface ListaProps {
  id: number;
  title: string;
  icon: IconProp;
  subMenu?: ListaProps[];
}

interface SubMenuProps {
  item: ListaProps;
}

export default function SubMenu({ item }: SubMenuProps) {
  const [open, openSet] = useState(false);

  const toggleModal = () => {
    openSet(!open);
  };
  return (
    <>
      <ListItem button key={item.id} title={item.title} onClick={toggleModal}>
        <ListItemIcon>
          <FontAwesomeIcon icon={item.icon} size="lg" />
        </ListItemIcon>

        <ListItemText primary={item.title} />

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
          {item.subMenu?.map(subItem => (
            <ListItem button key={subItem.id} sx={{ pl: 4 }}>
              <ListItemIcon>
                <FontAwesomeIcon icon={subItem.icon} size="sm" />
              </ListItemIcon>

              <ListItemText primary={subItem.title} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}
