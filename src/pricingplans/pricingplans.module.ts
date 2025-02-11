import { Module } from '@nestjs/common';
import { PricingplansService } from './pricingplans.service';
import { PricingplansController } from './pricingplans.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pricingplan } from './entities/pricingplan.entity';

@Module({


  imports: [
    TypeOrmModule.forFeature([
      Pricingplan
    ])
  ],
  controllers: [PricingplansController],
  providers: [PricingplansService],
})
export class PricingplansModule { }
