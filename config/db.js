import mongoose  from "mongoose";
const connectToMongo = async ()=>{
    const res =  await mongoose.connect(process.env.MONGO_URL)
    res && console.log('connected to MongoDB')
}
export default connectToMongo;