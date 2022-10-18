import 'reflect-metadata'
import app from './app'
import { AppDataSource } from './db'

const main = async () => {
    try {
        await AppDataSource.initialize();
        console.log('db ok');
        app.listen(3000);
        console.log('server running on port', 3000);
    } catch (error) {
        console.log(error);

    }
}

main()