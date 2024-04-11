import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { PersonagemAtributoService } from './personagem-atributo.service';
import { CreatePersonagemAtributoDto } from './dto/create-personagem-atributo.dto';
import { UpdatePersonagemAtributoDto } from './dto/update-personagem-atributo.dto';
import { AtributosQueryDto } from './dto/atributos-query.dto';
import { AuthGuard } from 'src/common/guard/auth.guard';

@Controller('api/personagem')
@UseGuards(AuthGuard)
export class PersonagemAtributoController {
  constructor(
    private readonly personagemAtributoService: PersonagemAtributoService,
  ) {}

  @Post('personagem-atributo')
  async create(
    @Body() createPersonagemAtributoDto: CreatePersonagemAtributoDto,
  ) {
    return this.personagemAtributoService.create(createPersonagemAtributoDto);
  }

  @Get('personagem-atributos')
  async findByQuery(
    @Query(new ValidationPipe()) atributoQueryDto: AtributosQueryDto,
  ) {
    return this.personagemAtributoService.findByQuery(atributoQueryDto);
  }

  @Get('personagem-atributo/:id')
  async findOne(@Param('id') id: string) {
    return this.personagemAtributoService.findOne(+id);
  }

  @Patch('personagem-atributo/:id')
  async update(
    @Param('id') id: string,
    @Body() updatePersonagemAtributoDto: UpdatePersonagemAtributoDto,
  ) {
    return this.personagemAtributoService.update(
      +id,
      updatePersonagemAtributoDto,
    );
  }

  @Delete('personagem-atributo/:id')
  async remove(@Param('id') id: string) {
    return this.personagemAtributoService.remove(+id);
  }
}
