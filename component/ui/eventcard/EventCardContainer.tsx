'use client';
import { Button, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { EventCard } from '.';
import IEvent from '../../../interfaces/IEvents';

export const EventCardContainer: FC<{ events: IEvent[] }> = ({ events }) => {
  return (
    <>
      {events.length >= 1 ? (
        <>
          <Grid
            id='efemerides'
            container
            justifyContent={'center'}
            alignItems={'flex-start'}
          >
            {events.map((e: any) => (
              <>
                {events.indexOf(e) >= 3 ? (
                  ''
                ) : (
                  <EventCard
                    title={e.title}
                    subtitle={e.subtitle}
                    content={e.content}
                    portrait={e.images[0]?.name || 'es12.png'}
                    id={e.id}
                  />
                )}
              </>
            ))}
          </Grid>
          {events.length > 3 && (
            <Button size='large' variant='contained' href={'/event'} fullWidth>
              Ver más
            </Button>
          )}
        </>
      ) : (
        <Typography
          variant={'subtitle1'}
          color='#000'
          fontSize={20}
          fontWeight={500}
        >
          Cargando...
        </Typography>
      )}
    </>
  );
};
