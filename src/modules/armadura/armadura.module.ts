import { Module } from '@nestjs/common';
import { ArmaduraService } from './armadura.service';
import { ArmaduraController } from './armadura.controller';

@Module({
  controllers: [ArmaduraController],
  providers: [ArmaduraService],
})
export class ArmaduraModule {}
