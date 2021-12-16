import {
  AppBar as MuiAppBar,
  Avatar,
  Toolbar,
  Typography,
} from '@mui/material';

export function AppBar(): JSX.Element {
  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          logo
        </Typography>

        <Avatar>J</Avatar>
      </Toolbar>
    </MuiAppBar>
  );
}
