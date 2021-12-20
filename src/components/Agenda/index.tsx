import { Box, useTheme } from '@mui/material';

import { pt } from 'date-fns/locale';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export default function Agenda() {
  const theme = useTheme();

  const today = [new Date(), new Date()];
  const todayStyle = { border: '2px solid currentColor' };

  const event = [new Date(2021, 11, 7)];

  const eventStyle = {
    background: theme.palette.warning.main,
    color: theme.palette.primary.contrastText,
  };

  return (
    <Box>
      <DayPicker
        disableNavigation
        locale={pt}
        modifiers={{ today, event }}
        modifierStyles={{ today: todayStyle, event: eventStyle }}
        styles={{
          root: {
            margin: 0,
          },
          month: { width: '100%' },
          caption_label: {
            color: theme.palette.grey[800],
            textTransform: 'capitalize',
            fontSize: '1.25rem',
          },
          table: { width: '100%', maxWidth: '100%' },
          head_cell: {
            border: '1px solid',
            borderColor: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          },
          cell: {
            border: '1px solid',
            borderColor: theme.palette.grey[400],
            padding: theme.spacing(0.25),
          },
          day: {
            color: theme.palette.grey[800],
            margin: 'auto',
          },
        }}
      />
    </Box>
  );
}
