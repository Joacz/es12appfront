import Image from './Image';

export default interface Publication {

  id: string,
  content: string,
  title: string,
  date: string,
  featured: boolean;
  images: Image[];
  section: string,

}
