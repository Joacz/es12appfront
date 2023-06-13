import { eventApi } from '../../../apis';
import IEvent from '../../../interfaces/IEvents';
import { MainLayout } from '../../../component/layout';
import { Grid, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useUrlify } from '../../../hooks';
import { NextPage } from 'next';
import { ArrowBackIos, ArrowLeftRounded } from '@mui/icons-material';
import Link from 'next/link';

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
      includeHeader={false}
      title={event?.title}
      description={event?.content}
    >
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        sx={{ py: 10 }}
        flexDirection={'column'}
        display={'flex'}
      >
        <Grid container justifyContent={'center'} alignItems={'center'}>
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            sx={{ gap: 5, display: 'flex', flexDirection: 'column' }}
          >
            <Grid item>
              <Link href='/event'>
                <ArrowBackIos
                  color='primary'
                  sx={{
                    height: 25,
                    width: 25,
                    aspectRatio: 'square',
                  }}
                />
              </Link>
            </Grid>
            <Typography
              variant='h1'
              fontWeight={800}
              sx={{
                fontSize: '45px !important',
                fontFamily: 'Open Sans !important',
              }}
              textAlign={'left'}
            >
              {event?.title}
            </Typography>
            <p
              style={{
                wordBreak: 'break-word',
                textAlign: 'justify',
                fontSize: 20,
              }}
              dangerouslySetInnerHTML={{
                __html: urlify(event?.content || ''),
              }}
            ></p>
          </Grid>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default EventById;
