import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { MoleculerService } from './services/moleculer.service';
import { MoleculerModule } from 'nestjs-moleculer';

@Module({
  imports: [
    MoleculerModule.forRoot({
      transporter: "nats://nats:4222",
  })
  ],
  controllers: [AppController],
  providers: [AppService, MoleculerService],
})
export class AppModule {}
