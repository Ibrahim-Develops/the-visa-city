import { Column, DataSource, Entity, FindOptionsSelect, FindOptionsWhere, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Blog {
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      title: string;

      @Column()
      description: string;

      @Column()
      image: string


      static async existingBlog(
            options: {
                  where: FindOptionsWhere<Blog>,
                  select?: (keyof Blog)[] | FindOptionsSelect<Blog>,
                  relations?: string[];
            },
            dataSource: DataSource
      ) {
            const repo = dataSource.getRepository(Blog);
            const blog = await repo.findOne({
                  where: options.where,
                  select: options.select,
                  relations: options.relations,
            });
            return blog;
      }
}
