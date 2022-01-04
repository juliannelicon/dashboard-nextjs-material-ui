import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Box,
  Divider,
  Grid,
  IconButton,
  Popover,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';

import { useAppTheme } from '../../contexts/theme';

import { cores } from '../../utils/cores';

export default function Configuracoes() {
  const { theme, mode, toggleMode, addColorPrimary } = useAppTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton color="inherit" onClick={handleClick} title="Configurações">
        <FontAwesomeIcon icon="cog" />
      </IconButton>

      <Popover
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Typography sx={{ p: 2 }}>Configurar Tema</Typography>

        <Divider />
        <Box sx={{ p: 2 }}>
          <Box>
            <Typography>Selecione modo:</Typography>

            <ToggleButtonGroup
              onChange={toggleMode}
              size="small"
              value={mode === 'dark' ? 'right' : 'left'}
              exclusive
              sx={{ p: 1 }}
            >
              <ToggleButton value="left" disabled={mode === 'light'}>
                Claro
              </ToggleButton>
              <ToggleButton value="right" disabled={mode === 'dark'}>
                Escuro
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <Box maxWidth={250}>
            <Typography>Selecione cor:</Typography>

            <Grid container>
              {cores.map(cor => (
                <Grid item xs={2} key={cor.id}>
                  <IconButton
                    onClick={() => addColorPrimary(cor)}
                    disabled={cor.color[500] === theme.palette.primary.main}
                    sx={{
                      '&.Mui-disabled': {
                        bgcolor: 'action.disabledBackground',
                      },
                    }}
                  >
                    <FontAwesomeIcon
                      icon="circle"
                      size="lg"
                      color={cor.color[500]}
                    />
                  </IconButton>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Popover>
    </>
  );
}
