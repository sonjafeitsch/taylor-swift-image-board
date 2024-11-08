import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Subscription,
} from '@nestjs/graphql';
import { ImagesService } from './images.service';
import { Image } from './entities/image.entity';
import { CreateImageInput } from './dto/create-image.input';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver(() => Image)
export class ImagesResolver {
  constructor(private readonly imagesService: ImagesService) {}

  @Mutation(() => Image)
  createImage(@Args('createImageInput') createImageInput: CreateImageInput) {
    const newImage = this.imagesService.create(createImageInput);
    pubSub.publish('imageAdded', { imageAdded: newImage });
    return newImage;
  }

  @Query(() => [Image], { name: 'images' })
  findAll() {
    return this.imagesService.findAll();
  }

  @Mutation(() => Image)
  removeImage(@Args('id', { type: () => Int }) id: number) {
    return this.imagesService.remove(id);
  }

  @Subscription(() => Image)
  imageAdded() {
    return pubSub.asyncIterator('imageAdded');
  }
}
