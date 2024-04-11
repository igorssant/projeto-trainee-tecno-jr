import { Module } from '@nestjs/common';
import { PersonagemEquipamentoService } from './personagem-equipamento.service';
import { PersonagemEquipamentoController } from './personagem-equipamento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonagemEquipamento } from './entities/personagem-equipamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonagemEquipamento])],
  controllers: [PersonagemEquipamentoController],
  providers: [PersonagemEquipamentoService],
  exports: [PersonagemEquipamentoService],
})
export class PersonagemEquipamentoModule {}
