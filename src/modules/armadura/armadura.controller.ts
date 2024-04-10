import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArmaduraService } from './armadura.service';
import { CreateArmaduraDto } from './dto/create-armadura.dto';
import { UpdateArmaduraDto } from './dto/update-armadura.dto';

@Controller('api')
export class ArmaduraController {
  constructor(private readonly armaduraService: ArmaduraService) {}

  @Post('armadura')
  async create(@Body() createArmaduraDto: CreateArmaduraDto) {
    return await this.armaduraService.create(createArmaduraDto);
  }

  @Get('armaduras')
  async findAll() {
    return await this.armaduraService.findAll();
  }

  @Get('armadura/:id')
  async findOne(@Param('id') id: string) {
    return await this.armaduraService.findOne(+id);
  }

  @Patch('armadura/:id')
  async update(
    @Param('id') id: string,
    @Body() updateArmaduraDto: UpdateArmaduraDto,
  ) {
    return await this.armaduraService.update(+id, updateArmaduraDto);
  }

  @Delete('armadura/:id')
  async remove(@Param('id') id: string) {
    return await this.armaduraService.remove(+id);
  }
}
