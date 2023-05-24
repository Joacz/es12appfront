'use client';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

interface FileDisplayProps {
  value: string;
  image: string;
  url: string;
}

export const FileDisplay: FC<FileDisplayProps> = ({ value, image, url }) => {
  return (
    <Link
      href={url}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        justifyContent: 'center',
      }}
    >
      <img style={{ width: 50, height: 50 }} src={'/' + image} alt='' />
      <Typography
        className='linkFileDisplay'
        variant='body1'
        fontSize={20}
        fontWeight={400}
        color={'#304665'}
      >
        {value}
      </Typography>
    </Link>
  );
};
