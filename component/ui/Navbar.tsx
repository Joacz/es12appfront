'use client';
import { Grid, List, ListItem, Typography } from '@mui/material';
import Link from 'next/link';
import { FC, useState } from 'react';
import { useWindowSize, useVerticalScroll } from '../../hooks';
import MenuIcon from '@mui/icons-material/Menu';

export interface NavProps {
  links: Array<{
    url: string;
    value: string;
  }>;
}

export const Navbar: FC<NavProps> = ({ links }) => {
  const windowSize = useWindowSize();
  const scroll = useVerticalScroll();
  const [navbar, setNavbar] = useState(false);

  return (
    <nav
      id='navbar'
      style={{
        boxShadow: '0 0 2em #0000009f',
        width: '100%',
        WebkitTransition: 'all 1s ease',
        transition: 'all 1s ease',
        position: 'fixed',
        zIndex: 100,
        top: 0,
        left: 0,
      }}
    >
      {/* nav grids */}

      <Grid
        container
        alignItems={'center'}
        width={'100%'}
        direction={
          windowSize?.x && windowSize?.x >= 900 ? 'row' : 'row-reverse'
        }
        justifyContent={'space-between'}
        sx={{
          transition: 'all .5s ease',
          background: `${scroll <= 500 ? '#203056' : '#000'}`,
          p: `${
            windowSize?.x && windowSize?.x >= 900 && scroll >= 500
              ? '0'
              : '1.5em'
          } ${windowSize?.x && windowSize?.x >= 1200 ? '20%' : '20px'}`,
        }}
      >
        {windowSize?.x && windowSize.x < 900 ? (
          <>
            <Grid item>
              <Link href={'/'}>
                <img
                  src='/img/logo-nav.png'
                  alt=''
                  style={{
                    width: '50px',
                    height: '50px',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    margin: '25px',
                  }}
                />{' '}
              </Link>
            </Grid>
            <Grid item>
              <List
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}
              >
                <MenuIcon
                  onClick={() => setNavbar(!navbar)}
                  sx={{
                    marginBottom: `${navbar ? '40px' : 0}`,
                    color: '#fff',
                    width: '50px',
                    height: '100%',
                    aspectRatio: 'square',
                    transition: 'all 1s ease',
                    borderRadius: '2.5px',
                    background: `${scroll <= 500 ? '#2e457c' : '#2e2e2e'}`,
                    p: '0 10px',
                  }}
                  className='menuIconNavbar'
                />
                {navbar && (
                  <>
                    {links.map((link) => (
                      <ListItem key={link.value} sx={{ p: 0 }}>
                        <Link
                          style={{ padding: '10px 5px' }}
                          href={link.url}
                          className='navbarLink'
                        >
                          <Typography color='#fff' variant='body1'>
                            {link.value.toUpperCase()}
                          </Typography>
                        </Link>
                      </ListItem>
                    ))}
                  </>
                )}
              </List>
            </Grid>
          </>
        ) : (
          <>
            <Grid item>
              <Link href={'/'}>
                <img
                  src='/img/logo-nav.png'
                  alt=''
                  style={{
                    width: '100%',
                    padding: 10,
                    maxHeight: '110px',
                  }}
                />
              </Link>
            </Grid>
            <Grid item>
              <List sx={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
                {links.map((link) => (
                  <ListItem key={link.value}>
                    <Link href={link.url} className='navbarLink'>
                      <Typography color='#fff' variant='h6'>
                        {link.value.toUpperCase()}
                      </Typography>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </>
        )}
      </Grid>
    </nav>
  );
};
