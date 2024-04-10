import { Module } from '@nestjs/common';
import { PersonagemArmaService } from './personagem-arma.service';
import { PersonagemArmaController } from './personagem-arma.controller';

@Module({
  controllers: [PersonagemArmaController],
  providers: [PersonagemArmaService],
})
export class PersonagemArmaModule {}
