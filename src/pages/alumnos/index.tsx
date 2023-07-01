import { useContext, useEffect } from 'react';
import { MainLayout } from '../../../component/layout';
import { PublicationList } from '../../../component/ui';
import { PublicationsContext } from '../../../context/publications';
import {
  Button,
  Grid,
  IconButton,
  Link,
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
import { FilesContext } from '../../../context/files';
import FolderIcon from '@mui/icons-material/Folder';

export default function Index() {
  const { findAllBySection, publications } = useContext(PublicationsContext);
  const { files, findFileBySection } = useContext(FilesContext);

  useEffect(() => {
    if (publications.length === 0) findAllBySection('ALUMNOS');
    if (files.length === 0) findFileBySection('ALUMNOS');
  }, [publications, files]);

  return (
    <MainLayout
      title={'Alumnos - ES12'}
      description={'Información y noticias de los alumnos de la ES12'}
      headerTitle='Alumnos'
    >
      <PublicationList
        hasTitle={false}
        publications={publications.filter((p) => p.section === 'ALUMNOS')}
      />
      <Grid
        padding={3}
        container
        alignItems={'center'}
        marginBottom={5}
        flexDirection={'column'}
        display={'flex'}
        justifyContent={'center'}
        flexWrap={'wrap'}
      >
        <Typography variant='h2'>CARPETAS Y ARCHIVOS</Typography>
        <Grid
          item
          gap={4}
          display='flex'
          flexWrap={'wrap'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Link
            fontSize={24}
            href='https://drive.google.com/drive/u/0/folders/1Jb5avqPpdYb5XD-zyAI8wBFDJGwdmgFf'
            target='_blank'
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            <FolderIcon sx={{ fontSize: 24 }} />
            Turno Mañana
          </Link>
          <Link
            fontSize={24}
            href='https://drive.google.com/drive/u/0/folders/1nuUnYJCl1kEGqe6tT6Px-OJeohxAoiic'
            target='_blank'
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            <FolderIcon sx={{ fontSize: 24 }} />
            Turno Tarde
          </Link>
          <Link
            fontSize={24}
            href='https://drive.google.com/drive/u/0/folders/1d1oOJ8IFXm2feTPc0BfnAXpzPDO4jIBT'
            target='_blank'
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            <FolderIcon sx={{ fontSize: 24 }} />
            Turno Noche
          </Link>
          {files
            ?.filter(
              (file) =>
                (file.section === 'ALUMNOS' || file.section === 'TODOS') &&
                file.mainFile === true
            )
            .map((p, key) => (
              <Link
                key={key}
                fontSize={24}
                href={`/api/image/download/${p?.name}`}
                sx={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                }}
              >
                <FolderIcon sx={{ fontSize: 24 }} />
                {p?.name?.substring(15, p?.name?.length)}
              </Link>
            ))}
        </Grid>
      </Grid>
      {files.filter((f) => f.mainFile === false).length > 0 && (
        <Grid
          padding={3}
          container
          alignItems={'center'}
          marginBottom={5}
          justifyContent={'center'}
        >
          <Grid item xs={12} sm={10}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align='left'>Nombre</TableCell>
                    <TableCell align='center'>Descargar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {files
                    ?.filter(
                      (file) =>
                        (file.section === 'ALUMNOS' ||
                          file.section === 'TODOS') &&
                        file.mainFile === false
                    )
                    ?.map((p, key) => (
                      <TableRow
                        hover={true}
                        key={key}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell>
                          {p?.name?.substring(15, p?.name?.length)}
                        </TableCell>
                        <TableCell align='center'>
                          <IconButton href={`/api/image/download/${p?.name}`}>
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
