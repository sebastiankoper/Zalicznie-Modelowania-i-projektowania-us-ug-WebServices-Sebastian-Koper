import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { MatchModule } from './Match.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sebastian:koper@cluster0.qoafolm.mongodb.net/?retryWrites=true&w=majority',
    ),
    MatchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
