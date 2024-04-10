import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JogadorModule } from './modules/jogador/jogador.module';
import { PersonagemModule } from './modules/personagem/personagem.module';
import { AtributoModule } from './modules/atributo/atributo.module';
import { MagiaModule } from './modules/magia/magia.module';
import { ArmaduraModule } from './modules/armadura/armadura.module';
import { ArmaModule } from './modules/arma/arma.module';
import { PoderModule } from './modules/poder/poder.module';
import { EquipamentoModule } from './modules/equipamento/equipamento.module';
import { AuthModule } from './modules/auth/auth.module';
import { PersonagemMagiaModule } from './modules/personagem-magia/personagem-magia.module';
import { PersonagemAtributoModule } from './modules/personagem-atributo/personagem-atributo.module';
import { PersonagemPoderModule } from './modules/personagem-poder/personagem-poder.module';
import { PersonagemEquipamentoModule } from './modules/personagem-equipamento/personagem-equipamento.module';
import { PersonagemArmaduraModule } from './modules/personagem-armadura/personagem-armadura.module';
import { PersonagemArmaModule } from './modules/personagem-arma/personagem-arma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    JogadorModule,
    PersonagemModule,
    AtributoModule,
    MagiaModule,
    ArmaduraModule,
    ArmaModule,
    PoderModule,
    EquipamentoModule,
    AuthModule,
    PersonagemMagiaModule,
    PersonagemAtributoModule,
    PersonagemPoderModule,
    PersonagemEquipamentoModule,
    PersonagemArmaduraModule,
    PersonagemArmaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
