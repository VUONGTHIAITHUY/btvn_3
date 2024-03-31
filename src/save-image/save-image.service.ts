import { Injectable } from '@nestjs/common';
import { ApiResponse } from 'src/api-dto/api-response.model';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SaveImageService {

  constructor(
    private readonly _prismaService: PrismaService,
  ) { }

  findAll() {
    return `This action returns all saveImage`;
  }

  // getByImageId(id: number): Promise<ApiResponse<any>> {
  //   const imageInfo = await this._prismaService.save_image.find
  // }


  remove(id: number) {
    return `This action removes a #${id} saveImage`;
  }
}
