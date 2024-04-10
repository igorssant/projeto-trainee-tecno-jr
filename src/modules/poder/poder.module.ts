import { Module } from '@nestjs/common';
import { PoderService } from './poder.service';
import { PoderController } from './poder.controller';

@Module({
  controllers: [PoderController],
  providers: [PoderService],
})
export class PoderModule {}
