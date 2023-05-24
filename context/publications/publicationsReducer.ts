import Publication from '../../interfaces/Publication';
import { PublicationsState } from './PublicationsProvider';

type PublicationsType =
  | {
    type: 'Find All',
    payload: Publication[];
  }
  | { type: 'Find By Id', payload: Publication; };

export const publicationsReducer = (state: PublicationsState, action: PublicationsType): PublicationsState => {
  switch (action.type) {
    case 'Find All':
      return {
        ...state,
        publications: [...action.payload],
      };
    case 'Find By Id':
      return {
        ...state,
        publications: [action.payload]
      };
    default:
      return state;
  }
};