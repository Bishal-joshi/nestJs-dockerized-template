import { DataSource } from 'typeorm';
import { User } from '../entities/user/user.entity'; // Adjust the path as needed
import { join } from 'path';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'db',
  port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'mydatabase',
  entities: [User],
  synchronize: false, // if true then Automatically create database schema, synchronize with code in table so change to false in production
  logging: true,
  migrations: [join(__dirname, '../migrations/**/*{.ts,.js}')], // if development it will take migrations file from src/migations else dist/migrations
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
