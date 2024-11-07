import { Injectable } from '@nestjs/common';
import { CreateImageInput } from './dto/create-image.input';
import { UpdateImageInput } from './dto/update-image.input';
import { taylorSwiftImages } from './taylor';

@Injectable()
export class ImagesService {
  create(createImageInput: CreateImageInput) {
    return 'This action adds a new image';
  }

  findAll() {
    return taylorSwiftImages;
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageInput: UpdateImageInput) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
