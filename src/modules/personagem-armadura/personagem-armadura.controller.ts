import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonagemArmaduraService } from './personagem-armadura.service';
import { CreatePersonagemArmaduraDto } from './dto/create-personagem-armadura.dto';
import { UpdatePersonagemArmaduraDto } from './dto/update-personagem-armadura.dto';

@Controller('api/personagem/armadura')
export class PersonagemArmaduraController {
  constructor(
    private readonly personagemArmaduraService: PersonagemArmaduraService,
  ) {}

  @Post('personagem-armadura')
  async create(
    @Body() createPersonagemArmaduraDto: CreatePersonagemArmaduraDto,
  ) {
    return await this.personagemArmaduraService.create(
      createPersonagemArmaduraDto,
    );
  }

  @Get('personagem-armaduras')
  async findAll() {
    return await this.personagemArmaduraService.findAll();
  }

  @Get('personagem-armadura/:armaduraId/:personagemId')
  async findOne(
    @Param('armaduraId') armaduraId: string,
    @Param('personagemId') personagemId: string,
  ) {
    return await this.personagemArmaduraService.findOne(
      +armaduraId,
      +personagemId,
    );
  }

  @Patch('personagem-armadura/:armaduraId/:personagemId')
  async update(
    @Param('armaduraId') armaduraId: string,
    @Param('personagemId') personagemId: string,
    @Body() updatePersonagemArmaduraDto: UpdatePersonagemArmaduraDto,
  ) {
    return await this.personagemArmaduraService.update(
      +armaduraId,
      +personagemId,
      updatePersonagemArmaduraDto,
    );
  }

  @Delete('personagem-armadura/:armaduraId/:personagemId')
  async remove(
    @Param('armaduraId') armaduraId: string,
    @Param('personagemId') personagemId: string,
  ) {
    return await this.personagemArmaduraService.remove(
      +armaduraId,
      +personagemId,
    );
  }
}
