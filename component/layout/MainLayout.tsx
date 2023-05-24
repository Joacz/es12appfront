'use client';
import Head from 'next/head';
import { FC } from 'react';
import { Navbar, Header, Footer } from '../../component/ui/';

interface MainLayoutProps {
  title: string;
  headerTitle?: string;
  description: string;
  children: any;
}

export const MainLayout: FC<MainLayoutProps> = ({
  description,
  title,
  children,
  headerTitle,
}) => {
  const links = [
    {
      url: 'https://www.escuela12neuquen.edu.ar/',
      value: 'inicio',
    },
    {
      url: 'https://www.escuela12neuquen.edu.ar/event',
      value: 'eventos',
    },
    {
      url: 'https://www.escuela12neuquen.edu.ar/publication',
      value: 'noticias',
    },
    {
      url: 'https://www.escuela12neuquen.edu.ar/#docentes',
      value: 'docentes',
    },
    {
      url: 'https://www.escuela12neuquen.edu.ar/sobre-nosotros',
      value: 'acerca',
    },
  ];
  // TODO Botón para copiar la data
  const subInfo = [
    <span style={{ display: 'block' }}>
      <b>Teléfono:</b> 4315991
    </span>,
    <span style={{ display: 'block' }}>
      <b>Email:</b> es12pciadelneuquen@gmail.com
    </span>,
    <span style={{ display: 'block' }}>
      <b>Ubicación:</b> Miguel Galarza 1708, Paraná, Entre Ríos.
    </span>,
  ];
  return (
    <>
      <Head>
        <meta
          http-equiv='Content-Security-Policy'
          content='upgrade-insecure-requests'
        />
        <title>{title}</title>
        <meta name='description' content={description}></meta>
        <meta charSet='UTF-8'></meta>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
      </Head>
      <main className='mainLayout'>
        <Navbar links={links} />
        <div style={{ height: '90px' }}></div>
        <Header
          title={headerTitle || 'PROVINCIA DEL NEUQUÉN'}
          subInfo={subInfo}
          upperSubTitle={'ESCUELA SECUNDARIA Nº12'}
        />
        {children}
      </main>
      <Footer />
    </>
  );
};
