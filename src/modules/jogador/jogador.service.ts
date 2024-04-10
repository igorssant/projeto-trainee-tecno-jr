import { Injectable } from '@nestjs/common';
import { CreateJogadorDto } from './dto/create-jogador.dto';
import { UpdateJogadorDto } from './dto/update-jogador.dto';

@Injectable()
export class JogadorService {
  create(createJogadorDto: CreateJogadorDto) {
    return 'This action adds a new jogador';
  }

  findAll() {
    return `This action returns all jogador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jogador`;
  }

  update(id: number, updateJogadorDto: UpdateJogadorDto) {
    return `This action updates a #${id} jogador`;
  }

  remove(id: number) {
    return `This action removes a #${id} jogador`;
  }
}
