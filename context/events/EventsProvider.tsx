import { FunctionComponent, useEffect, useReducer } from 'react';
import { EventsContext, eventsReducer } from '.';
import { eventApi } from '../../apis';
import IEvent from '../../interfaces/IEvents';

export interface EventState {
  events: IEvent[];
}

export interface EventsProps {
  children: JSX.Element | JSX.Element[];
}

const Events_INITIAL_STATE: EventState = {
  events: [],
};

export const EventsProvider: FunctionComponent<EventsProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(eventsReducer, Events_INITIAL_STATE);

  const findAll = async () => {
    const events = await eventApi.get<IEvent[]>('');
    dispatch({ type: 'Find All', payload: events.data });
  };

  const findById = async (id: string) => {
    const events = await eventApi.get<IEvent>(`/${id}`);

    dispatch({ type: 'Find By Id', payload: events.data });
  };

  useEffect(() => {
    findAll();
  }, []);

  return (
    <EventsContext.Provider value={{ ...state, findAll, findById }}>
      {children}
    </EventsContext.Provider>
  );
};
