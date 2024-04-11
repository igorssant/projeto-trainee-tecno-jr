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
import { PoderService } from './poder.service';
import { CreatePoderDto } from './dto/create-poder.dto';
import { UpdatePoderDto } from './dto/update-poder.dto';
import { AuthGuard } from 'src/common/guard/auth.guard';

@Controller('api')
@UseGuards(AuthGuard)
export class PoderController {
  constructor(private readonly poderService: PoderService) {}

  @Post('poder')
  async create(@Body() createPoderDto: CreatePoderDto) {
    return await this.poderService.create(createPoderDto);
  }

  @Get('poders')
  async findAll() {
    return await this.poderService.findAll();
  }

  @Get('poder/:id')
  async findOne(@Param('id') id: string) {
    return await this.poderService.findOne(+id);
  }

  @Patch('poder/:id')
  async update(
    @Param('id') id: string,
    @Body() updatePoderDto: UpdatePoderDto,
  ) {
    return await this.poderService.update(+id, updatePoderDto);
  }

  @Delete('poder/:id')
  async remove(@Param('id') id: string) {
    return await this.poderService.remove(+id);
  }
}
