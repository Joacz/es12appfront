import { FC, useContext, useEffect } from 'react';
import { MainLayout } from '../../../component/layout';
import { Grid, Typography } from '@mui/material';
import { EventCard } from '../../../component/ui';
import { EventsContext } from '../../../context/events';

const Event: FC = () => {
  const { events, findAll } = useContext(EventsContext);

  useEffect(() => {
    findAll();
  }, [events]);

  return (
    <MainLayout
      headerTitle={'ACTOS Y EVENTOS'}
      title={'Eventos'}
      description={
        'Lista de publicaciones de la escuela N12 Provincia del Neuquén. Encuentra las noticias más relevantes de la escuela.'
      }
    >
      <Typography variant={'h2'}>Actos y eventos más recientes</Typography>
      <Grid
        rowGap={8}
        container
        p={5}
        width={'100%'}
        justifyContent={'center'}
        alignItems={'start'}
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
