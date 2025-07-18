import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  mainImage: string;

  @Column({ nullable: true })
  extraImg1: string;

  @Column({ nullable: true })
  extraImg2: string;

  @Column()
  flag: string;
}
