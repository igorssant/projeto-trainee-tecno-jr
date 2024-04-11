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
import { EquipamentoService } from './equipamento.service';
import { CreateEquipamentoDto } from './dto/create-equipamento.dto';
import { UpdateEquipamentoDto } from './dto/update-equipamento.dto';
import { AuthGuard } from 'src/common/guard/auth.guard';

@Controller('equipamento')
@UseGuards(AuthGuard)
export class EquipamentoController {
  constructor(private readonly equipamentoService: EquipamentoService) {}

  @Post()
  async create(@Body() createEquipamentoDto: CreateEquipamentoDto) {
    return await this.equipamentoService.create(createEquipamentoDto);
  }

  @Get()
  async findAll() {
    return await this.equipamentoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.equipamentoService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEquipamentoDto: UpdateEquipamentoDto,
  ) {
    return await this.equipamentoService.update(+id, updateEquipamentoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.equipamentoService.remove(+id);
  }
}
