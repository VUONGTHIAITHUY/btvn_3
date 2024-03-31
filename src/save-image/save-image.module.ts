import { Module } from '@nestjs/common';
import { SaveImageService } from './save-image.service';
import { SaveImageController } from './save-image.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SaveImageController],
  providers: [SaveImageService,PrismaService]
})
export class SaveImageModule {}
