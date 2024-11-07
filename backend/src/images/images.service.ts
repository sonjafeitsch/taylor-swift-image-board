import { Injectable } from '@nestjs/common';
import { CreateImageInput } from './dto/create-image.input';
import { taylorSwiftImages } from './taylor';
import { Image } from './entities/image.entity';

@Injectable()
export class ImagesService {
  private taylorSwiftImages = [];
  constructor() {
    this.taylorSwiftImages = taylorSwiftImages;
  }

  create(createImageInput: CreateImageInput): Image {
    const newImage = {
      id: this.taylorSwiftImages.length + 1,
      description: 'foo',
      ...createImageInput,
    };
    console.log(newImage);
    const newImages = [...this.taylorSwiftImages, newImage];
    console.log(newImages);
    this.taylorSwiftImages = newImages;
    return newImage;
  }

  findAll() {
    return this.taylorSwiftImages;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
