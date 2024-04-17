import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PersonagemMagiaService } from './personagem-magia.service';
import { CreatePersonagemMagiaDto } from './dto/create-personagem-magia.dto';
import { UpdatePersonagemMagiaDto } from './dto/update-personagem-magia.dto';
import { MagiasQueryDto } from './dto/magias-query.dto';
import { AuthGuard } from 'src/common/guard/auth.guard';

@Controller('api/personagem')
@UseGuards(AuthGuard)
export class PersonagemMagiaController {
  constructor(
    private readonly personagemMagiaService: PersonagemMagiaService,
  ) {}

  @Post('personagem-magia')
  async create(@Body() createPersonagemMagiaDto: CreatePersonagemMagiaDto) {
    return await this.personagemMagiaService.create(createPersonagemMagiaDto);
  }

  @Get('personagem-magias')
  async findByQuery(@Query() magiasQueryDto: MagiasQueryDto) {
    return await this.personagemMagiaService.findByQuery(magiasQueryDto);
  }

  @Get('personagem-magia/:id')
  async findOne(@Param('id') id: string) {
    return await this.personagemMagiaService.findOne(+id);
  }

  @Patch('personagem-magia/:id')
  async update(
    @Param('id') id: string,
    @Body() updatePersonagemMagiaDto: UpdatePersonagemMagiaDto,
  ) {
    return await this.personagemMagiaService.update(
      +id,
      updatePersonagemMagiaDto,
    );
  }

  @Delete('personagem-magia/:id')
  async remove(@Param('id') id: string) {
    return await this.personagemMagiaService.remove(+id);
  }
}
