import { MeczMongo, MeczDokument } from '../schemas/Match.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DodajMeczDTO } from '../dto/Match.dto';

@Injectable()
export class MatchService {
  constructor(
    @InjectModel(MeczMongo.name) private meczModel: Model<MeczDokument>,
  ) {}

  async pobierzWszystkieMecze(): Promise<DodajMeczDTO[]> {
    return await this.meczModel.find();
  }

  async dodajMecz(mecz: DodajMeczDTO): Promise<void> {
    await this.meczModel.create(mecz);
  }

  async wyszukajSpecialnyMecz(nazwa_zespolu: string): Promise<DodajMeczDTO[]> {
    return await this.meczModel.find({
      nazwa: { $regex: new RegExp(nazwa_zespolu, 'i') },
    });
  }
}
