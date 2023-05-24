import {
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import {
  EventCardContainer,
  Divisor,
  Location,
  PublicationList,
} from '../../component/ui';
import { MainLayout } from '../../component/layout';
import { FileDisplay } from '../../component/ui/FileDisplay';
import { eventApi, publicationApi } from '../../apis';
import IEvent from '../../interfaces/IEvents';
import Publication from '../../interfaces/Publication';
import { InferGetServerSidePropsType, NextPage } from 'next';
import { PublicationsContext } from '../../context/publications';
import { EventsContext } from '../../context/events';
import { useContext, useEffect, useState } from 'react';

type Props = {
  events: IEvent[] | null | undefined;
  publications: Publication[] | null | undefined;
};

export default function Home() {
  const [publications, setPublications] = useState<any[]>([]);

  useEffect(() => {
    if (publications.length <= 0) {
      publicationApi.get('/recent').then((res) => setPublications(res.data));
    } else {
      return;
    }
  }, [publications]);

  return (
    <MainLayout
      title={'ES12 Provincia Del Neuquén'}
      description={
        'Plataforma informativa oficial de la Escuela Número 12, "Provincia Del Nequén" de Paraná.'
      }
    >
      <PublicationList publications={publications} />

      {/* <DivisionSelector /> */}

      {/* Sección de publicaciones */}

      {/* <div className='w-full flex flex-col sm:p-20 p-4 bg-black justify-center items-center text-center'>
        <Typography
          className='my-10'
          fontWeight={700}
          variant={'h2'}
          color={'#fff'}
        >
          EVENTOS RECIENTES
        </Typography>
        <div className='max-w-[1000px]'>
          <EventCardContainer events={events} />
        </div>
      </div> */}

      {/* Documentos */}

      <Container
        id='docentes'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          p: '10em 0',
        }}
      >
        <Typography variant='h3' fontSize={40} fontWeight={500} align='center'>
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

      <Location />
    </MainLayout>
  );
}

// export async function getServerSideProps(context: any) {
//   try {
//     const dataPub = await fetch(
//       'https://www.escuela12neuquen.edu.ar/api/publication'
//     );
//     const publications = await dataPub.json();
//     const dataEve = await fetch(
//       'https://www.escuela12neuquen.edu.ar/api/event'
//     );
//     const events = await dataEve.json();

//     return {
//       props: {
//         publications,
//         events,
//       }, // will be passed to the page component as props
//     };
//   } catch (e) {
//     return {
//       props: {
//         publications: [],
//         events: [],
//       }, // will be passed to the page component as props
//     };
//   }
// }
