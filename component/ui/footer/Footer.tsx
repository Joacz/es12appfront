import { Typography } from '@mui/material';
import { FC } from 'react';
import { useWindowSize } from '../../../hooks';
import Link from 'next/link';

export const Footer: FC = ({}) => {
  const windowSize = useWindowSize();

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
        {/* <Typography
          variant='body1'
          textAlign={'right'}
          fontSize={18}
          fontWeight={400}
        >
          Rectora: RUTILI, Rosana Irene Guadalupe.
        </Typography> */}
        <Typography
          variant='body1'
          textAlign={'right'}
          fontSize={windowSize?.x && windowSize?.x <= 500 ? 14 : 19}
          fontWeight={400}
        >
          © 2023 | Todos los derechos reservados
        </Typography>
        <Link href={'http://api.escuela12neuquen.edu.ar/admin'} className='linkFooter'>
          <Typography
            variant='body1'
            fontSize={windowSize?.x && windowSize?.x <= 500 ? 14 : 15}
            textAlign={'right'}
            fontWeight={400}
          >
            Administración
          </Typography>
        </Link>
      </div>
    </div>
  );
};
