
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const hariSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String
})

const hariModel = mongoose.model('hari', hariSchema, 'hari');
export default hariModel;
