import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			enum: ['hotel', 'b&b', 'lodge'],
			required: true,
		},
		user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
		city: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		description: { type: String, required: true },
		photo: {
			photo: {
				type: String,
				default: '',
			},
		},
		distance: { type: String },
		cheapestPrice: { type: Number },

		ratings: { type: Number, default: 0, min: 0, max: 5 },
		reviews: { String },
		namRevs: { type: Number, default: 0 },

		roomNumbers: { type: [Number], unique: true },
		featured: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

const Hotel = mongoose.model('Hotel', hotelSchema);
export default Hotel;
