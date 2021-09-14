import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { MoleculerService } from './services/moleculer.service';
import { MoleculerModule } from 'nestjs-moleculer';

@Module({
  imports: [
    MoleculerModule.forRoot({
      transporter: "NATS",
  })
  ],
  controllers: [AppController],
  providers: [AppService, MoleculerService],
})
export class AppModule {}
