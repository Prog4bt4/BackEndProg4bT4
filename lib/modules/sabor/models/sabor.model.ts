import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface Isabor extends mongoose.Document {  
    sabor: string;
}

 const saborSchema = new Schema(
    {
        sabor: {
            type: String,
            required: [true, 'sabor required'],
            unique: true
        }
    }
    
 );

const sabor = mongoose.model<Isabor>("sabor", saborSchema);
export default sabor;