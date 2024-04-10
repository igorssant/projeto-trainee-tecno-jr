import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonagemArmaService } from './personagem-arma.service';
import { CreatePersonagemArmaDto } from './dto/create-personagem-arma.dto';
import { UpdatePersonagemArmaDto } from './dto/update-personagem-arma.dto';

@Controller('api/personagem/arma')
export class PersonagemArmaController {
  constructor(private readonly personagemArmaService: PersonagemArmaService) {}

  @Post('personagem-arma')
  async create(@Body() createPersonagemArmaDto: CreatePersonagemArmaDto) {
    return await this.personagemArmaService.create(createPersonagemArmaDto);
  }

  @Get('personagem-armas')
  async findAll() {
    return await this.personagemArmaService.findAll();
  }

  @Get('personagem-arma/:armaId&:personagemId')
  async findOne(
    @Param('armaId') armaId: string,
    @Param('personagemId') personagemId: string,
  ) {
    return this.personagemArmaService.findOne(+armaId, +personagemId);
  }

  @Patch('personagem-arma/:armaId/:personagemId')
  async update(
    @Param('armaId') armaId: string,
    @Param('personagemId') personagemId: string,
    @Body() updatePersonagemArmaDto: UpdatePersonagemArmaDto,
  ) {
    return await this.personagemArmaService.update(
      +armaId,
      +personagemId,
      updatePersonagemArmaDto,
    );
  }

  @Delete('personagem-arma/:armaId/:personagemId')
  async remove(
    @Param('armaId') armaId: string,
    @Param('personagemId') personagemId: string,
  ) {
    return await this.personagemArmaService.remove(+armaId, +personagemId);
  }
}
