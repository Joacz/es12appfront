'use client';
import Head from 'next/head';
import { FC } from 'react';
import { Navbar, Header, Footer } from '../ui';

interface MainLayoutProps {
  title: string;
  description: string;
  children: any;
}

export const DetailsLayout: FC<MainLayoutProps> = ({
  title,
  children,
  description,
}) => {
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
        <link rel='icon' href='/public/favicon.ico' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
      </Head>
      <main className='mainLayout'>{children}</main>
      <Footer />
    </>
  );
};
