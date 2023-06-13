import { FC, useContext, useEffect, useState } from 'react';
import { MainLayout } from '../../../component/layout';
import { Grid, Typography } from '@mui/material';
import { EventCard, EventCardContainer } from '../../../component/ui';
import { EventsContext } from '../../../context/events';

const Event: FC = () => {
  const { events } = useContext(EventsContext);

  return (
    <MainLayout
      headerTitle={'ACTOS Y EVENTOS'}
      title={'Eventos'}
      description={
        'Lista de publicaciones de la escuela N12 Provincia del Neuquén. Encuentra las noticias más relevantes de la escuela.'
      }
    >
      <Typography variant={'h2'}>Eventos más recientes</Typography>
      <Grid
        rowGap={8}
        container
        p={5}
        width={'80%'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {events.map((event) => (
          <EventCard
            id={event.id}
            content={event.content}
            title={event.title}
            subtitle={event.subtitle}
            portrait={event?.images[0]?.name || 'es12.png'}
          ></EventCard>
        ))}
      </Grid>
    </MainLayout>
  );
};

export default Event;
