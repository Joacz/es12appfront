import { createContext } from 'react';
import IEvent from '../../interfaces/IEvents';

interface ContextProps {
  findAll: () => void;
  findById: (id: string) => void;
  events: IEvent[];
}

export const EventsContext = createContext({} as ContextProps);
