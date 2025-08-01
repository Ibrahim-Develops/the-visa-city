import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: number;

  @Column()
  subject: string;

  @Column()
  message: string;
}