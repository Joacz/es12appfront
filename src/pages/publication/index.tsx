import { FC, useContext } from 'react';
import { MainLayout } from '../../../component/layout';
import { PublicationList } from '../../../component/ui';
import { PublicationsContext } from '../../../context/publications';

const Publications: FC = () => {
  const { publications } = useContext(PublicationsContext);

  return (
    <MainLayout
      headerTitle={'AVISOS Y NOTICIAS'}
      title={'Noticias'}
      description={
        'Lista de publicaciones de la escuela N12 Provincia del Neuquén. Encuentra las noticias más relevantes de la escuela.'
      }
    >
      {/* <Typography variant={'h2'}>Noticias más recientes</Typography>
      <Grid
        width={'70%'}
        rowGap={8}
        container
        p={5}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {publications.map((p: any) => (
          <Grid
            xs={12}
            lg={4}
            padding={2}
            height={400}
            container
            marginBottom={20}
          >
            <Card variant='outlined' sx={{ p: 1, backgroundColor: '#fdfdfd' }}>
              <CardContent
                sx={{ p: 1, gap: 1, display: 'flex', flexDirection: 'column' }}
              >
                <Typography
                  variant='h3'
                  textAlign={'left'}
                  fontSize={25}
                  fontWeight={500}
                >
                  {p.title}
                </Typography>
                <div
                  style={{
                    gap: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '300px',
                    overflow: 'hidden',
                  }}
                >
                  <p
                    dangerouslySetInnerHTML={
                      p.content.length > 400
                        ? p.content.substring(0, 400)
                        : p.content
                    }
                  ></p>
                </div>
              </CardContent>
              <CardActions>
                <Button
                  size='large'
                  fullWidth
                  variant='outlined'
                  href={`/publication/${p.id}`}
                >
                  VER MÁS
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid> */}
      <PublicationList publications={publications}></PublicationList>
    </MainLayout>
  );
};

export default Publications;
