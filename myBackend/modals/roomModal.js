import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		price: { type: Number, required: true },
		maxPeople: { type: Number, required: true },
		description: { type: String, required: true },
		availability: { type: Boolean, default: true },
		roomNumber: { type: Number, required: true },
		photos: {
			type: [String],
		},
		hotel: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Hotel',
			required: true,
		},
	},
	{ timestamps: true }
);

const Room = mongoose.model('Room', roomSchema);
export default Room;
