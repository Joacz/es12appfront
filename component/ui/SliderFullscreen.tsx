import { FC, useState } from 'react';
import Image from '../../interfaces/Image';
import { Grid, Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos, Close } from '@mui/icons-material';

interface SliderFullscreenProps {
  images: Image[];
  initialIndex?: number;
  setClose: any;
}

export const SliderFullscreen: FC<SliderFullscreenProps> = ({
  images,
  setClose,
  initialIndex,
}) => {
  const [index, setIndex] = useState<number>(initialIndex || 0);

  const addIndex = () => {
    if (images?.indexOf(images[index]) !== images?.length - 1) {
      setIndex(index + 1);
    }
  };

  const sustractIndex = () => {
    if (images?.indexOf(images[index]) !== 0) setIndex(index - 1);
  };

  return (
    <Grid
      xs={12}
      position={'fixed'}
      height={'100%'}
      zIndex={100}
      width={'100%'}
      top={0}
      left={0}
      bgcolor={'#fff'}
    >
      <Close
        sx={{
          position: 'absolute',
          zIndex: 10,
          top: 20,
          right: 30,
          width: 50,
          bgcolor: '#fff',
          padding: '6px',
          borderRadius: '100%',
          height: 50,
          cursor: 'pointer',
        }}
        onClick={() => setClose()}
      />
      {images?.length >= 1 && images?.indexOf(images[index]) !== 0 && (
        <ArrowBackIos
          sx={{
            position: 'absolute',
            zIndex: 10,
            left: 30,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 50,
            height: 70,
            borderRadius: '10px',
            color: '#000',
            cursor: 'pointer',
            bgcolor: '#00000055',
          }}
          onClick={sustractIndex}
        />
      )}
      <img
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'contain',
        }}
        src={`/api/image/${images[index]?.name}`}
      />{' '}
      {images?.length >= 1 &&
        images?.indexOf(images[index]) !== images?.length - 1 && (
          <ArrowForwardIos
            sx={{
              position: 'absolute',
              zIndex: 10,
              right: 30,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 50,
              height: 70,
              borderRadius: '10px',
              color: '#000',
              cursor: 'pointer',
            }}
            onClick={addIndex}
          />
        )}
    </Grid>
  );
};
