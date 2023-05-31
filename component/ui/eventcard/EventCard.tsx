'use client';
import { Button, Grid, Typography } from '@mui/material';
import { FC, useState } from 'react';

interface EventCardProps {
  title: string;
  subtitle: string;
  content: string;
  md: number;
  portrait: string;
}

export const EventCard: FC<EventCardProps> = ({
  title,
  subtitle,
  content,
  md,
  portrait,
}) => {
  const [showString, setShowString] = useState(false);

  return (
    <Grid item md={md} gap={1} padding={2}>
      <div
        style={{
          border: '1px solid #aaa',
          borderRadius: '10px',
          padding: '20px',
        }}
      >
        <img
          style={{
            padding: 20,
            borderRadius: 10,
            objectFit: 'cover',
          }}
          src={`/api/image/${portrait}`}
          className='w-full border-white border-2 rounded-sm'
          alt=''
        />
        <Typography variant='h6' fontSize={27} textAlign={'left'}>
          {title}
        </Typography>
        <div className='divisorCard' />
        <Typography variant='h6' fontSize={27} textAlign={'left'}>
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
            {content.length >= 400 && (
              <Button
                onClick={() => setShowString(!showString)}
                sx={{ mt: 2 }}
                variant='outlined'
              >
                Leer más
              </Button>
            )}
          </div>
        ) : (
          <div className='flex flex-col gap-5 select-none'>
            <Typography variant='body1' fontSize={17} textAlign={'left'}>
              {content}
            </Typography>
            {content.length >= 400 && (
              <Button
                onClick={() => setShowString(!showString)}
                sx={{ mt: 2 }}
                variant='outlined'
              >
                Leer menos
              </Button>
            )}
          </div>
        )}
      </div>
    </Grid>
  );
};
