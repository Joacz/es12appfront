import IEvent from '../../interfaces/IEvents';
import { EventState } from './EventsProvider';

type EventsType =
  | {
    type: 'Find All',
    payload: IEvent[];
  }
  | { type: 'Find By Id', payload: IEvent; };

export const eventsReducer = (state: EventState, action: EventsType): EventState => {
  switch (action.type) {
    case 'Find All':
      return {
        ...state,
        events: [...action.payload],
      };
    case 'Find By Id':
      return {
        ...state,
        events: [action.payload]
      };
    default:
      return state;
  }
};