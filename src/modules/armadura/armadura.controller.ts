import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArmaduraService } from './armadura.service';
import { CreateArmaduraDto } from './dto/create-armadura.dto';
import { UpdateArmaduraDto } from './dto/update-armadura.dto';

@Controller('armadura')
export class ArmaduraController {
  constructor(private readonly armaduraService: ArmaduraService) {}

  @Post()
  create(@Body() createArmaduraDto: CreateArmaduraDto) {
    return this.armaduraService.create(createArmaduraDto);
  }

  @Get()
  findAll() {
    return this.armaduraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.armaduraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArmaduraDto: UpdateArmaduraDto) {
    return this.armaduraService.update(+id, updateArmaduraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.armaduraService.remove(+id);
  }
}
