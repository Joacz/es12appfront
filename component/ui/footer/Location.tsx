import { Typography } from '@mui/material';
import { FC } from 'react';
import { Divisor } from '../Divisor';
import { useWindowSize } from '../../../hooks';

export const Location: FC = ({}) => {
  const windowSize = useWindowSize();

  return (
    <>
      <Typography variant='h2'>UBICACIÓN</Typography>
      <Divisor />
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6785.691503376875!2d-60.525836!3d-31.747411000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b44d9aebd509fb%3A0x39a8f43288a16a7a!2sEscuela%20Secundaria%20N%C2%B012%20Provincia%20del%20Neuqu%C3%A9n!5e0!3m2!1ses-419!2sar!4v1682260914028!5m2!1ses-419!2sar'
        style={{
          width: `${windowSize?.x && windowSize.x <= 800 ? '95%' : '50%'}`,
          borderRadius: 10,
          height: '450px',
        }}
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </>
  );
};
