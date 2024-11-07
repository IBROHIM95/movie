import { registerEnumType } from '@nestjs/graphql';

export enum MovieType {
	ACTION = 'ACTION',
	ADVENTURE = 'ADVENTURE',
	COMEDY = 'COMEDY',
	CRIME = 'CRIME',
	SPORTS = 'SPORTS',
	THRILLER = 'THRILLER',
	CARTOON = 'CARTOON',
	HORROR = 'HORROR',
	HISTORICAL = 'HISTORICAL'
}
registerEnumType(MovieType, {
	name: 'MovieType',
});

export enum MovieStatus {
	ACTIVE = 'ACTIVE',
	PROCCESS = 'PROCCESS',
	DELETE = 'DELETE',
}
registerEnumType(MovieStatus, {
	name: 'MovieStatus',
});

export enum MovieCountry {
	AMERICAN = 'AMERICAN',
	INDIAN = 'INDIAN',
	TURKISH = 'TURKISH',
	KOREAN = 'KOREAN',
	OTHER = 'OTHER'

}
registerEnumType(MovieCountry, {
	name: 'MovieCountry',
});
