import asyncHandler from 'express-async-handler';
import User from '../modals/userModal.js';
import generateToken from '../utils/generateToken.js';

//uath a user
export const userLogin = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user),
		});
	} else {
		res.status(401);
		throw new Error('Invalid email or password');
	}
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);

	if (user) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		});
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);

	if (user) {
		user.name = req.body.name || user.name;
		user.email = req.body.email || user.email;
		if (req.body.password) {
			user.password = req.body.password;
		}

		const updatedUser = await user.save();

		res.json({
			_id: updatedUser._id,
			name: updatedUser.name,
			email: updatedUser.email,
			isAdmin: updatedUser.isAdmin,
			token: generateToken(updatedUser),
		});
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});

//register user

export const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new Error('User already exists');
	}

	const user = await User.create({
		name,
		email,
		password,
	});

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user),
		});
	} else {
		res.status(400);
		throw new Error('Invalid user data');
	}
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
export const getUsers = asyncHandler(async (req, res) => {
	const users = await User.find({});

	res.json(users);
});

// get number of users

export const userCount = async (req, res) => {
	const date = new Date();
	const lastyear = new Date(date.setFullYear(date.getFullYear() - 1));
	try {
		const users = await User.aggregate([
			{
				$match: {
					createdAt: { $gte: lastyear },
				},
				$project: { $month: 'createdAt' },
			},
			{
				$group: {
					_id: '$month',
					total: { $sum: 1 },
				},
			},
			res.status(200).send(users),
		]);
	} catch (error) {}
};
