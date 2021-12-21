import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Typography } from '@mui/material';

interface TitleProps {
  title: string;
  titleButton?: string;
  color?: string;
}
export default function Title({ title, titleButton, color }: TitleProps) {
  return (
    <Box
      component="header"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      marginBottom={2}
    >
      <Typography
        component="h2"
        variant="h6"
        color={color || 'text.secondary'}
        gutterBottom
      >
        {title}
      </Typography>

      {titleButton && (
        <Button
          size="small"
          sx={{ textTransform: 'none', color: color || 'text.secondary' }}
          endIcon={<FontAwesomeIcon icon="angle-right" />}
          title={titleButton}
        >
          {titleButton}
        </Button>
      )}
    </Box>
  );
}
