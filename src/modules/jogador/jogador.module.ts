import { Module } from '@nestjs/common';
import { JogadorService } from './jogador.service';
import { JogadorController } from './jogador.controller';

@Module({
  controllers: [JogadorController],
  providers: [JogadorService],
})
export class JogadorModule {}
