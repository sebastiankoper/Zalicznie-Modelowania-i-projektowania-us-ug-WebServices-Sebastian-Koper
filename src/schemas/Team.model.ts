import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type DokumentZespolu = HydratedDocument<ZespolMongo>;

@Schema()
export class ZespolMongo {
  @ApiProperty()
  @Prop({ required: true, type: Object })
  kraj: string;

  @ApiProperty()
  @Prop({ required: true, type: Object })
  wynik: number;
}

export const SchematZespolu = SchemaFactory.createForClass(ZespolMongo);
