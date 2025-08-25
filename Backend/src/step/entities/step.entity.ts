import { Country } from 'src/country/entities/country.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Step {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'json' })
  steps: { title: string; description: string }[];

  @OneToOne(() => Country, (country) => country.step, { onDelete: 'CASCADE' })
  @JoinColumn()
  country: Country;

}
