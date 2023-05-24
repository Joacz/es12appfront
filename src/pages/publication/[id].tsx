import { NextPage } from 'next';
import { MainLayout } from '../../../component/layout';
import { Grid, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useUrlify } from '../../../hooks';
import { PublicationsContext } from '../../../context/publications';
import { useRouter } from 'next/router';
import Link from 'next/link';

const PublicationById: NextPage = () => {
  const router = useRouter();
  const { findById, publications } = useContext(PublicationsContext);

  useEffect(() => {
    const { id }: any = router.query;

    if (id) {
      findById(id);
    }
  }, [publications]);

  const urlify = useUrlify;

  return (
    <MainLayout
      headerTitle={publications[0]?.title}
      title={publications[0]?.title}
      description={publications[0]?.content}
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
            {publications[0]?.title}
          </Typography>
          <p
            style={{ wordBreak: 'break-word', textAlign: 'justify' }}
            dangerouslySetInnerHTML={{
              __html: urlify(publications[0]?.content || ''),
            }}
          ></p>
          <Grid container xs={12}>
            {publications[0]?.images?.map((image) => {
              return (
                <Grid padding={1} item xs={6} lg={4}>
                  <Link href={`/api/image/${image.name}`}>
                    <img
                      src={`/api/image/${image.name}`}
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
    </MainLayout>
  );
};

export default PublicationById;
