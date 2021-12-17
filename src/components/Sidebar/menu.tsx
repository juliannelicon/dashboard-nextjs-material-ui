import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Divider,
  IconButton,
  List,
  ListItem,
  styled,
  Typography,
} from '@mui/material';

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

export default function Menu({ toggleOpen }: MenuProps) {
  return (
    <List sx={{ paddingTop: 0 }}>
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

      {['Inicial', 'chat', 'email', 'agenda'].map(text => (
        <ListItem button key={text}>
          {text}
        </ListItem>
      ))}
    </List>
  );
}
