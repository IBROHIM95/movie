import { registerEnumType } from '@nestjs/graphql';

export enum ViewGroup {
	MEMBER = 'MEMBER',
	ARTICLE = 'ARTICLE',
	MOVIE = 'MOVIE',
}
registerEnumType(ViewGroup, {
	name: 'ViewGroup',
});
