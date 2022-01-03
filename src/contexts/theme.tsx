import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

import {
  createTheme,
  PaletteMode,
  Theme,
  PaletteColorOptions,
  colors,
} from '@mui/material';

interface ThemeProviderProps {
  children: JSX.Element;
}

interface ThemeContextData {
  theme: Theme;
  mode: PaletteMode;
  setMode: Dispatch<SetStateAction<PaletteMode>>;
  setColorPrimary: Dispatch<SetStateAction<PaletteColorOptions>>;
  setColorSecondary: Dispatch<SetStateAction<PaletteColorOptions>>;
}

const ThemeContext = createContext({} as ThemeContextData);

export function AppThemeProvider({
  children,
}: ThemeProviderProps): JSX.Element {
  const [mode, setMode] = useState<PaletteMode>('light');
  const [colorPrimary, setColorPrimary] = useState<PaletteColorOptions>(
    colors.indigo,
  );
  const [colorSecondary, setColorSecondary] = useState<PaletteColorOptions>(
    colors.red,
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: colorPrimary,
          secondary: colorSecondary,
        },
      }),
    [mode, colorPrimary, colorSecondary],
  );

  const value = useMemo(
    () => ({ theme, mode, setMode, setColorPrimary, setColorSecondary }),
    [theme, mode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const { theme, mode, setMode, setColorPrimary, setColorSecondary } =
    useContext(ThemeContext);

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const addColorPrimary = (color: PaletteColorOptions) => {
    setColorPrimary(color);
    console.log('addColorPrimary');
  };

  const addColorSecondary = (color: PaletteColorOptions) => {
    setColorSecondary(color);
  };

  return {
    theme,
    mode,
    toggleMode,
    addColorPrimary,
    addColorSecondary,
  };
}
