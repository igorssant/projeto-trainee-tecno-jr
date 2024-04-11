import { Module } from '@nestjs/common';
import { ArmaService } from './arma.service';
import { ArmaController } from './arma.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Arma } from './entities/arma.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Arma])],
  controllers: [ArmaController],
  providers: [ArmaService],
  exports: [ArmaService],
})
export class ArmaModule {}
