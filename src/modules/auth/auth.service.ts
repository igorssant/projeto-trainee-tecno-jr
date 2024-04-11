import { JogadorService } from './../jogador/jogador.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly jogadorService: JogadorService,
  ) {}

  async login(loginDto: LoginDto) {
    const jogador = await this.jogadorService.findByNome(loginDto.nome);

    if (jogador) {
      if (await bcrypt.compare(loginDto.senha, jogador.senha)) {
        const payload = { usuario: jogador.nome, sub: jogador.id };

        return { accessToken: await this.jwtService.signAsync(payload) };
      } else {
        throw new UnauthorizedException('Nome de Usuário ou senha inválidos.');
      }
    }

    throw new UnauthorizedException('Nome de Usuário ou senha inválidos.');
  }
}
