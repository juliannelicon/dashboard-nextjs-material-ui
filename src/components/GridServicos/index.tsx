import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Box, Button, Grid, Typography } from '@mui/material';

export default function GridServicos() {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 12, sm: 9, md: 9, lg: 9 }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
        <Grid item xs={6} sm={3} md={3} lg={3} key={item}>
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
  );
}
