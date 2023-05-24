import {
  Grid,
  List,
  ListItem,
  Divider,
  Typography,
  Button,
} from '@mui/material';
import { FC } from 'react';
import { useUrlify } from '../../../hooks/';
import Publication from '../../../interfaces/Publication';
import { Slider } from '../';

interface PublicationsProps {
  publications: Publication[];
}

export const PublicationList: FC<PublicationsProps> = ({ publications }) => {
  const urlify = useUrlify;

  const getDateByNumber = (input: string) => {
    return new Date(parseInt(input)).toLocaleString();
  };

  return (
    <Grid
      container
      xs={12}
      md={6}
      justifyContent={'center'}
      direction={'column'}
      marginBottom={10}
    >
      <Typography variant={'h3'}>NOTICIAS RECIENTES</Typography>
      {publications.length >= 1 ? (
        <Grid item xs={12}>
          {publications.map((p) => (
            <List key={p.id}>
              <ListItem>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 20,
                    gap: 20,
                    wordBreak: 'break-word',
                  }}
                >
                  <Divider />
                  <Typography
                    variant={'subtitle1'}
                    fontSize={30}
                    textAlign={'left'}
                  >
                    {p.title}
                  </Typography>
                  <p>{getDateByNumber(p.date)}</p>
                  <p
                    className='textPublication'
                    dangerouslySetInnerHTML={{
                      __html: urlify(
                        p.content?.length > 200
                          ? p.content.substring(0, 500) + '...'
                          : p.content
                      ),
                    }}
                  ></p>
                  <Slider images={p.images} />
                  <Button
                    sx={{ width: 'max-content', px: 5 }}
                    variant={'outlined'}
                    href={`/publication/${p.id}`}
                  >
                    Ver más
                  </Button>
                </div>
              </ListItem>
            </List>
          ))}
        </Grid>
      ) : (
        <Typography
          variant={'subtitle1'}
          color='#000'
          fontSize={20}
          fontWeight={500}
        >
          Cargando...
        </Typography>
      )}
    </Grid>
  );
};
