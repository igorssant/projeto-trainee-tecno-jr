import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MagiaService } from './magia.service';
import { CreateMagiaDto } from './dto/create-magia.dto';
import { UpdateMagiaDto } from './dto/update-magia.dto';

@Controller('magia')
export class MagiaController {
  constructor(private readonly magiaService: MagiaService) {}

  @Post()
  create(@Body() createMagiaDto: CreateMagiaDto) {
    return this.magiaService.create(createMagiaDto);
  }

  @Get()
  findAll() {
    return this.magiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.magiaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMagiaDto: UpdateMagiaDto) {
    return this.magiaService.update(+id, updateMagiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.magiaService.remove(+id);
  }
}
