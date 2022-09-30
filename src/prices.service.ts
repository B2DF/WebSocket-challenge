import { Injectable } from '@nestjs/common'
import { AxiosService } from './axios.service'
import wss from 'src/socket-client'

@Injectable()
export class PricesService {
  constructor(private readonly axios: AxiosService) {}

  async cable(): Promise<void> {
    const ws = wss
    ws.onmessage = async () => {
      const priceOne = await this.axios.cableOne()
      const priceTwo = await this.axios.cableTwo()
      const priceThree = await this.axios.cableThree()
      const priceFour = await this.axios.cableFour()
      const res = `Cable Uno: ${priceOne} Cable Dos: ${priceTwo} Cable tres: ${priceThree} Cable cuatro: ${priceFour}`

      return console.log(res)
    }
  }

  async mep(): Promise<void> {
    const ws = wss
    ws.onmessage = async () => {
      const priceOne = await this.axios.mepOne()
      const priceTwo = await this.axios.mepTwo()
      const priceThree = await this.axios.mepThree()
      const priceFour = await this.axios.mepFour()
      const res = `Mep Uno: ${priceOne} Mep Dos: ${priceTwo} Mep tres: ${priceThree} Mep cuatro: ${priceFour}`
      return console.log(res)
    }
  }
}
