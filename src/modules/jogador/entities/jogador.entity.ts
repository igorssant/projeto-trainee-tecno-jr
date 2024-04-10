import { Personagem } from 'src/modules/personagem/entities/personagem.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tbl_jogador', orderBy: { id: 'ASC' } })
export class Jogador {
  @PrimaryGeneratedColumn({ name: 'jog_id', type: 'int' })
  id: number;

  @Column({ name: 'jog_nome', type: 'varchar', length: 255, nullable: false })
  nome: string;

  @Column({
    name: 'jog_senha',
    type: 'varchar',
    length: 255,
    nullable: false,
    select: false,
  })
  senha: string;

  @Column({
    name: 'jog_mestre',
    type: 'tinyint',
    nullable: false,
    default: false,
  })
  mestre: boolean;

  @OneToMany(() => Personagem, (personagem) => personagem.jogadorId, {
    onDelete: 'CASCADE',
  })
  personagem: Personagem[];
}
