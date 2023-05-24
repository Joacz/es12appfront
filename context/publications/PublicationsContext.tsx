import { createContext } from 'react';
import Publication from '../../interfaces/Publication';

interface ContextProps {
  findAll: () => void;
  findById: (id: string) => void;
  publications: Publication[];
}

export const PublicationsContext = createContext({} as ContextProps);
