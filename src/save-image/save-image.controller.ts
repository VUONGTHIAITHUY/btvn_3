import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaveImageService } from './save-image.service';

@Controller('save-image')
export class SaveImageController {
  constructor(private readonly saveImageService: SaveImageService) {}

 

  @Get()
  findAll() {
    return this.saveImageService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.saveImageService.findOne(+id);
  // }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saveImageService.remove(+id);
  }
}
