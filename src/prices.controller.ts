import { Controller, Get } from '@nestjs/common'
import { PricesService } from './prices.service'

@Controller('prices')
export class PricesController {
  constructor(private readonly pricesService: PricesService) {}

  @Get('/cable')
  async cablePrice(): Promise<void> {
    return this.pricesService.cable()
  }

  @Get('/mep')
  mepPrice(): Promise<void> {
    return this.pricesService.mep()
  }
}
