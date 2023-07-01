import { DetailsLayout, MainLayout } from '../../../component/layout';
import { Grid, Link, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { ArrowBackIos } from '@mui/icons-material';
import { EventsContext } from '../../../context/events';
import { SliderFullscreen } from '../../../component/ui/SliderFullscreen';
import IEvent from '../../../interfaces/IEvents';

const EventById: NextPage = () => {
  const router = useRouter();
  const { events, findById } = useContext(EventsContext);
  // Slider events
  const [slider, setSlider] = useState<boolean>(false);
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const [event, setEvent] = useState<IEvent>({
    content: '',
    date: '',
    id: '',
    images: [],
    subtitle: '',
    title: '',
  });
  const toggleSlider = (index: number) => {
    setSlider(!slider);
    setSliderIndex(index);
  };

  useEffect(() => {
    const { id }: any = router.query;

    if (id) {
      findById(id);
    }

    setEvent(events.filter((e) => e.id === id)[0]);
  }, [events, router.isReady]);

  return (
    <DetailsLayout title={event?.title} description={event?.content}>
      <Grid
        container
        justifyContent={'start'}
        alignItems={'start'}
        sx={{ py: 10, minHeight: '100vh', px: 5, transition: 'all .3s ease' }}
        flexDirection={'column'}
        display={'flex'}
      >
        <Grid container justifyContent={'center'} alignItems={'start'}>
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
              {event?.title}
            </Typography>
            <p
              style={{ fontSize: 20 }}
              dangerouslySetInnerHTML={{
                __html: event?.content || '',
              }}
            ></p>
            <Grid container xs={12}>
              {event?.images &&
                event?.images?.filter((image) => image.type.includes('image'))
                  .length != 0 &&
                event?.images
                  ?.filter((image) => image.type.includes('image'))
                  .map((image, index) => {
                    return (
                      <Grid padding={1} item xs={12} md={6} lg={4}>
                        <Link
                          onClick={() => toggleSlider(index)}
                          sx={{ cursor: 'pointer' }}
                        >
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
      {slider && (
        <SliderFullscreen
          setClose={setSlider}
          images={event?.images}
          initialIndex={sliderIndex}
        />
      )}
    </DetailsLayout>
  );
};

export default EventById;
