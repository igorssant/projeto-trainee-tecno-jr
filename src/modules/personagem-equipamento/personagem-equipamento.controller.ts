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
import { PersonagemEquipamentoService } from './personagem-equipamento.service';
import { CreatePersonagemEquipamentoDto } from './dto/create-personagem-equipamento.dto';
import { UpdatePersonagemEquipamentoDto } from './dto/update-personagem-equipamento.dto';
import { EquipamentosQueryDto } from './dto/equipamentos-query.dto';
import { AuthGuard } from 'src/common/guard/auth.guard';

@Controller('api/personagem')
@UseGuards(AuthGuard)
export class PersonagemEquipamentoController {
  constructor(
    private readonly personagemEquipamentoService: PersonagemEquipamentoService,
  ) {}

  @Post('personagem-equipamento')
  async create(
    @Body() createPersonagemEquipamentoDto: CreatePersonagemEquipamentoDto,
  ) {
    return await this.personagemEquipamentoService.create(
      createPersonagemEquipamentoDto,
    );
  }

  @Get('personagem-equipamentos')
  async findByQuery(
    @Query(new ValidationPipe()) equipamentosQueryDto: EquipamentosQueryDto,
  ) {
    return await this.personagemEquipamentoService.findByQuery(
      equipamentosQueryDto,
    );
  }

  @Get('personagem-equipamento/:id')
  async findOne(@Param('id') id: string) {
    return await this.personagemEquipamentoService.findOne(+id);
  }

  @Patch('personagem-equipamento/:id')
  async update(
    @Param('id') id: string,
    @Body() updatePersonagemEquipamentoDto: UpdatePersonagemEquipamentoDto,
  ) {
    return await this.personagemEquipamentoService.update(
      +id,
      updatePersonagemEquipamentoDto,
    );
  }

  @Delete('personagem-equipamento/:id')
  async remove(@Param('id') id: string) {
    return await this.personagemEquipamentoService.remove(+id);
  }
}
