import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, FindOptionsWhere, DataSource, FindOptionsSelect } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column('simple-array', { nullable: true })
  category: string[] | string;

  @Column('simple-array', { nullable: true })
  region: string[] | string;

  @Column()
  mainImage: string;

  @Column({ nullable: true })
  extraImg1: string;

  @Column({ nullable: true })
  extraImg2: string;

  @Column()
  flag: string;


  static async existingUCountry(options: {
    where: FindOptionsWhere<Country>,
    select?: (keyof Country)[] | FindOptionsSelect<Country>,
    relations?: string[]
  }, dataSource: DataSource
  ) {
    const repo = dataSource.getRepository(Country);
    const country = await repo.findOne({
      where: options.where,
      select: options.select,
      relations: options.relations,
    });
    return country
  }
}
