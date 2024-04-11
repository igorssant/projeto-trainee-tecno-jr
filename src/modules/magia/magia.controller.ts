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
import { MagiaService } from './magia.service';
import { CreateMagiaDto } from './dto/create-magia.dto';
import { UpdateMagiaDto } from './dto/update-magia.dto';
import { AuthGuard } from 'src/common/guard/auth.guard';

@Controller('api')
@UseGuards(AuthGuard)
export class MagiaController {
  constructor(private readonly magiaService: MagiaService) {}

  @Post('magia')
  async create(@Body() createMagiaDto: CreateMagiaDto) {
    return await this.magiaService.create(createMagiaDto);
  }

  @Get('magias')
  async findAll() {
    return await this.magiaService.findAll();
  }

  @Get('magia/:id')
  async findOne(@Param('id') id: string) {
    return await this.magiaService.findOne(+id);
  }

  @Patch('magia/:id')
  async update(
    @Param('id') id: string,
    @Body() updateMagiaDto: UpdateMagiaDto,
  ) {
    return await this.magiaService.update(+id, updateMagiaDto);
  }

  @Delete('magia/:id')
  async remove(@Param('id') id: string) {
    return await this.magiaService.remove(+id);
  }
}
