import { PersonagemMagia } from 'src/modules/personagem-magia/entities/personagem-magia.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tbl_magia', orderBy: { id: 'ASC' } })
export class Magia {
  @PrimaryGeneratedColumn({ name: 'mag_id', type: 'int' })
  id: number;

  @Column({ name: 'mag_nome', type: 'varchar', length: 255, nullable: false })
  nome: string;

  @Column({ name: 'mag_custo', type: 'int', nullable: false })
  custo: number;

  @Column({ name: 'mag_efeito', type: 'text', nullable: false })
  efeito: string;

  @Column({ name: 'mag_dano', type: 'varchar', length: 50, nullable: false })
  dano: string;

  @Column({ name: 'mag_area', type: 'varchar', length: 50, nullable: false })
  area: string;

  @Column({ name: 'mag_alvo', type: 'varchar', length: 50, nullable: false })
  alvo: string;

  @Column({
    name: 'mag_duracao',
    type: 'varchar',
    length: 50,
    nullable: false,
    default: 'Instantaneo',
  })
  duracao: string;

  @OneToMany(
    () => PersonagemMagia,
    (personagemMagia) => personagemMagia.magiaId,
    { onDelete: 'CASCADE' },
  )
  personagemMagia: PersonagemMagia[];
}
