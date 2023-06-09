import {
  Grid,
  List,
  ListItem,
  Divider,
  Typography,
  Button,
} from '@mui/material';
import { FC } from 'react';
import Publication from '../../../interfaces/Publication';
import { Slider } from '../';

interface PublicationsProps {
  publications: Publication[];
  hasTitle?: boolean;
}

export const PublicationList: FC<PublicationsProps> = ({
  publications,
  hasTitle,
}) => {
  return (
    <Grid
      container
      xs={12}
      md={6}
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
      marginBottom={10}
    >
      {publications.length >= 1 ? (
        <Grid item xs={12}>
          {hasTitle && (
            <Typography variant={'h3'}>PUBLICACIONES RECIENTES</Typography>
          )}
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
                  <p
                    style={{ fontSize: 20 }}
                    dangerouslySetInnerHTML={{
                      __html:
                        p.content?.length > 200
                          ? p.content.substring(0, 500) + '...'
                          : p.content,
                    }}
                    className='textPublication'
                  ></p>
                  {p.images &&
                    p.images.filter((i) => i.type.includes('image')).length >=
                      1 && (
                      <Slider
                        images={p.images
                          .filter((i) => i.type.includes('image'))
                          .map((i) => i)}
                      />
                    )}
                  <Button
                    sx={{ width: 'max-content', px: 5 }}
                    variant={'outlined'}
                    href={`/publication/${p.id}`}
                  >
                    Ver más
                  </Button>
                  <Typography
                    variant={'body1'}
                    fontSize={12}
                    textAlign={'left'}
                  >
                    {p.images.filter((i) => !i.type.includes('image')).length !=
                    0
                      ? p.images.filter((i) => !i.type.includes('image'))
                          .length === 1
                        ? '1 Archivo adjunto'
                        : p.images.filter((i) => !i.type.includes('image'))
                            .length + ' Archivos adjuntos'
                      : ''}
                  </Typography>
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
          No hay publicaciones
        </Typography>
      )}
    </Grid>
  );
};
