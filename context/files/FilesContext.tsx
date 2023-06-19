import { createContext } from 'react';
import FilePublication from '../../interfaces/FilePublication';

interface ContextProps {
  files: FilePublication[];
  findFileBySection: (section: string) => void;
}

export const FilesContext = createContext({} as ContextProps);
