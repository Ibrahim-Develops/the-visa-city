import { Column, DataSource, Entity, FindOptionsSelect, FindOptionsWhere, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userName: string;

    @Column()
    password: string;

    static async existingUser(options: {
        where: FindOptionsWhere<User>,
        select?: (keyof User)[] | FindOptionsSelect<User>,
        relations?: string[]
    }, dataSource: DataSource
    ) {
        const repo = dataSource.getRepository(User);
        const user = await repo.findOne({
            where: options.where,
            select: options.select,
            relations: options.relations,
        });
        return user
    }
}


