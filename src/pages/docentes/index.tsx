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
    findFileBySection('DOCENTES');
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
        flexDirection={'column'}
        gap={6}
      >
        <br />
        <Typography variant='h2'>CARPETAS</Typography>
        <Grid item gap={4} display='flex' xs={12} sm={10} md={8} lg={6}>
          <Link
            fontSize={30}
            href='https://drive.google.com/drive/folders/13urUwx6jhiUtWVt3miiLVzY0_8JRpydF'
            target='_blank'
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            <FolderIcon sx={{ fontSize: 30 }} />
            Docentes
          </Link>

          <Link
            fontSize={30}
            href='https://drive.google.com/drive/folders/1wlwlb51sbruNQ07PU4mx8bwsJfCEENSD'
            target='_blank'
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            <FolderIcon sx={{ fontSize: 30 }} />
            Institucional
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
