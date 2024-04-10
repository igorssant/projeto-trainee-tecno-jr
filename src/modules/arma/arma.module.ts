import { Module } from '@nestjs/common';
import { ArmaService } from './arma.service';
import { ArmaController } from './arma.controller';

@Module({
  controllers: [ArmaController],
  providers: [ArmaService],
})
export class ArmaModule {}
