import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonagemMagiaService } from './personagem-magia.service';
import { CreatePersonagemMagiaDto } from './dto/create-personagem-magia.dto';
import { UpdatePersonagemMagiaDto } from './dto/update-personagem-magia.dto';

@Controller('personagem-magia')
export class PersonagemMagiaController {
  constructor(private readonly personagemMagiaService: PersonagemMagiaService) {}

  @Post()
  create(@Body() createPersonagemMagiaDto: CreatePersonagemMagiaDto) {
    return this.personagemMagiaService.create(createPersonagemMagiaDto);
  }

  @Get()
  findAll() {
    return this.personagemMagiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personagemMagiaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonagemMagiaDto: UpdatePersonagemMagiaDto) {
    return this.personagemMagiaService.update(+id, updatePersonagemMagiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personagemMagiaService.remove(+id);
  }
}
