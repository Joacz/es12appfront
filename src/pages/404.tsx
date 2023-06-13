'use client';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import { Divisor } from '../../component/ui';

export default function NotFound() {
  return (
    <main
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <Typography variant='h1'> Ups! esta página no existe </Typography>
        <div style={{ height: 10 }} />
        <Typography variant='body1' color={'gray'} fontWeight={500}>
          (O está en construcción)
        </Typography>
        <div style={{ height: 20 }}></div>
        <div
          style={{
            width: '100%',
            height: '4px',
            background: '#eee',
            borderRadius: 10,
          }}
        />{' '}
        <div style={{ height: 100 }}></div>
        <Link href='/' style={{ width: '300px' }}>
          <Button fullWidth variant='outlined' size='large'>
            Volver al inicio
          </Button>
        </Link>
      </div>
    </main>
  );
}
