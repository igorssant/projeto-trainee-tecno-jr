import { PersonagemPoder } from 'src/modules/personagem-poder/entities/personagem-poder.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tbl_poder', orderBy: { id: 'ASC' } })
export class Poder {
  @PrimaryGeneratedColumn({ name: 'pod_id', type: 'int' })
  id: number;

  @Column({ name: 'pod_nome', type: 'varchar', length: 255, nullable: false })
  nome: string;

  @Column({ name: 'pod_custo', type: 'int', nullable: false })
  custo: number;

  @Column({ name: 'pod_efeito', type: 'text', nullable: false })
  efeito: string;

  @Column({ name: 'pod_dano', type: 'varchar', length: 50, nullable: false })
  dano: string;

  @Column({ name: 'pod_area', type: 'varchar', length: 50, nullable: false })
  area: string;

  @Column({ name: 'pod_alvo', type: 'varchar', length: 50, nullable: false })
  alvo: string;

  @Column({
    name: 'pod_duracao',
    type: 'varchar',
    length: 50,
    nullable: false,
    default: 'Instantâneo',
  })
  duracao: string;

  @OneToMany(
    () => PersonagemPoder,
    (personagemPoder) => personagemPoder.poderId,
    { onDelete: 'CASCADE' },
  )
  personagemPoder: PersonagemPoder[];
}
