import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EndpointsModule } from './endpoints/endpoints.module';
//import { DbModule } from './db/db.module';
import { Db } from './db';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [EndpointsModule, DatabaseModule, /*DbModule*/],
  controllers: [AppController],
  providers: [AppService, /*Db*/],
})
export class AppModule {}
