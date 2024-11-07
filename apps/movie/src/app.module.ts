import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config'
import {GraphQLModule} from '@nestjs/graphql'
import {ApolloDriver} from '@nestjs/apollo'
import { AppResolver } from './app.resolver';
import { ComponentsModule } from '../../../../nestar/apps/nestar-api/src/components/components.module';
import { DatabaseModule } from '../../../../nestar/apps/nestar-api/src/database/database.module';

import { T } from '../../../../nestar/apps/nestar-api/src/libs/types/common';
import { SocketModule } from '../../../../nestar/apps/nestar-api/src/socket/socket.module';



@Module({
  imports: [
  ConfigModule.forRoot(),  //.eny fayli ishlatish uchun kerakli package
  GraphQLModule.forRoot({  //shu orqali biz o'zimizni tizimimizda GraphQLni yoqdik oldin REST API EDI
    driver: ApolloDriver,
    playground: true,
    uploads: false,
    autoSchemaFile: true,

    // Global error handling- pipe, logic va databaseda errorlar bo'ladi
    formatError: (error: T) => {
      console.log('error:', error);
      const graphQLFormattedError = {
        
        code: error?.extensions.code,
        message:  
         error?.extensions?.exception?.response?.message || error?.extensions?.response?.message || error?.message,
      }; 
      console.log('GRAPHQL GLOBAL ERR:', graphQLFormattedError);
      return graphQLFormattedError
      
    }
  }), 
    ComponentsModule, //hamma componentlarni yigib ko'prik vazifasini bajaryapdi
     DatabaseModule, 
     SocketModule,
   
  ],   
  //biz buni o'chirib qo'ysak ham bo'ladi sababi Rest ham GraphQL ham HTTP protokolda ishlaydi
  controllers: [AppController], 
  providers: [AppService, AppResolver],
})
export class AppModule {}

//APP.MODULE bizda markaziy bog'ichi hisoblanadi sababi hamma modullarimizni integratsiya bo'lgan
// 