import FilePublication from '../../interfaces/FilePublication';
import { FilesState } from './FilesProvider';

type FilesType =
  | {
    type: 'Find By Section', payload: FilePublication[];
  }
  | { type: 'Find All', payload: FilePublication[]; };

export const filesReducer = (state: FilesState, action: FilesType): FilesState => {
  switch (action.type) {
    case 'Find By Section':
      return {
        ...state,
        files: [...action.payload],
      };
    case 'Find All':
      return {
        ...state,
        files: [...action.payload]
      };
    default:
      return state;
  }
};