import { FunctionComponent, useReducer } from 'react';
import { FilesContext } from './';
import { filesReducer } from './filesReducer';
import FilePublication from '../../interfaces/FilePublication';
import { fileApi } from '../../apis/fileApi';

export interface FilesState {
  files: FilePublication[];
}

export interface FilesProps {
  children: JSX.Element | JSX.Element[];
}

const Files_INITIAL_STATE: FilesState = {
  files: [],
};

export const FilesProvider: FunctionComponent<FilesProps> = ({ children }) => {
  const [state, dispatch] = useReducer(filesReducer, Files_INITIAL_STATE);

  const findFileBySection = async (section: string) => {
    const res = await fileApi.get<FilePublication[]>('/' + section);
    dispatch({ type: 'Find By Section', payload: res.data });
  };

  return (
    <FilesContext.Provider value={{ ...state, findFileBySection }}>
      {children}
    </FilesContext.Provider>
  );
};
