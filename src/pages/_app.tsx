import '@/styles/globals.css';
import '../../src/styles/ui/Navbar.css';
import '../../src/styles/ui/Header.css';

import type { AppProps } from 'next/app';
import { PublicationsProvider } from '../../context/publications';
import { EventsProvider } from '../../context/events';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EventsProvider>
      <PublicationsProvider>
        <Component {...pageProps} />
      </PublicationsProvider>
    </EventsProvider>
  );
}
