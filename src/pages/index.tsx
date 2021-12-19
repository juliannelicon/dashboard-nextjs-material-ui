import { Grid, Paper } from '@mui/material';

import GridServicos from '../components/GridServicos';
import GridSistemas from '../components/GridSistemas';
import Noticias from '../components/Noticias';

export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
          }}
        >
          <GridSistemas />
        </Paper>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
          }}
        >
          <GridServicos />
        </Paper>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={4}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'row',
              lg: 'column',
            },
            width: '100%',
            height: '100%',
          }}
        >
          <Noticias />
        </Paper>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={8}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
          }}
        >
          Agenda
        </Paper>
      </Grid>
    </Grid>
  );
}
