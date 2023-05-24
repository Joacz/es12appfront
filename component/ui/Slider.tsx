import { FC, useState } from 'react';
import Image from '../../interfaces/Image';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

interface SliderProps {
  images: Image[];
}

export const Slider: FC<SliderProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const addIndex = () => {
    if (images.indexOf(images[index]) !== images.length - 1) {
      setIndex(index + 1);
    }
  };

  const sustractIndex = () => {
    if (images.indexOf(images[index]) !== 0) setIndex(index - 1);
  };

  return (
    <div
      style={{
        background: '#000',
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      {images.indexOf(images[index]) !== 0 && (
        <ArrowBackIos
          onClick={() => sustractIndex()}
          style={{
            borderRight: '1px solid #fff',
            borderTop: '1px solid #fff',
            borderBottom: '1px solid #fff',
            transition: 'all .5s ease',
            position: 'absolute',
            zIndex: 10,
            color: '#fff',
            top: '50%',
            transform: 'translateY(-50%)',
            backdropFilter: 'blur(8px)',
            width: 40,
            height: 70,
            left: 0,
            background: '#000000bb',
            cursor: 'pointer',
            borderRadius: '0 5px 5px 0',
            padding: 5,
          }}
        />
      )}
      <img
        src={`/api/image/${images[index].name}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
      {images.indexOf(images[index]) !== images.length - 1 && (
        <ArrowForwardIos
          onClick={() => addIndex()}
          style={{
            borderLeft: '1px solid #fff',
            borderTop: '1px solid #fff',
            borderBottom: '1px solid #fff',
            transition: 'all .5s ease',
            position: 'absolute',
            zIndex: 10,
            color: '#fff',
            top: '50%',
            transform: 'translateY(-50%)',
            backdropFilter: 'blur(8px)',
            width: 40,
            height: 70,
            background: '#000000bb',
            cursor: 'pointer',
            right: 0,
            borderRadius: '5px 0 0 5px',
            padding: 5,
          }}
        />
      )}
    </div>
  );
};
