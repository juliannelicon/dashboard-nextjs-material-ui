import { Grid, Paper } from '@mui/material';

import Aniversariantes from '../components/Aniversariantes';
import GridServicos from '../components/GridServicos';
import GridSistemas from '../components/GridSistemas';
import Noticias from '../components/Noticias';
import Agenda from '../components/Agenda';

export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                bgcolor: 'primary.main',
              }}
            >
              <GridSistemas />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
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
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'column',
              lg: 'column',
            },
            width: '100%',
            height: '100%',
          }}
        >
          <Noticias />
        </Paper>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
          }}
        >
          <Agenda />
        </Paper>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
          }}
        >
          <Aniversariantes />
        </Paper>
      </Grid>
    </Grid>
  );
}
