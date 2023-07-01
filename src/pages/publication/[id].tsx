import { NextPage } from 'next';
import { DetailsLayout, MainLayout } from '../../../component/layout';
import { Grid, Link, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { PublicationsContext } from '../../../context/publications';
import { useRouter } from 'next/router';
import { ArrowBackIos, FileDownload } from '@mui/icons-material';
import { SliderFullscreen } from '../../../component/ui/SliderFullscreen';
import Publication from '../../../interfaces/Publication';

const PublicationById: NextPage = () => {
  const router = useRouter();
  const { findById, publications } = useContext(PublicationsContext);
  // Slider events
  const [slider, setSlider] = useState<boolean>(false);
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const [publication, setPublication] = useState<Publication>({
    id: '',
    content: '',
    date: '',
    featured: false,
    images: [],
    section: '',
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

    setPublication(publications[0]);
  }, [publications, router.isReady]);

  return (
    <DetailsLayout
      title={publication?.title}
      description={publication?.content}
    >
      <Grid
        container
        justifyContent={'center'}
        alignItems={'flex-start'}
        flexDirection={'column'}
        display={'flex'}
        sx={{ minHeight: '100vh', px: 5, py: 10 }}
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
            <p>{publication?.date}</p>
            <Typography
              variant='h1'
              fontWeight={800}
              sx={{
                fontSize: '45px !important',
                fontFamily: 'Open Sans !important',
              }}
              textAlign={'left'}
            >
              {publication?.title}
            </Typography>
            <p
              style={{ fontSize: 20 }}
              dangerouslySetInnerHTML={{
                __html: publication?.content || '',
              }}
            ></p>
            {publication?.images &&
              publication?.images?.filter(
                (image) => !image.type.includes('image')
              ).length > 0 && (
                <>
                  {publication?.images?.map((image, key) => (
                    <Link
                      key={key}
                      sx={{ fontSize: 20 }}
                      href={`/api/image/download/${image.name}`}
                    >
                      <FileDownload fontSize='large' />
                      {image.name.substring(16, image.name.length)}
                    </Link>
                  ))}
                </>
              )}
            <Grid container xs={12}>
              {publication?.images &&
                publication?.images?.filter((image) =>
                  image.type.includes('image')
                ).length != 0 &&
                publication?.images
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
          images={publication?.images}
          initialIndex={sliderIndex}
        />
      )}
    </DetailsLayout>
  );
};

export default PublicationById;
