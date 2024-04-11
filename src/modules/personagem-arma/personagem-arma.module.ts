import { Module } from '@nestjs/common';
import { PersonagemArmaService } from './personagem-arma.service';
import { PersonagemArmaController } from './personagem-arma.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonagemArma } from './entities/personagem-arma.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonagemArma])],
  controllers: [PersonagemArmaController],
  providers: [PersonagemArmaService],
  exports: [PersonagemArmaService],
})
export class PersonagemArmaModule {}
