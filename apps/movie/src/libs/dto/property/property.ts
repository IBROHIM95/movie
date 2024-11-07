import {Field, Int, ObjectType} from '@nestjs/graphql'
import { ObjectId } from 'mongoose'
import { MemberAuthType, MemberStatus, MemberType } from '../../enums/member.enum';
import { MovieCountry, MovieStatus, MovieType } from '../../enums/movie.enum';
import { Member, TotalCounter } from '../member/member';
import { MeLiked } from '../like/like';

//backenddan clientga boradigan malumotlarni dtoqiladi
@ObjectType()
export class Property {
 @Field(() => String)
 _id: ObjectId;

 @Field(() => MovieType)
 movieType: MovieType;

 @Field(() => MovieStatus)
 movieStatus: MovieStatus;

 @Field(() => MovieCountry)
 movieCountry: MovieCountry;

 @Field(() => String)
 movieName: string;
 
 @Field(() => Number)
 movieYear: number;

 
 @Field(() => Number)
 movieSeasons: number;

 
 @Field(() => Number)
 moviePeriod: number;

 
 @Field(() => Number)
 movieViews: number;

 
 @Field(() => Number)
 movieLikes: number;

 
 @Field(() => Number)
 movieComments: number;

 
 @Field(() => Number)
 movieRank: number;

 @Field(() => [String])
 movieImages: string[];

 @Field(() => String, {nullable: true})
 movieDesc?: string;

 @Field(() => String)
 memberId:ObjectId
 
 @Field(() => Date, {nullable: true})
 deletedAt?: Date

 @Field(() => Date, {nullable: true})
 constructedAt?: Date

 @Field(() => Date)
 createdAt: Date

 @Field(() => Date)
 updatedAt: Date

 @Field(() => Member, {nullable: true})
 memberData?: Member 

 @Field(() => [MeLiked], {nullable:true})
 meLiked?: MeLiked[]
 
} 

@ObjectType()
export class Properties {
  @Field(() => [Property])
  list: Property[]

  @Field(()=> [TotalCounter], {nullable: true})
  metaCounter: TotalCounter[]

}

