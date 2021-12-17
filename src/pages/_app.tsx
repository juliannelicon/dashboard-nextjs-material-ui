import type { AppProps } from 'next/app';

import { config, library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleLeft,
  faBars,
  faCalendarAlt,
  faCommentAlt,
  faDesktop,
  faEnvelope,
  faHome,
  faUserCog,
} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

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
);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
