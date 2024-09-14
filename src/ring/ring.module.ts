import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RingService } from './ring.service';
import { RingController } from './ring.controller';

import { RingSchema } from './models/schema/ring.schema';
import { RingRepository } from './repository/ring.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Ring', schema: RingSchema }])],
  controllers: [RingController],
  providers: [RingService, RingRepository],
})
export class RingModule {
  static MongooseModule: any;
}
