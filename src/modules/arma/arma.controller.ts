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
import { ArmaService } from './arma.service';
import { CreateArmaDto } from './dto/create-arma.dto';
import { UpdateArmaDto } from './dto/update-arma.dto';
import { AuthGuard } from 'src/common/guard/auth.guard';

@Controller('api')
@UseGuards(AuthGuard)
export class ArmaController {
  constructor(private readonly armaService: ArmaService) {}

  @Post('arma')
  async create(@Body() createArmaDto: CreateArmaDto) {
    return await this.armaService.create(createArmaDto);
  }

  @Get('armas')
  async findAll() {
    return await this.armaService.findAll();
  }

  @Get('arma/:id')
  async findOne(@Param('id') id: string) {
    return await this.armaService.findOne(+id);
  }

  @Patch('arma/:id')
  async update(@Param('id') id: string, @Body() updateArmaDto: UpdateArmaDto) {
    return await this.armaService.update(+id, updateArmaDto);
  }

  @Delete('arma/:id')
  async remove(@Param('id') id: string) {
    return await this.armaService.remove(+id);
  }
}
