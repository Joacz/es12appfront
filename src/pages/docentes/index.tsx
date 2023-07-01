import { useContext, useEffect } from 'react';
import { MainLayout } from '../../../component/layout';
import { PublicationList } from '../../../component/ui';
import { PublicationsContext } from '../../../context/publications';
import {
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
import FolderIcon from '@mui/icons-material/Folder';
import { FilesContext } from '../../../context/files';

export default function Index() {
  const { findAllBySection, publications } = useContext(PublicationsContext);
  const { files, findFileBySection } = useContext(FilesContext);

  useEffect(() => {
    if (files.length === 0) findFileBySection('DOCENTES');
    if (publications.length === 0) findAllBySection('DOCENTES');
  }, [publications, files]);

  return (
    <MainLayout
      title={'Docentes - ES12'}
      description={'Información y noticias de los docentes de la ES12'}
      headerTitle='Docentes'
    >
      <PublicationList
        hasTitle={false}
        publications={publications.filter((p) => p.section === 'DOCENTES')}
      />
      <Grid
        padding={3}
        container
        alignItems={'center'}
        marginBottom={5}
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
        gap={6}
        flexWrap={'wrap'}
      >
        <br />
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
            href='https://drive.google.com/drive/folders/13urUwx6jhiUtWVt3miiLVzY0_8JRpydF'
            target='_blank'
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            <FolderIcon sx={{ fontSize: 24 }} />
            Docentes
          </Link>

          <Link
            fontSize={24}
            href='https://drive.google.com/drive/folders/1wlwlb51sbruNQ07PU4mx8bwsJfCEENSD'
            target='_blank'
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            <FolderIcon sx={{ fontSize: 24 }} />
            Institucional
          </Link>
          {files
            ?.filter(
              (file) =>
                (file.section === 'DOCENTES' || file.section === 'TODOS') &&
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
                        (file.section === 'DOCENTES' ||
                          file.section === 'TODOS') &&
                        file.mainFile === false
                    )
                    .map((p, key) => (
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
