import { Field,  InputType, Int } from "@nestjs/graphql";
import{ IsInt, IsNotEmpty, IsOptional, Length, Min} from 'class-validator'
import { MovieCountry, MovieStatus, MovieType } from "../../enums/movie.enum";
import { ObjectId } from "mongoose";



@InputType()
export class PropertyUpdate {
  @IsNotEmpty()
  @Field(() => String)
  _id: ObjectId  

  @IsOptional()
  @Field(() => MovieType, {nullable: true})
  movieType?: MovieType  

  
  @IsOptional()
  @Field(() => MovieStatus, {nullable: true})
  movieStatus?: MovieStatus  

  @IsOptional()
  @Field(() => MovieCountry, {nullable: true})
  movieCountry?: MovieCountry  

  @IsOptional()
  @Length(3, 100)
  @Field(() => String, {nullable: true})
  movieName?: string  

  @IsOptional()
  @Field(() => Number, {nullable: true})
  movieYear?: number 

  @IsOptional()
  @Field(() => Number, {nullable: true})
  movieSeasons?: number  

  @IsOptional()
  @Field(() => Number, {nullable: true})
  moviePeriod?: number  

  
  @IsOptional()
  @Field(() => [String], {nullable: true})
  movieImages?: string[]  

  @IsOptional()
  @Length(5, 500)
  @Field(() => String, {nullable:true})
  movieDesc?: string

 
  deletedAt?: Date;

  @IsOptional()
  @Field(() => Date, {nullable:true})
  constructedAt?: Date



}

