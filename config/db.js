import mongoose  from "mongoose";
const connectToMongo = async ()=>{
    const res =  await mongoose.connect('mongodb://localhost:27017/todoDB')
    res && console.log('connected to MongoDB')
}
export default connectToMongo;