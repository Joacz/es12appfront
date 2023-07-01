'use client';
import { Button, Grid, Typography } from '@mui/material';
import { FC, useState } from 'react';

interface EventCardProps {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  portrait: string;
}

export const EventCard: FC<EventCardProps> = ({
  id,
  title,
  subtitle,
  content,
  portrait,
}) => {
  return (
    <Grid
      item
      sm={12}
      md={6}
      lg={4}
      gap={1}
      padding={2}
      display={'1'}
      height={'100%'}
    >
      <div
        style={{
          border: '1px solid #aaa',
          borderRadius: '10px',
          padding: '20px',
        }}
      >
        <img
          style={{
            height: 280,
            width: '100%',
            borderRadius: 10,
            objectFit: 'cover',
          }}
          src={`/api/image/${portrait}`}
          className='w-full border-white border-2 rounded-sm'
          alt=''
        />
        <div style={{ height: 15 }}></div>
        <Typography variant='h3' fontSize={30} textAlign={'left'}>
          {title}
        </Typography>
        <div className='divisorCard' />
        <Typography variant='body2' fontSize={20} textAlign={'left'}>
          {subtitle}
        </Typography>
        <Button href={`/event/${id}`} sx={{ mt: 2 }} variant='outlined'>
          Ver más
        </Button>
      </div>
    </Grid>
  );
};
