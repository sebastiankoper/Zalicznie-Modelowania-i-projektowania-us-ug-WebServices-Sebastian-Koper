import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';
import { Zespol } from '../interfaces/Match.interfaces';
import { ZespolMongo as ZespolSchemat } from './Team.model';

export type MeczDokument = HydratedDocument<MeczMongo>;

@Schema()
export class MeczMongo {
  @ApiProperty()
  @Prop({ required: true, type: () => ZespolSchemat })
  zespol_1: Zespol;

  @ApiProperty()
  @Prop({ required: true, type: () => ZespolSchemat })
  zespol_2: Zespol;

  @ApiProperty()
  @Prop({ required: true })
  dzien_gry: Date;

  @ApiProperty()
  @Prop({ required: true })
  wynik: string;

  @ApiProperty()
  @Prop({ required: true })
  nazwa: string;

  @ApiProperty()
  @Prop({ required: true })
  opis: string;
}

export const MeczSchemat = SchemaFactory.createForClass(MeczMongo);
