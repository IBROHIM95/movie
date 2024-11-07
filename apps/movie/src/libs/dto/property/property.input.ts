import { Field,   InputType, Int } from "@nestjs/graphql";
import{ IsIn, IsInt, IsNotEmpty, IsOptional, Length, Min} from 'class-validator'
import { MovieCountry, MovieStatus, MovieType } from "../../enums/movie.enum";
import { ObjectId } from "mongoose";
import {  availableMovieSort } from "../../config";
import { Direction } from "../../enums/common.enum";


@InputType()
export class MovieInput {
	@IsNotEmpty()
	@Field(() => MovieType)
	movieType: MovieType;

	@IsNotEmpty()
	@Field(() => MovieCountry)
	movieCountry: MovieCountry;

	@IsNotEmpty()
	@Length(3, 100)
	@Field(() => String)
	movieName: string;

	
	@IsNotEmpty()
	@Field(() => Number)
	movieYear: number;

	@IsNotEmpty()
	@IsInt()
	@Min(1)
	@Field(() => Int)
	movieSeasons: number;

	@IsNotEmpty()
	@Field(() => Number)
	moviePeriod: number;

	@IsNotEmpty()
	@Field(() => [String])
	movieImages: string[];

	@IsOptional()
	@Length(5, 500)
	@Field(() => String, { nullable: true })
	movieDesc?: string;

	memberId?: ObjectId;

	@IsOptional()
	@Field(() => Date, { nullable: true })
	constructedAt?: Date;
}



@InputType()
export class YearsRange {
	@Field(() => Int)
	start: number;

	@Field(() => Int)
	end: number;
}



@InputType()
class PISearch {
	@IsOptional()
	@Field(() => String, { nullable: true })
	memberId?: ObjectId;

	@IsOptional()
	@Field(() => [MovieCountry], { nullable: true })
	movieCountry?: MovieCountry[];

	@IsOptional()
	@Field(() => [MovieType], { nullable: true })
	typeList?: MovieType[];

	@IsOptional()
	@Field(() => [Int], { nullable: true })
	seasonsList?: Number[];


	@IsOptional()
	@Field(() => YearsRange, { nullable: true })
	yearsRange?: YearsRange;

	@IsOptional()
	@Field(() => String, { nullable: true })
	text?: string;
}

@InputType()
export class MoviesInquiry {
	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	page: number;

	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	limit: number;

	@IsOptional()
	@IsIn(availableMovieSort)
	@Field(() => String, { nullable: true })
	sort?: string;

	@IsOptional()
	@Field(() => Direction, { nullable: true })
	direction?: Direction;

	@IsNotEmpty()
	@Field(() => PISearch)
	search: PISearch;
}

@InputType()
class APISearch {
	@IsOptional()
	@Field(() => MovieStatus, { nullable: true })
	movieStatus?: MovieStatus;
}

@InputType()
export class AgentMoviesInquiry {
	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	page: number;

	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	limit: number;

	@IsOptional()
	@IsIn(availableMovieSort)
	@Field(() => String, { nullable: true })
	sort?: string;

	@IsOptional()
	@Field(() => Direction, { nullable: true })
	direction: Direction;

	@IsNotEmpty()
	@Field(() => APISearch)
	search: APISearch;
}

@InputType()
class ALPSearch {
	@IsOptional()
	@Field(() => MovieStatus, { nullable: true })
	movieStatus?: MovieStatus;

	@IsOptional()
	@Field(() => [MovieCountry], { nullable: true })
	movieCountry?: MovieCountry[];
}

@InputType()
export class AllMoviesInquiry {
	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	page: number;

	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	limit: number;

	@IsOptional()
	@IsIn(availableMovieSort)
	@Field(() => String, { nullable: true })
	sort?: string;

	@IsOptional()
	@Field(() => Direction, { nullable: true })
	direction?: Direction;

	@IsNotEmpty()
	@Field(() => ALPSearch)
	search: ALPSearch;
}

@InputType()
export class OrdinaryInquiry {
	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	page: number;

	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	limit: number;
}
