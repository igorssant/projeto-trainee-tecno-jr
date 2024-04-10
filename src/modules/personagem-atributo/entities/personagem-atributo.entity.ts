import { Atributo } from 'src/modules/atributo/entities/atributo.entity';
import { Personagem } from 'src/modules/personagem/entities/personagem.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tbl_personagem_atributo' })
export class PersonagemAtributo {
  @PrimaryGeneratedColumn({ name: 'per_atr_id', type: 'int' })
  id: number;

  @Column({ name: 'per_atr_atr_id', type: 'int', nullable: false })
  atributoId: number;

  @Column({ name: 'per_atr_per_id', type: 'int', nullable: false })
  personagemId: number;

  @ManyToOne(() => Atributo, (atributo) => atributo.personagemAtributo, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'atr_id' })
  atributo: Atributo;

  @ManyToOne(() => Personagem, (personagem) => personagem.personagemAtributo, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'per_id' })
  personagem: Personagem;
}
