import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PoderService } from './poder.service';
import { CreatePoderDto } from './dto/create-poder.dto';
import { UpdatePoderDto } from './dto/update-poder.dto';

@Controller('poder')
export class PoderController {
  constructor(private readonly poderService: PoderService) {}

  @Post()
  create(@Body() createPoderDto: CreatePoderDto) {
    return this.poderService.create(createPoderDto);
  }

  @Get()
  findAll() {
    return this.poderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.poderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePoderDto: UpdatePoderDto) {
    return this.poderService.update(+id, updatePoderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.poderService.remove(+id);
  }
}
