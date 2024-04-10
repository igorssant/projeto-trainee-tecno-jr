import { Module } from '@nestjs/common';
import { MagiaService } from './magia.service';
import { MagiaController } from './magia.controller';

@Module({
  controllers: [MagiaController],
  providers: [MagiaService],
})
export class MagiaModule {}
