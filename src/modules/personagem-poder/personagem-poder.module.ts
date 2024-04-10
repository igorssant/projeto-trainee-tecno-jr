import { Module } from '@nestjs/common';
import { PersonagemPoderService } from './personagem-poder.service';
import { PersonagemPoderController } from './personagem-poder.controller';

@Module({
  controllers: [PersonagemPoderController],
  providers: [PersonagemPoderService],
})
export class PersonagemPoderModule {}
