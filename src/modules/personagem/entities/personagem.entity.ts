import { Jogador } from 'src/modules/jogador/entities/jogador.entity';
import { PersonagemArma } from 'src/modules/personagem-arma/entities/personagem-arma.entity';
import { PersonagemArmadura } from 'src/modules/personagem-armadura/entities/personagem-armadura.entity';
import { PersonagemAtributo } from 'src/modules/personagem-atributo/entities/personagem-atributo.entity';
import { PersonagemEquipamento } from 'src/modules/personagem-equipamento/entities/personagem-equipamento.entity';
import { PersonagemMagia } from 'src/modules/personagem-magia/entities/personagem-magia.entity';
import { PersonagemPoder } from 'src/modules/personagem-poder/entities/personagem-poder.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tbl_personagem', orderBy: { id: 'ASC' } })
export class Personagem {
  @PrimaryGeneratedColumn({ name: 'per_id', type: 'int' })
  id: number;

  @Column({ name: 'per_nome', type: 'varchar', length: 255, nullable: false })
  nome: string;

  @Column({ name: 'per_raca', type: 'varchar', length: 50, nullable: false })
  raca: string;

  @Column({ name: 'per_classe', type: 'varchar', length: 50, nullable: false })
  classe: string;

  @Column({ name: 'per_origem', type: 'varchar', length: 50, nullable: false })
  origem: string;

  @Column({ name: 'per_deus', type: 'varchar', length: 50, nullable: true })
  deus: string;

  @Column({ name: 'per_pv', type: 'int', nullable: false })
  pontosDeVida: number;

  @Column({ name: 'per_pm', type: 'int', nullable: false })
  pontosDeMana: number;

  @Column({ name: 'per_jog_id', type: 'int', nullable: false })
  jogadorId: number;

  @ManyToOne(() => Jogador, (jogador) => jogador.personagem, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'per_jog_id' })
  Jogador: Jogador;

  @OneToMany(
    () => PersonagemArma,
    (personagemArma) => personagemArma.personagemId,
    { onDelete: 'CASCADE' },
  )
  personagemArma: PersonagemArma[];

  @OneToMany(
    () => PersonagemArmadura,
    (personagemArmadura) => personagemArmadura.personagemId,
    { onDelete: 'CASCADE' },
  )
  personagemArmadura: PersonagemArmadura[];

  @OneToMany(
    () => PersonagemAtributo,
    (personagemAtributo) => personagemAtributo.personagemId,
    { onDelete: 'CASCADE' },
  )
  personagemAtributo: PersonagemAtributo[];

  @OneToMany(
    () => PersonagemEquipamento,
    (personagemEquipamento) => personagemEquipamento.personagemId,
    { onDelete: 'CASCADE' },
  )
  personagemEquipamento: PersonagemEquipamento[];

  @OneToMany(
    () => PersonagemMagia,
    (personagemMagia) => personagemMagia.personagemId,
    { onDelete: 'CASCADE' },
  )
  personagemMagia: PersonagemMagia[];

  @OneToMany(
    () => PersonagemPoder,
    (personagemPoder) => personagemPoder.personagemId,
    { onDelete: 'CASCADE' },
  )
  personagemPoder: PersonagemPoder[];
}
