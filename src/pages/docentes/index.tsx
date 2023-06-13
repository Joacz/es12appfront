import { useContext, useEffect } from 'react';
import { MainLayout } from '../../../component/layout';
import { Divisor, PublicationList } from '../../../component/ui';
import { PublicationsContext } from '../../../context/publications';
import {
  Button,
  Container,
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
import { Download } from '@mui/icons-material';
import { FileDisplay } from '../../../component/ui/FileDisplay';

export default function Index() {
  const { findAllBySection, publications } = useContext(PublicationsContext);

  useEffect(() => {
    findAllBySection('DOCENTES');
  }, [publications]);

  return (
    <MainLayout
      title={'Docentes - ES12'}
      description={'Información y noticias de los docentes de la ES12'}
      headerTitle='Docentes'
    >
      <PublicationList hasTitle={false} publications={publications} />
      <Grid
        padding={3}
        container
        alignItems={'center'}
        marginBottom={5}
        justifyContent={'center'}
      >
        <Grid
          item
          gap={4}
          display='flex'
          flexDirection={'column'}
          xs={12}
          sm={10}
          md={8}
          lg={6}
        >
          <Typography variant='h2'>CARPETAS</Typography>
          <Button
            size='large'
            fullWidth
            variant='outlined'
            href='https://drive.google.com/drive/folders/13urUwx6jhiUtWVt3miiLVzY0_8JRpydF'
            target='_blank'
          >
            Docentes
          </Button>
          <Button
            size='large'
            fullWidth
            variant='outlined'
            href='https://drive.google.com/drive/folders/1wlwlb51sbruNQ07PU4mx8bwsJfCEENSD'
            target='_blank'
          >
            Institucional
          </Button>
          <Button
            size='large'
            fullWidth
            variant='outlined'
            href='https://drive.google.com/drive/folders/1qXafH25CeIoHrVKcrGSjotq2f6SvoqvM'
            target='_blank'
          >
            Programas y Planificaciones
          </Button>
        </Grid>
      </Grid>

      <Grid
        padding={3}
        container
        alignItems={'center'}
        marginBottom={5}
        justifyContent={'center'}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            p: '10em 0',
          }}
        >
          <Typography
            variant='h3'
            fontSize={40}
            fontWeight={500}
            align='center'
          >
            Documentos para descargar
          </Typography>
          <Divisor />
          <Grid
            container
            wrap='wrap'
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Grid item lg={4} sx={{ padding: 1 }}>
              <FileDisplay
                value={'Formulario Único'}
                image={'img/pdf.png'}
                url={
                  'https://drive.google.com/file/d/1HPp99HVPDQNHv9qhtVKFxOuZBtHcAdvj/view'
                }
              />
            </Grid>
            <Grid item lg={4} sx={{ padding: 1 }}>
              <FileDisplay
                value={'Planilla de Incompatibilidad - (frente)'}
                image={'img/word.png'}
                url={
                  'https://drive.google.com/file/d/1HPp99HVPDQNHv9qhtVKFxOuZBtHcAdvj/view'
                }
              />
            </Grid>
            <Grid item lg={4} sx={{ padding: 1 }}>
              <FileDisplay
                value={'Planilla de Incompatibilidad - (dorso)'}
                image={'img/word.png'}
                url={
                  'https://drive.google.com/file/d/1HPp99HVPDQNHv9qhtVKFxOuZBtHcAdvj/view'
                }
              />
            </Grid>
          </Grid>
        </Container>
      </Grid>
      {publications.map((p) =>
        p.images.filter((i) => !i.type.includes('image'))
      ).length > 1 ? (
        <Grid
          padding={3}
          container
          alignItems={'center'}
          marginBottom={5}
          justifyContent={'center'}
        >
          <Grid item xs={12} sm={10}>
            <Typography variant='h2'>DESCARGAS</Typography>
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
                  {publications?.map((p) =>
                    p?.images?.map((image, key) => (
                      <TableRow
                        hover={true}
                        key={key}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell>
                          {image.name.substring(15, image.name.length)}
                        </TableCell>
                        <TableCell align='left'>{image.type}</TableCell>
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
      ) : (
        ''
      )}
    </MainLayout>
  );
}
