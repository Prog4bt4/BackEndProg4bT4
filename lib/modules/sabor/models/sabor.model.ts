import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface ISabor extends mongoose.Document {  
    sabor: string;
}

 const SaborSchema = new Schema(
    {
        sabor: {
            type: String,
            required: [true, 'sabor required'],
            unique: true
        }
    }
    
 );

const Sabor = mongoose.model<ISabor>("Sabor", SaborSchema);
export default Sabor;