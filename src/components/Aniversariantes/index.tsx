import { Avatar, Grid, Typography } from '@mui/material';

export default function Aniversariantes() {
  return (
    <Grid container spacing={1} columns={{ xs: 2, sm: 8, md: 2, lg: 2 }}>
      {[
        'Nome complento do aniversariante 1',
        'Nome complento do aniversariante 2',
        'Nome complento do aniversariante 3',
        'Nome complento do aniversariante 4',
        // 'Nome complento do aniversariante',
        // 'Nome complento do aniversariante',
        // 'Nome complento do aniversariante',
        // 'Nome complento do aniversariante',
        // 'Nome complento do aniversariante',
      ].map(aniversariante => (
        <Grid item xs={2} sm={4} md={2} lg={2} key={aniversariante}>
          <Grid container spacing={1}>
            <Grid item>
              <Avatar>{aniversariante.substr(0, 1)}</Avatar>
            </Grid>

            <Grid item xs zeroMinWidth>
              <Typography
                variant="body2"
                gutterBottom
                noWrap
                title={aniversariante}
                sx={{
                  textTransform: 'capitalize',
                }}
              >
                {aniversariante.toLowerCase()}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textTransform: 'capitalize' }}
              >
                teste
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
