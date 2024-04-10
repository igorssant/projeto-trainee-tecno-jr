import { Arma } from 'src/modules/arma/entities/arma.entity';
import { Personagem } from 'src/modules/personagem/entities/personagem.entity';
import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tbl_personagem_arma', orderBy: { id: 'ASC' } })
export class PersonagemArma {
  @PrimaryGeneratedColumn({ name: 'per_arm_id', type: 'int' })
  id: number;

  @PrimaryColumn({ name: 'arma_id', nullable: false })
  armaId: number;

  @PrimaryColumn({ name: 'per_id', nullable: false })
  personagemId: number;

  @ManyToOne(() => Arma, (arma) => arma.personagemArma, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'arma_id' })
  arma: Arma;

  @ManyToOne(() => Personagem, (personagem) => personagem.personagemArma, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'per_id' })
  personagem: Personagem;
}
