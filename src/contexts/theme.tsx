import { createContext, useContext, useMemo, useState } from 'react';

import { createTheme, PaletteMode, Theme } from '@mui/material';

interface ThemeProviderProps {
  children: JSX.Element;
}

interface ThemeContextData {
  mode: PaletteMode;
  theme: Theme;
  toggleMode: () => void;
}

const ThemeContext = createContext({} as ThemeContextData);

export function AppThemeProvider({
  children,
}: ThemeProviderProps): JSX.Element {
  const [mode, setMode] = useState<PaletteMode>('light');

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#f1f1f1',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
        },
      }),
    [mode],
  );

  const value = useMemo(() => ({ mode, theme, toggleMode }), [mode, theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useAppTheme() {
  return useContext(ThemeContext);
}
