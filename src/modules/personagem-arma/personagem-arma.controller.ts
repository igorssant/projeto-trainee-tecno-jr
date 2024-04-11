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
import { PersonagemArmaService } from './personagem-arma.service';
import { CreatePersonagemArmaDto } from './dto/create-personagem-arma.dto';
import { UpdatePersonagemArmaDto } from './dto/update-personagem-arma.dto';
import { ArmasQueryDto } from './dto/armas-query.dto';
import { AuthGuard } from 'src/common/guard/auth.guard';

@Controller('api/personagem/arma')
@UseGuards(AuthGuard)
export class PersonagemArmaController {
  constructor(private readonly personagemArmaService: PersonagemArmaService) {}

  @Post('personagem-arma')
  async create(@Body() createPersonagemArmaDto: CreatePersonagemArmaDto) {
    return await this.personagemArmaService.create(createPersonagemArmaDto);
  }

  @Get('personagem-arma/:id')
  async findOne(@Param('armaId') id: string) {
    return this.personagemArmaService.findOne(+id);
  }

  @Get('personagem-armas')
  async findByQuery(@Query(new ValidationPipe()) armasQueryDto: ArmasQueryDto) {
    return await this.personagemArmaService.findByQuery(armasQueryDto);
  }

  @Patch('personagem-arma/:id')
  async update(
    @Param('id') id: string,
    @Body() updatePersonagemArmaDto: UpdatePersonagemArmaDto,
  ) {
    return await this.personagemArmaService.update(
      +id,
      updatePersonagemArmaDto,
    );
  }

  @Delete('personagem-arma/:id')
  async remove(@Param('id') id: string) {
    return await this.personagemArmaService.remove(+id);
  }
}
