import Image from './Image';

export default interface IEvent {
  id: string,
  title: string,
  content: string,
  subtitle: string;
  date: string,
  images: Image[];
}
