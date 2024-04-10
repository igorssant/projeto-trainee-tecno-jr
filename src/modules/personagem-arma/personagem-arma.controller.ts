import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonagemArmaService } from './personagem-arma.service';
import { CreatePersonagemArmaDto } from './dto/create-personagem-arma.dto';
import { UpdatePersonagemArmaDto } from './dto/update-personagem-arma.dto';

@Controller('personagem-arma')
export class PersonagemArmaController {
  constructor(private readonly personagemArmaService: PersonagemArmaService) {}

  @Post()
  create(@Body() createPersonagemArmaDto: CreatePersonagemArmaDto) {
    return this.personagemArmaService.create(createPersonagemArmaDto);
  }

  @Get()
  findAll() {
    return this.personagemArmaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personagemArmaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonagemArmaDto: UpdatePersonagemArmaDto) {
    return this.personagemArmaService.update(+id, updatePersonagemArmaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personagemArmaService.remove(+id);
  }
}
