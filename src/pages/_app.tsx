import '../styles/globals.css';
import '../styles/ui/Navbar.css';
import '../styles/ui/Header.css';

import type { AppProps } from 'next/app';
import { PublicationsProvider } from '../../context/publications';
import { EventsProvider } from '../../context/events';
import { FilesProvider } from '../../context/files';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EventsProvider>
      <PublicationsProvider>
        <FilesProvider>
          <Component {...pageProps} />
        </FilesProvider>
      </PublicationsProvider>
    </EventsProvider>
  );
}
