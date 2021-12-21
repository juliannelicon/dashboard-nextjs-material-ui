import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Box, Button, Grid, Paper, Typography } from '@mui/material';

import Title from '../Title';

export default function GridSistemas() {
  return (
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
      <Title
        title="Sistemas"
        titleButton="Todos Sistemas"
        color="background.default"
      />

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
          <Grid item xs={6} sm={3} md={6} lg={3} key={item}>
            <Button
              variant="outlined"
              sx={{
                bgcolor: 'background.default',
                textTransform: 'none',
                width: '100%',
                height: '100%',
                justifyContent: 'flex-start',
                '&:hover': {
                  bgcolor: 'background.default',
                  opacity: 0.8,
                },
              }}
            >
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <FontAwesomeIcon icon="desktop" size="lg" />
                  <Typography marginLeft={1}>SIGLA</Typography>
                </Box>
                <Typography fontSize="0.75rem" marginTop={1} textAlign="left">
                  Digite aqui a descrição do sistema
                </Typography>
              </Box>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
