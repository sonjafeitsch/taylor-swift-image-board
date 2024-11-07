import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateImageInput {
  @Field(() => String)
  url: string;

  @Field(() => String, { nullable: true })
  description?: string;
}
