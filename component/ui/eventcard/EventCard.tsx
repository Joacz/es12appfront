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
  const [showString, setShowString] = useState(false);

  return (
    <Grid item md={6} lg={4} gap={1} padding={2}>
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
        <Typography variant='subtitle1' fontSize={25} textAlign={'left'}>
          {subtitle}
        </Typography>
        {content.length >= 400 && !showString ? (
          <div className='flex flex-col gap-5 select-none'>
            <Typography
              variant='body1'
              fontSize={17}
              textAlign={'left'}
              sx={{ wordBreak: 'break-word' }}
            >
              {content.substring(0, 400)}...
            </Typography>
          </div>
        ) : (
          <div className='flex flex-col gap-5 select-none'>
            <Typography variant='body1' fontSize={17} textAlign={'left'}>
              {content}
            </Typography>
          </div>
        )}
        <Button href={`/event/${id}`} sx={{ mt: 2 }} variant='outlined'>
          Ver más
        </Button>
      </div>
    </Grid>
  );
};
