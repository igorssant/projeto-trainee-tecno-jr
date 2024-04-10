import { Module } from '@nestjs/common';
import { PersonagemEquipamentoService } from './personagem-equipamento.service';
import { PersonagemEquipamentoController } from './personagem-equipamento.controller';

@Module({
  controllers: [PersonagemEquipamentoController],
  providers: [PersonagemEquipamentoService],
})
export class PersonagemEquipamentoModule {}
