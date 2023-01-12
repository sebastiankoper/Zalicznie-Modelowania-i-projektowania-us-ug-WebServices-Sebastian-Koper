import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './modules/app.module';

const PORT = process.env.PORT || 1000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });

  const config = new DocumentBuilder()
    .setTitle('Mecz Aplikacja')
    .setBasePath('http://localhost:1000/match')
    .setDescription('Mecz Aplikacja opis')
    .setVersion('1.0')
    .addTag('mecz')
    .addServer('http://localhost:1000')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(PORT, async () => console.log('Dziala na portcie' + PORT));
}

bootstrap();
