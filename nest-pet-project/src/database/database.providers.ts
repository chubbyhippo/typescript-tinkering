import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'admin',
        password: 'admin',
        database: 'mydatabase',
        entities: [__dirname + '../**/*.entity{.ts,.js}'],
        synchronize: true, // Set to false in production
      });

      return dataSource.initialize();
    },
  },
];
