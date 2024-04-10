import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AtributoService } from './atributo.service';
import { CreateAtributoDto } from './dto/create-atributo.dto';
import { UpdateAtributoDto } from './dto/update-atributo.dto';

@Controller('atributo')
export class AtributoController {
  constructor(private readonly atributoService: AtributoService) {}

  @Post()
  create(@Body() createAtributoDto: CreateAtributoDto) {
    return this.atributoService.create(createAtributoDto);
  }

  @Get()
  findAll() {
    return this.atributoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.atributoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAtributoDto: UpdateAtributoDto) {
    return this.atributoService.update(+id, updateAtributoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.atributoService.remove(+id);
  }
}
