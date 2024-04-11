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
import { PersonagemPoderService } from './personagem-poder.service';
import { CreatePersonagemPoderDto } from './dto/create-personagem-poder.dto';
import { UpdatePersonagemPoderDto } from './dto/update-personagem-poder.dto';
import { PoderesQueryDto } from './dto/poderes-query.dto';
import { AuthGuard } from 'src/common/guard/auth.guard';

@Controller('api/personagem')
@UseGuards(AuthGuard)
export class PersonagemPoderController {
  constructor(
    private readonly personagemPoderService: PersonagemPoderService,
  ) {}

  @Post('personagem-poder')
  async create(@Body() createPersonagemPoderDto: CreatePersonagemPoderDto) {
    return await this.personagemPoderService.create(createPersonagemPoderDto);
  }

  @Get('personagem-poders')
  async findByQuery(
    @Query(new ValidationPipe()) poderesQueryDto: PoderesQueryDto,
  ) {
    return await this.personagemPoderService.findByQuery(poderesQueryDto);
  }

  @Get('personagem-poder/:id')
  async findOne(@Param('id') id: string) {
    return await this.personagemPoderService.findOne(+id);
  }

  @Patch('personagem-poder/:id')
  async update(
    @Param('id') id: string,
    @Body() updatePersonagemPoderDto: UpdatePersonagemPoderDto,
  ) {
    return await this.personagemPoderService.update(
      +id,
      updatePersonagemPoderDto,
    );
  }

  @Delete('personagem-poder/:id')
  async remove(@Param('id') id: string) {
    return await this.personagemPoderService.remove(+id);
  }
}
