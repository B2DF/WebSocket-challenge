import { Logger } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'

export class AxiosService {
  private readonly logger: Logger = new Logger(AxiosService.name)
  private readonly axios: AxiosInstance

  constructor() {
    this.axios = axios.create({
      baseURL:
        'https://test-algobalanz.herokuapp.com/api/v1/prices/security_id/',
    })
  }

  async cableOne(): Promise<number> {
    const one = await this.axios.get<Prices>('AL30-0001-C-CT-ARS')
    const two = await this.axios.get<Prices>('AL30C-0001-C-CT-EXT')
    const res = this.price(
      one.data.response.last.price,
      two.data.response.last.price
    )
    return res
  }

  async cableTwo(): Promise<number> {
    const one = await this.axios.get<Prices>('AL30-0003-C-CT-ARS')
    const two = await this.axios.get<Prices>('AL30C-0003-C-CT-EXT')
    const res = this.price(
      one.data.response.last.price,
      two.data.response.last.price
    )
    return res
  }

  async cableThree(): Promise<number> {
    const one = await this.axios.get<Prices>('GD30-0001-C-CT-ARS')
    const two = await this.axios.get<Prices>('GD30C-0001-C-CT-EXT')
    const res = this.price(
      one.data.response.last.price,
      two.data.response.last.price
    )
    return res
  }

  async cableFour(): Promise<number> {
    const one = await this.axios.get<Prices>('GD30-0003-C-CT-ARS')
    const two = await this.axios.get<Prices>('GD30C-0003-C-CT-EXT')
    const res = this.price(
      one.data.response.last.price,
      two.data.response.last.price
    )
    return res
  }

  async mepOne(): Promise<number> {
    const one = await this.axios.get<Prices>('AL30-0001-C-CT-ARS')
    const two = await this.axios.get<Prices>('AL30D-0001-C-CT-USD')
    const res = this.price(
      one.data.response.last.price,
      two.data.response.last.price
    )
    return res
  }

  async mepTwo(): Promise<number> {
    const one = await this.axios.get<Prices>('AL30-0003-C-CT-ARS')
    const two = await this.axios.get<Prices>('AL30D-0003-C-CT-USD')
    const res = this.price(
      one.data.response.last.price,
      two.data.response.last.price
    )
    return res
  }

  async mepThree(): Promise<number> {
    const one = await this.axios.get<Prices>('GD30-0001-C-CT-ARS')
    const two = await this.axios.get<Prices>('GD30D-0001-C-CT-USD')
    const res = this.price(
      one.data.response.last.price,
      two.data.response.last.price
    )
    return res
  }

  async mepFour(): Promise<number> {
    const one = await this.axios.get<Prices>('GD30-0003-C-CT-ARS')
    const two = await this.axios.get<Prices>('GD30D-0003-C-CT-USD')
    const res = this.price(
      one.data.response.last.price,
      two.data.response.last.price
    )
    return res
  }

  price(quoteOne: number, quoteTwo: number): number {
    return quoteOne / quoteTwo
  }
}

type Prices = {
  response: {
    securityID: string
    mdReqID: string
    currency: string
    symbol: string
    Bid: number[]
    BidSize: number[]
    Offer: number[]
    OfferSize: number[]
    last: {
      price: number
      size: number
      time: string
    }
    underlying: null
    tradeVolume: {
      price: number
      size: number
      time: string
    }
    settlementType: string
  }
}
