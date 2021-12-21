import type { AppProps } from 'next/app';

import { config, library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faBars,
  faBuilding,
  faCalendarAlt,
  faCommentAlt,
  faDesktop,
  faEnvelope,
  faFileAlt,
  faHome,
  faUserCog,
} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { ThemeProvider } from '@mui/material';

import Layout from '../components/Layout';

import { theme } from '../styles/theme';

config.autoAddCss = false;

library.add(
  faBars,
  faHome,
  faEnvelope,
  faCommentAlt,
  faCalendarAlt,
  faDesktop,
  faUserCog,
  faAngleLeft,
  faAngleRight,
  faAngleDown,
  faBuilding,
  faFileAlt,
);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
