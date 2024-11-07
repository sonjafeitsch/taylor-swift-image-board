import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Image {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  url: string;

  @Field(() => String, { nullable: true })
  description: string;
}
