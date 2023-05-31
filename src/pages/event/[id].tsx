import { eventApi } from '../../../apis';
import IEvent from '../../../interfaces/IEvents';
import { MainLayout } from '../../../component/layout';
import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useUrlify } from '../../../hooks';
import { NextPage } from 'next';

const EventById: NextPage = () => {
  const router = useRouter();
  const [event, setEvent] = useState<IEvent>({} as IEvent);
  const { id } = router.query;

  const urlify = useUrlify;

  useEffect(() => {
    if (router.isReady)
      eventApi.get<IEvent>(`/${id}`).then((res) => setEvent(res.data));
  }, [router.isReady]);

  return (
    <MainLayout
      headerTitle={event?.title}
      title={event?.title}
      description={event?.content}
    >
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        sx={{ py: 10 }}
      >
        <Grid
          item
          xs={11}
          md={6}
          sx={{ gap: 5, display: 'flex', flexDirection: 'column' }}
        >
          <Typography variant='h1' textAlign={'justify'}>
            {event?.title}
          </Typography>
          <p
            style={{ wordBreak: 'break-word', textAlign: 'justify' }}
            dangerouslySetInnerHTML={{
              __html: urlify(event?.content || ''),
            }}
          ></p>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default EventById;
