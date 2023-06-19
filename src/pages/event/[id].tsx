import { DetailsLayout, MainLayout } from '../../../component/layout';
import { Grid, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useUrlify } from '../../../hooks';
import { NextPage } from 'next';
import { ArrowBackIos } from '@mui/icons-material';
import Link from 'next/link';
import { EventsContext } from '../../../context/events';

const EventById: NextPage = () => {
  const router = useRouter();
  const { events, findById } = useContext(EventsContext);
  const { id } = router.query;

  const urlify = useUrlify;

  useEffect(() => {
    findById(id?.toString()!);
  }, [router.isReady]);

  return (
    <DetailsLayout title={events[0]?.title} description={events[0]?.content}>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        sx={{ py: 10, height: '100vh' }}
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
              <Link href='/'>
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
              {events[0]?.title}
            </Typography>
            <p
              style={{
                wordBreak: 'break-word',
                textAlign: 'justify',
                fontSize: 20,
              }}
              dangerouslySetInnerHTML={{
                __html: urlify(events[0]?.content || ''),
              }}
            ></p>
            <Grid container xs={12}>
              {events[0]?.images &&
                events[0]?.images?.filter((image) =>
                  image.type.includes('image')
                ).length != 0 &&
                events[0]?.images
                  ?.filter((image) => image.type.includes('image'))
                  .map((image) => {
                    return (
                      <Grid padding={1} item xs={12} md={6} lg={4}>
                        <Link href={`/api/image/${image?.name}`}>
                          <img
                            src={`/api/image/${image?.name}`}
                            alt=''
                            style={{
                              objectFit: 'cover',
                              width: '100%',
                              aspectRatio: 'square',
                              height: 300,
                              borderRadius: 10,
                            }}
                          />
                        </Link>
                      </Grid>
                    );
                  })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DetailsLayout>
  );
};

export default EventById;
