import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonagemPoderService } from './personagem-poder.service';
import { CreatePersonagemPoderDto } from './dto/create-personagem-poder.dto';
import { UpdatePersonagemPoderDto } from './dto/update-personagem-poder.dto';

@Controller('personagem-poder')
export class PersonagemPoderController {
  constructor(private readonly personagemPoderService: PersonagemPoderService) {}

  @Post()
  create(@Body() createPersonagemPoderDto: CreatePersonagemPoderDto) {
    return this.personagemPoderService.create(createPersonagemPoderDto);
  }

  @Get()
  findAll() {
    return this.personagemPoderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personagemPoderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonagemPoderDto: UpdatePersonagemPoderDto) {
    return this.personagemPoderService.update(+id, updatePersonagemPoderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personagemPoderService.remove(+id);
  }
}
