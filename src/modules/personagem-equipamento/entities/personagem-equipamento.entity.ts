import { Equipamento } from 'src/modules/equipamento/entities/equipamento.entity';
import { Personagem } from 'src/modules/personagem/entities/personagem.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tbl_personagem_equipamento' })
export class PersonagemEquipamento {
  @PrimaryGeneratedColumn({ name: 'per_equ_id', type: 'int' })
  id: number;

  @Column({ name: 'per_equ_equ_id', type: 'int', nullable: false })
  equipamentoId: number;

  @Column({ name: 'per_equ_per_id', type: 'int', nullable: false })
  personagemId: number;

  @ManyToOne(
    () => Equipamento,
    (equipamento) => equipamento.personagemEquipamento,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'equ_id' })
  equipamento: Equipamento;

  @ManyToOne(() => Personagem, (personagem) => personagem.personagemArmadura, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'per_id' })
  personagem: Personagem;
}
