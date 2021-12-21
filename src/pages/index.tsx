import { Grid } from '@mui/material';

import Aniversariantes from '../components/Aniversariantes';
import GridServicos from '../components/GridServicos';
import GridSistemas from '../components/GridSistemas';
import Noticias from '../components/Noticias';
import Agenda from '../components/Agenda';

export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6} lg={7}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <GridSistemas />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <GridServicos />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={5}>
        <Noticias />
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={7}>
        <Agenda />
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={5}>
        <Aniversariantes />
      </Grid>
    </Grid>
  );
}
