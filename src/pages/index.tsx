import { Location, PublicationList } from '../../component/ui';
import { MainLayout } from '../../component/layout';
import IEvent from '../../interfaces/IEvents';
import Publication from '../../interfaces/Publication';
import { PublicationsContext } from '../../context/publications';
import { useContext, useEffect } from 'react';

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
