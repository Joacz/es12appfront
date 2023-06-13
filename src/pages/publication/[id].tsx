import { NextPage } from 'next';
import { MainLayout } from '../../../component/layout';
import {
  Button,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useUrlify } from '../../../hooks';
import { PublicationsContext } from '../../../context/publications';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowBackIos, Download } from '@mui/icons-material';

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
      includeHeader={false}
      description={publications[0]?.content}
    >
      <Grid
        container
        justifyContent={'center'}
        alignItems={'flex-start'}
        flexDirection={'column'}
        display={'flex'}
        sx={{ py: 10, height: '100vh', px: 5 }}
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
              <Link href='/publication'>
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
              {publications[0]?.title}
            </Typography>
            <p
              style={{ wordBreak: 'break-word', textAlign: 'justify' }}
              dangerouslySetInnerHTML={{
                __html: urlify(publications[0]?.content || ''),
              }}
            ></p>
            <Grid container xs={12}>
              {publications[0]?.images &&
                publications[0]?.images?.filter((image) =>
                  image.type.includes('image')
                ).length != 0 &&
                publications[0]?.images
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

            {/* Archivos */}

            {publications[0]?.images &&
              publications[0]?.images?.filter(
                (image) => !image.type.includes('image')
              ).length > 0 && (
                <Grid
                  padding={1}
                  container
                  alignItems={'center'}
                  marginBottom={8}
                  justifyContent={'center'}
                >
                  <Grid item xs={12} md={8} lg={6}>
                    <Typography variant='h2'>Archivos</Typography>
                    <br />
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell align='left'>Nombre</TableCell>
                            <TableCell align='left'>Formato</TableCell>
                            <TableCell align='center'>Acciones</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {publications.map((p) =>
                            p.images
                              ?.filter((image) => !image.type.includes('image'))
                              .map((image, key) => (
                                <TableRow
                                  hover={true}
                                  key={key}
                                  sx={{
                                    '&:last-child td, &:last-child th': {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell>
                                    {image.name.substring(
                                      15,
                                      image.name.length
                                    )}
                                  </TableCell>
                                  <TableCell align='left'>
                                    {image.type}
                                  </TableCell>
                                  <TableCell align='center'>
                                    <IconButton
                                      href={`/api/image/download/${image.name}`}
                                    >
                                      <Download />
                                    </IconButton>
                                  </TableCell>
                                </TableRow>
                              ))
                          )}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              )}
          </Grid>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default PublicationById;
