import mongoose, { Model, Schema } from 'mongoose';
import Publication from '../interfaces/Publication';

export interface IPublication extends Publication { }

const publicationSchema = new Schema({
  content: { type: String, required: true },
  date: { type: String, required: true, default: Date.now() },
  title: { type: String, required: true },
  featured: { type: Boolean, required: false, default: false },
  image: { type: Array<String>, required: false }
});

const PublicationModel: Model<IPublication> = mongoose.models.Publication
  || mongoose.model('Publication', publicationSchema);

export default PublicationModel;