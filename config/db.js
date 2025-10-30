import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config();


const connectionMongoDB = async ()=>{
    
    try {

        const conn = await mongoose.connect(process.env.MONGO);
        console.log("conexion a MONGO exitosa");
        
    } catch (error) {
        console.log(`ERROR: ${error.message}`)
        process.exit(1)
    }

}


export default connectionMongoDB;