import { Module } from '@nestjs/common'
import { AxiosService } from './axios.service'
import { PricesController } from './prices.controller'
import { PricesService } from './prices.service'

@Module({
  imports: [],
  controllers: [PricesController],
  providers: [PricesService, AxiosService],
})
export class AppModule {}
