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
import { AtributoService } from './atributo.service';
import { CreateAtributoDto } from './dto/create-atributo.dto';
import { UpdateAtributoDto } from './dto/update-atributo.dto';
import { AuthGuard } from 'src/common/guard/auth.guard';

@Controller('api')
@UseGuards(AuthGuard)
export class AtributoController {
  constructor(private readonly atributoService: AtributoService) {}

  @Post('atributo')
  async create(@Body() createAtributoDto: CreateAtributoDto) {
    return await this.atributoService.create(createAtributoDto);
  }

  @Get('atributos')
  async findAll() {
    return await this.atributoService.findAll();
  }

  @Get('atributo/:id')
  async findOne(@Param('id') id: string) {
    return await this.atributoService.findOne(+id);
  }

  @Patch('atributo/:id')
  async update(
    @Param('id') id: string,
    @Body() updateAtributoDto: UpdateAtributoDto,
  ) {
    return await this.atributoService.update(+id, updateAtributoDto);
  }

  @Delete('atributo/:id')
  async remove(@Param('id') id: string) {
    return await this.atributoService.remove(+id);
  }
}
