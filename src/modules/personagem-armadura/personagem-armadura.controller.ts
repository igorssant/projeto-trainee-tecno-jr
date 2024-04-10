import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonagemArmaduraService } from './personagem-armadura.service';
import { CreatePersonagemArmaduraDto } from './dto/create-personagem-armadura.dto';
import { UpdatePersonagemArmaduraDto } from './dto/update-personagem-armadura.dto';

@Controller('personagem-armadura')
export class PersonagemArmaduraController {
  constructor(private readonly personagemArmaduraService: PersonagemArmaduraService) {}

  @Post()
  create(@Body() createPersonagemArmaduraDto: CreatePersonagemArmaduraDto) {
    return this.personagemArmaduraService.create(createPersonagemArmaduraDto);
  }

  @Get()
  findAll() {
    return this.personagemArmaduraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personagemArmaduraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonagemArmaduraDto: UpdatePersonagemArmaduraDto) {
    return this.personagemArmaduraService.update(+id, updatePersonagemArmaduraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personagemArmaduraService.remove(+id);
  }
}
