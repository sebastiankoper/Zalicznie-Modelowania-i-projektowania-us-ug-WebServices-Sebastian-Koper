import { ZespolMongo as SchematZespolu } from '../schemas/Team.model';
import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Zespol } from '../interfaces/Match.interfaces';

export class DodajMeczDTO {
  @ApiProperty({
    type: () => SchematZespolu,
  })
  @Prop({ required: true, type: Object })
  zespol_1: Zespol;

  @ApiProperty({
    type: () => SchematZespolu,
  })
  @Prop({ required: true, type: Object })
  zespol_2: Zespol;

  @ApiProperty({
    type: Date,
  })
  @Prop({ required: true })
  dzien_gry: Date;

  @ApiProperty({
    type: String,
  })
  @Prop({ required: true })
  wynik: string;

  @ApiProperty({
    type: String,
  })
  @Prop({ required: true })
  nazwa: string;

  @ApiProperty({
    type: String,
  })
  @Prop({ required: true })
  opis: string;
}
