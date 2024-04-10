import { Equipamento } from 'src/modules/equipamento/entities/equipamento.entity';
import { Personagem } from 'src/modules/personagem/entities/personagem.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tbl_personagem_equipamento' })
export class PersonagemEquipamento {
  @PrimaryColumn()
  equipamentoId: number;

  @PrimaryColumn()
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
