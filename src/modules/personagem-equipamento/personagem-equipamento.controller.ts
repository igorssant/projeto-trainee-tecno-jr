import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonagemEquipamentoService } from './personagem-equipamento.service';
import { CreatePersonagemEquipamentoDto } from './dto/create-personagem-equipamento.dto';
import { UpdatePersonagemEquipamentoDto } from './dto/update-personagem-equipamento.dto';

@Controller('personagem-equipamento')
export class PersonagemEquipamentoController {
  constructor(private readonly personagemEquipamentoService: PersonagemEquipamentoService) {}

  @Post()
  create(@Body() createPersonagemEquipamentoDto: CreatePersonagemEquipamentoDto) {
    return this.personagemEquipamentoService.create(createPersonagemEquipamentoDto);
  }

  @Get()
  findAll() {
    return this.personagemEquipamentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personagemEquipamentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonagemEquipamentoDto: UpdatePersonagemEquipamentoDto) {
    return this.personagemEquipamentoService.update(+id, updatePersonagemEquipamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personagemEquipamentoService.remove(+id);
  }
}
