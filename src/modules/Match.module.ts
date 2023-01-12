import { MatchService } from './../services/Match.service';
import { MatchController } from './../controllers/Match.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MeczSchemat, MeczMongo } from '../schemas/Match.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: MeczMongo.name, schema: MeczSchemat }]),
  ],
  controllers: [MatchController],
  providers: [MatchService],
})
export class MatchModule {}
