import { Grid, Paper } from '@mui/material';

import GridServicos from '../components/GridServicos';
import GridSistemas from '../components/GridSistemas';

export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={8}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
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

          <Grid item xs={12} md={6}>
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

      <Grid item xs={12} md={12} lg={4}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
          }}
        >
          Notícias
        </Paper>
      </Grid>

      <Grid item xs={12} md={12} lg={8}>
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
