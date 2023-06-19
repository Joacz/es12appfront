import { useContext, useEffect } from 'react';
import { MainLayout } from '../../../component/layout';
import { PublicationList } from '../../../component/ui';
import { PublicationsContext } from '../../../context/publications';
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
import { Download } from '@mui/icons-material';
import Link from 'next/link';
import { FilesContext } from '../../../context/files';

export default function Index() {
  const { findAllBySection, publications } = useContext(PublicationsContext);
  const { files, findFileBySection } = useContext(FilesContext);

  useEffect(() => {
    findFileBySection('ALUMNOS');
    findAllBySection('ALUMNOS');
  }, [publications, files]);

  return (
    <MainLayout
      title={'Alumnos - ES12'}
      description={'Información y noticias de los alumnos de la ES12'}
      headerTitle='Alumnos'
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
          <Typography variant='h2'>TURNOS</Typography>

          <Link
            style={{ width: '100%' }}
            target='_blank'
            href={
              'https://drive.google.com/drive/u/0/folders/1Jb5avqPpdYb5XD-zyAI8wBFDJGwdmgFf'
            }
          >
            <Button variant='outlined' size='large' fullWidth>
              Turno Mañana
            </Button>
          </Link>
          <Link
            style={{ width: '100%' }}
            target='_blank'
            href={
              'https://drive.google.com/drive/u/0/folders/1nuUnYJCl1kEGqe6tT6Px-OJeohxAoiic'
            }
          >
            <Button variant='outlined' size='large' fullWidth>
              Turno Tarde
            </Button>
          </Link>
          <Link
            style={{ width: '100%' }}
            target='_blank'
            href={
              'https://drive.google.com/drive/u/0/folders/1d1oOJ8IFXm2feTPc0BfnAXpzPDO4jIBT'
            }
          >
            <Button variant='outlined' size='large' fullWidth>
              Turno Noche
            </Button>
          </Link>
        </Grid>
      </Grid>
      {files.length > 0 && (
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
                    <TableCell align='center'>Descargar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {files?.map((p, key) => (
                    <TableRow
                      hover={true}
                      key={key}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell>
                        {p.name.substring(16, p.name.length)}
                      </TableCell>
                      <TableCell align='center'>
                        <IconButton href={`/api/image/download/${p.name}`}>
                          <Download />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      )}
    </MainLayout>
  );
}
