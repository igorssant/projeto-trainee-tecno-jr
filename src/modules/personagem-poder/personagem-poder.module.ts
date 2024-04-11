import { Module } from '@nestjs/common';
import { PersonagemPoderService } from './personagem-poder.service';
import { PersonagemPoderController } from './personagem-poder.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonagemPoder } from './entities/personagem-poder.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonagemPoder])],
  controllers: [PersonagemPoderController],
  providers: [PersonagemPoderService],
  exports: [PersonagemPoderService],
})
export class PersonagemPoderModule {}
