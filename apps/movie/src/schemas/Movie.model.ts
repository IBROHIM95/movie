import { Schema } from 'mongoose';
import { MovieCountry, MovieStatus, MovieType } from '../libs/enums/movie.enum';

const MovieSchema = new Schema(
	{
		movieType: {
			type: String,
			enum: MovieType,
			required: true,
		},

		movieStatus: {
			type: String,
			enum: MovieStatus,
			default: MovieStatus.ACTIVE,
		},

		movieCountry: {
			type: String,
			enum: MovieCountry,
			required: true,
		},


		movieName: {
			type: String,
			required: true,
		},

		movieYear: {
			type: Number,
			required: true,
		},

		moviePeriod: {
			type: Number,
			required: true,
		},

		movieSeasons: {
			type: Number,
			required: true,
		},

		movieViews: {
			type: Number,
			default: 0,
		},

		movieLikes: {
			type: Number,
			default: 0,
		},

		movieComments: {
			type: Number,
			default: 0,
		},

		movieRank: {
			type: Number,
			default: 0,
		},

		movieImages: {
			type: [String],
			required: true,
		},

		movieDesc: {
			type: String,
		},
		

		memberId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'Member',
		},


		deletedAt: {
			type: Date,
		},

		constructedAt: {
			type: Date,
		},
	},
	{ timestamps: true, collection: 'movies' },
);

MovieSchema.index({ movieType: 1, movieCountry: 1, movieName: 1,  }, { unique: true });

export default MovieSchema;
