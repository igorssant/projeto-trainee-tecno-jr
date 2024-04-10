import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';

@Controller('api')
export class PersonagemController {
  constructor(private readonly personagemService: PersonagemService) {}

  @Post('personagem')
  async create(@Body() createPersonagemDto: CreatePersonagemDto) {
    return await this.personagemService.create(createPersonagemDto);
  }

  @Get('personagems')
  async findAll() {
    return await this.personagemService.findAll();
  }

  @Get('personagem/:id')
  async findOne(@Param('id') id: string) {
    return await this.personagemService.findOne(+id);
  }

  @Patch('personagem/:id')
  async update(
    @Param('id') id: string,
    @Body() updatePersonagemDto: UpdatePersonagemDto,
  ) {
    return await this.personagemService.update(+id, updatePersonagemDto);
  }

  @Delete('personagem/:id')
  async remove(@Param('id') id: string) {
    return await this.personagemService.remove(+id);
  }
}
