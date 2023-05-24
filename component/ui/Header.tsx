'use client';
import { Typography } from '@mui/material';
import { FC } from 'react';

interface HeaderProps {
  title: string;
  subInfo: Array<JSX.Element> | Array<JSX.Element[]>;
  upperSubTitle: string;
}

export const Header: FC<HeaderProps> = ({ title, subInfo, upperSubTitle }) => {
  return (
    <header className='header'>
      <div className='headerContainer'>
        <div className='headerContentContainer'>
          <Typography variant='h3' fontSize={26}>
            {upperSubTitle}
          </Typography>
        </div>
        <div className='headerContentContainer'>
          <Typography
            variant='h1'
            fontWeight={600}
            textAlign={'center'}
            fontSize={50}
          >
            {title}
          </Typography>
        </div>
        <div className='headerDivision'></div>
        <div className='headerContentContainer'>
          <Typography
            variant='body1'
            fontWeight={300}
            fontSize={20}
            textAlign={'center'}
          >
            {subInfo}
          </Typography>
        </div>
      </div>

      <div className='headerBackground' />
    </header>
  );
};
