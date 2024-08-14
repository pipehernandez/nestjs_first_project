import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'bttq9yajwtwvti2qbtdh-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'uko6nrkcvebvbn5h',
      password: '4dTLS37yOgpkAPR4jfJp',
      database: 'bttq9yajwtwvti2qbtdh',
      // autoLoadEntities: true,
      entities: [User],
      synchronize: true
    })
    ,UsersModule]
})
export class AppModule {}
