import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
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

import { cores, CoresProps } from '../utils/cores';

interface ThemeProviderProps {
  children: JSX.Element;
}

interface ThemeContextData {
  theme: Theme;
  mode: PaletteMode;
  setMode: Dispatch<SetStateAction<PaletteMode>>;
  setColorPrimary: Dispatch<SetStateAction<PaletteColorOptions>>;
}

const ThemeContext = createContext({} as ThemeContextData);

export function AppThemeProvider({
  children,
}: ThemeProviderProps): JSX.Element {
  const [mode, setMode] = useState<PaletteMode>('light');

  const [colorPrimary, setColorPrimary] = useState<PaletteColorOptions>(
    colors.indigo,
  );

  useEffect(() => {
    const corUsuario = localStorage.getItem('@dashboard:cor');
    const modoUsuario = localStorage.getItem('@dashboard:modo');

    if (corUsuario) {
      const cor = cores.find(color => color.label === corUsuario);

      if (cor) setColorPrimary(cor.color);
    }

    if (modoUsuario) {
      setMode(modoUsuario as PaletteMode);
    }
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: colorPrimary,
        },
      }),
    [mode, colorPrimary],
  );

  const value = useMemo(
    () => ({ theme, mode, setMode, setColorPrimary }),
    [theme, mode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const { theme, mode, setMode, setColorPrimary } = useContext(ThemeContext);

  const toggleMode = () => {
    localStorage.setItem(
      '@dashboard:modo',
      mode === 'light' ? 'dark' : 'light',
    );
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const addColorPrimary = (cor: CoresProps) => {
    localStorage.setItem('@dashboard:cor', cor.label);
    setColorPrimary(cor.color);
  };

  return {
    theme,
    mode,
    toggleMode,
    addColorPrimary,
  };
}
