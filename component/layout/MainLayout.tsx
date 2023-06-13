'use client';
import Head from 'next/head';
import { FC } from 'react';
import { Navbar, Header, Footer } from '../../component/ui/';

interface MainLayoutProps {
  title: string;
  headerTitle?: string;
  description: string;
  children: any;
  includeHeader?: boolean;
}

export const MainLayout: FC<MainLayoutProps> = ({
  description,
  title,
  children,
  headerTitle,
  includeHeader,
}) => {
  const links = [
    {
      url: 'https://escuela12neuquen.edu.ar/',
      target: undefined,
      value: 'inicio',
    },
    {
      url: 'https://escuela12neuquen.edu.ar/alumnos',
      target: undefined,
      value: 'alumnos',
    },
    {
      url: 'https://escuela12neuquen.edu.ar/docentes',
      target: undefined,
      value: 'docentes',
    },
    {
      url: 'https://escuela12neuquen.edu.ar/publication',
      target: undefined,
      value: 'publicaciones',
    },
    {
      url: 'https://escuela12neuquen.edu.ar/event',
      target: undefined,
      value: 'eventos',
    },
    {
      url: 'https://escuela12neuquen.edu.ar/sobre-nosotros',
      target: undefined,
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
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
      </Head>
      <main className='mainLayout'>
        <Navbar links={links} />
        <div style={{ height: '90px' }}></div>
        {includeHeader === true || includeHeader === undefined ? (
          <Header
            title={headerTitle || 'PROVINCIA DEL NEUQUÉN'}
            subInfo={subInfo}
            upperSubTitle={'ESCUELA SECUNDARIA Nº12'}
          />
        ) : (
          <></>
        )}
        {children}
      </main>
      <Footer />
    </>
  );
};
