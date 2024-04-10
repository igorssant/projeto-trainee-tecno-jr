import { PersonagemEquipamento } from 'src/modules/personagem-equipamento/entities/personagem-equipamento.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tbl_equipamento', orderBy: { id: 'ASC' } })
export class Equipamento {
  @PrimaryGeneratedColumn({ name: 'equ_id', type: 'int' })
  id: number;

  @Column({ name: 'equ_nome', type: 'varchar', length: 255, nullable: false })
  nome: string;

  @Column({ name: 'equ_descricao', type: 'text', nullable: false })
  descricao: string;

  @Column({ name: 'equ_preco', type: 'int', nullable: false })
  preco: number;

  @Column({ name: 'equ_peso', type: 'int', nullable: false, default: 1 })
  peso: number;

  @Column({ name: 'equ_quantidade', type: 'int', nullable: false, default: 1 })
  quantidade: number;

  @OneToMany(
    () => PersonagemEquipamento,
    (personagemEquipamento) => personagemEquipamento.equipamentoId,
    { onDelete: 'CASCADE' },
  )
  personagemEquipamento: PersonagemEquipamento[];
}
