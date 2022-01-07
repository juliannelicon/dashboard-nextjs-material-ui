import type { AppProps } from 'next/app';

import { config, library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faBars,
  faBuilding,
  faCalendarAlt,
  faCircle,
  faCog,
  faCommentAlt,
  faDesktop,
  faEnvelope,
  faFileAlt,
  faHome,
  faUserCog,
} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { makeServer } from '../services/mirage';

import { AppThemeProvider } from '../contexts/theme';

import Layout from '../components/Layout';

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
  faCircle,
  faCog,
);

makeServer();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppThemeProvider>
  );
}
