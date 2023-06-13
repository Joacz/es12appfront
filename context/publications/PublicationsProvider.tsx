import { FunctionComponent, useEffect, useReducer } from 'react';
import { PublicationsContext, publicationsReducer } from './';
import { publicationApi } from '../../apis';
import Publication from '../../interfaces/Publication';

export interface PublicationsState {
  publications: Publication[];
}

export interface PublicationsProps {
  children: JSX.Element | JSX.Element[];
}

const Publications_INITIAL_STATE: PublicationsState = {
  publications: [],
};

export const PublicationsProvider: FunctionComponent<PublicationsProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(
    publicationsReducer,
    Publications_INITIAL_STATE
  );

  const findAll = async () => {
    const publications = await publicationApi.get<Publication[]>('/recent');
    dispatch({ type: 'Find All', payload: publications.data });
  };

  const findAllBySection = async (section: string) => {
    const publications = await publicationApi.get<Publication[]>(`/recent`, {
      params: { section },
    });
    dispatch({ type: 'Find By Section', payload: publications.data });
  };

  const findById = async (id: any) => {
    const publications = await publicationApi.get<Publication>(`/${id}`);

    dispatch({ type: 'Find By Id', payload: publications.data });
  };

  useEffect(() => {
    findAll();
  }, []);

  return (
    <PublicationsContext.Provider
      value={{ ...state, findAll, findById, findAllBySection }}
    >
      {children}
    </PublicationsContext.Provider>
  );
};
