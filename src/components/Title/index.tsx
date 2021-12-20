import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Typography } from '@mui/material';

interface TitleProps {
  title: string;
  titleButton?: string;
}
export default function Title({ title, titleButton }: TitleProps) {
  return (
    <Box
      component="header"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      marginBottom={2}
    >
      <Typography component="h2" variant="h6" color="MenuText" gutterBottom>
        {title}
      </Typography>

      {titleButton && (
        <Button
          color="inherit"
          size="small"
          sx={{ textTransform: 'none' }}
          endIcon={<FontAwesomeIcon icon="angle-right" />}
          title={titleButton}
        >
          {titleButton}
        </Button>
      )}
    </Box>
  );
}
