import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from './modules/users/users.module';

import nestConfig from "./config/config";
import typeOrmConfig from "./config/typeOrm";

@Module({
  imports: [
    ConfigModule.forRoot(nestConfig),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    UsersModule,
  ],
  providers: [],
})
export class AppModule {}
