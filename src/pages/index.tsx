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
  const { publications, findAllBySection } = useContext(PublicationsContext);

  useEffect(() => {
    findAllBySection('PRINCIPAL');
  }, [publications]);

  return (
    <MainLayout
      title={'ES12 Provincia Del Neuquén'}
      description={
        'Plataforma informativa oficial de la Escuela Número 12, "Provincia Del Nequén" de Paraná.'
      }
    >
      <PublicationList hasTitle publications={publications} />

      <Location />
      <br />
    </MainLayout>
  );
}
