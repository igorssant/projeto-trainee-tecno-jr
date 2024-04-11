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
import { PersonagemArmaduraService } from './personagem-armadura.service';
import { CreatePersonagemArmaduraDto } from './dto/create-personagem-armadura.dto';
import { UpdatePersonagemArmaduraDto } from './dto/update-personagem-armadura.dto';
import { ArmadurasQueryDto } from './dto/armaduras-query.dto';
import { AuthGuard } from 'src/common/guard/auth.guard';

@Controller('api/personagem/armadura')
@UseGuards(AuthGuard)
export class PersonagemArmaduraController {
  constructor(
    private readonly personagemArmaduraService: PersonagemArmaduraService,
  ) {}

  @Post('personagem-armadura')
  async create(
    @Body() createPersonagemArmaduraDto: CreatePersonagemArmaduraDto,
  ) {
    return await this.personagemArmaduraService.create(
      createPersonagemArmaduraDto,
    );
  }

  @Get('personagem-armadura/:id')
  async findOne(@Param('id') id: string) {
    return await this.personagemArmaduraService.findOne(+id);
  }

  @Get('personagem-armaduras')
  async getByQuery(
    @Query(new ValidationPipe()) armadurasQueryDto: ArmadurasQueryDto,
  ) {
    return await this.personagemArmaduraService.findByQuery(armadurasQueryDto);
  }

  @Patch('personagem-armadura/:id')
  async update(
    @Param('id') id: string,
    @Body() updatePersonagemArmaduraDto: UpdatePersonagemArmaduraDto,
  ) {
    return await this.personagemArmaduraService.update(
      +id,
      updatePersonagemArmaduraDto,
    );
  }

  @Delete('personagem-armadura/:id')
  async remove(@Param('id') id: string) {
    return await this.personagemArmaduraService.remove(+id);
  }
}
