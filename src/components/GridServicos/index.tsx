import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Box, Button, Grid, Paper, Typography } from '@mui/material';

import Title from '../Title';

export default function GridServicos() {
  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}
    >
      <Title title="Serviços" titleButton="Todos Serviços" />

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
          <Grid item xs={6} sm={3} md={6} lg={3} key={item}>
            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
                width: '100%',
                height: '100%',
              }}
            >
              <Box textAlign="center">
                <FontAwesomeIcon icon="user-cog" size="lg" />
                <Typography>Descrição Serviço {item}</Typography>
              </Box>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
