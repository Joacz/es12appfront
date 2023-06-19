import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { useWindowSize } from '../../../hooks';
import Link from 'next/link';

export const Footer: FC = ({}) => {
  const windowSize = useWindowSize();
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
    // {
    //   url: 'https://escuela12neuquen.edu.ar/publication',
    //   target: undefined,
    //   value: 'noticias',
    // },
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

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '50px 0 0 0 ',
        background: '#f5f5f5',
        alignItems: 'center',
        gap: 50,
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          width: '100%',
          height: 120,
          background: '#203056',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          padding: '0 30px',
          gap: 10,
          flexDirection: 'column',
          color: '#fff',
        }}
      >
        <Typography
          variant='body1'
          textAlign={'right'}
          fontSize={windowSize?.x && windowSize?.x <= 500 ? 14 : 19}
          fontWeight={400}
        >
          Copyright: Ricardo Premet © 2023 | Todos los derechos reservados
        </Typography>
        <Grid flexDirection={'row'} display={'flex'} gap={5}>
          <Link
            href={'https://escuela12neuquen.edu.ar/admin'}
            className='linkFooter'
          >
            <Typography
              variant='body1'
              fontSize={windowSize?.x && windowSize?.x <= 500 ? 14 : 15}
              textAlign={'right'}
              fontWeight={400}
            >
              ADMINISTRACIÓN
            </Typography>
          </Link>
          {windowSize?.x! > 800 &&
            links.map((link, key) => (
              <Link key={key} href={link.url} className='linkFooter'>
                <Typography
                  variant='body1'
                  fontSize={windowSize?.x && windowSize?.x <= 500 ? 14 : 15}
                  textAlign={'right'}
                  fontWeight={400}
                >
                  {link.value.toUpperCase()}
                </Typography>
              </Link>
            ))}
        </Grid>
      </div>
    </div>
  );
};
