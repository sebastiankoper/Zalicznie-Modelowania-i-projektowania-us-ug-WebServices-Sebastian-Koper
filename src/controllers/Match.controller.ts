import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MeczMongo } from '../schemas/Match.model';
import { DodajMeczDTO } from '../dto/Match.dto';
import { Mecz } from './../interfaces/Match.interfaces';
import { MatchService } from './../services/Match.service';

@ApiBearerAuth()
@ApiTags('mecz')
@Controller('/mecz')
export class MatchController {
  constructor(private readonly meczSerwice: MatchService) {}

  @Get('/wzystkie')
  @ApiResponse({
    status: 200,
    description: 'znaleziony rekord',
    type: MeczMongo,
  })
  @ApiOperation({ summary: 'Wyszukaj wszystkie meczy' })
  async pobierzWszystkieMecze(): Promise<DodajMeczDTO[]> {
    return this.meczSerwice.pobierzWszystkieMecze();
  }

  @Get(':nazwa_zespolu')
  @ApiResponse({
    status: 200,
    description: 'znaleziony rekord',
    type: MeczMongo,
  })
  @ApiOperation({ summary: 'pobierz specialny mecz' })
  async findSpecificMatch(
    @Param() search_data: { team_name: string },
  ): Promise<DodajMeczDTO[]> {
    return this.meczSerwice.wyszukajSpecialnyMecz(search_data.team_name);
  }
  @ApiOperation({ summary: 'utwórz mecz' })
  @ApiResponse({
    status: 200,
    description: 'znaleziony rekord',
    type: MeczMongo,
  })
  @Post('/dodaj')
  async dodajMecz(@Body() mecz: DodajMeczDTO): Promise<Mecz[]> {
    await this.meczSerwice.dodajMecz(mecz);
    return await this.pobierzWszystkieMecze();
  }
}
