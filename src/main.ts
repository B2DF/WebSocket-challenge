import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { WsAdapter } from '@nestjs/platform-ws' //Add this line
import { join } from 'path'
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.useWebSocketAdapter(new WsAdapter(app)) // Add this line
  await app.listen(3000)
}
bootstrap()
