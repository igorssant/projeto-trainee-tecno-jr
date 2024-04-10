import { Arma } from 'src/modules/arma/entities/arma.entity';
import { Personagem } from 'src/modules/personagem/entities/personagem.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tbl_personagem_arma', orderBy: { id: 'ASC' } })
export class PersonagemArma {
  @PrimaryGeneratedColumn({ name: 'per_arma_id', type: 'int' })
  id: number;

  @Column({ name: 'per_arma_arma_id', type: 'int', nullable: false })
  armaId: number;

  @Column({ name: 'per_arma_per_id', type: 'int', nullable: false })
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
