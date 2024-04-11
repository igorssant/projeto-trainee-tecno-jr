import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JogadorService } from './jogador.service';
import { CreateJogadorDto } from './dto/create-jogador.dto';
import { UpdateJogadorDto } from './dto/update-jogador.dto';
import { AuthGuard } from 'src/common/guard/auth.guard';

@Controller('api')
@UseGuards(AuthGuard)
export class JogadorController {
  constructor(private readonly jogadorService: JogadorService) {}

  @Post('jogador')
  async create(@Body() createJogadorDto: CreateJogadorDto) {
    return await this.jogadorService.create(createJogadorDto);
  }

  @Get('jogador')
  async findAll() {
    return await this.jogadorService.findAll();
  }

  @Get('jogador/:id')
  async findOne(@Param('id') id: string) {
    return await this.jogadorService.findOne(+id);
  }

  @Patch('jogador/:id')
  async update(
    @Param('id') id: string,
    @Body() updateJogadorDto: UpdateJogadorDto,
  ) {
    return await this.jogadorService.update(+id, updateJogadorDto);
  }

  @Delete('jogador/:id')
  async remove(@Param('id') id: string) {
    return await this.jogadorService.remove(+id);
  }
}
