import mongoose, { Model, Schema } from 'mongoose';
import IEvent from '../interfaces/IEvents';
import { db } from '../db';

export interface InEvent extends IEvent { }

const eventSchema = new Schema({
  content: { type: String, required: true },
  date: { type: String, required: true, default: Date.now() },
  title: { type: String, required: true },
  subtitle: { type: String, required: false },
  images: { type: Array<String>, required: false }
});

const EventModel: Model<InEvent> = mongoose.models.Event
  || mongoose.model('Event', eventSchema);

export default EventModel;