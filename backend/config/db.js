import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGO_URI);

		if (connect) {
			console.log(`mongoDB connected ...  ${connect.connection.host}`);
		}
	} catch (e) {
		console.log(e);
	}
};
export default connectDB;
