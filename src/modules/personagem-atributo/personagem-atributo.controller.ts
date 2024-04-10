import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonagemAtributoService } from './personagem-atributo.service';
import { CreatePersonagemAtributoDto } from './dto/create-personagem-atributo.dto';
import { UpdatePersonagemAtributoDto } from './dto/update-personagem-atributo.dto';

@Controller('personagem-atributo')
export class PersonagemAtributoController {
  constructor(private readonly personagemAtributoService: PersonagemAtributoService) {}

  @Post()
  create(@Body() createPersonagemAtributoDto: CreatePersonagemAtributoDto) {
    return this.personagemAtributoService.create(createPersonagemAtributoDto);
  }

  @Get()
  findAll() {
    return this.personagemAtributoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personagemAtributoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonagemAtributoDto: UpdatePersonagemAtributoDto) {
    return this.personagemAtributoService.update(+id, updatePersonagemAtributoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personagemAtributoService.remove(+id);
  }
}
