import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "db.jwxilfraagoeyjwkyutz.supabase.co",
    port: 5432,
    username: "postgres",
    password: "Rea01g06$-zinli",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [],
})