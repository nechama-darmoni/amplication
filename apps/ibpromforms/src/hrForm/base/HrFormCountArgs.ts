/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HrFormWhereInput } from "./HrFormWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class HrFormCountArgs {
  @ApiProperty({
    required: false,
    type: () => HrFormWhereInput,
  })
  @Field(() => HrFormWhereInput, { nullable: true })
  @Type(() => HrFormWhereInput)
  where?: HrFormWhereInput;
}

export { HrFormCountArgs as HrFormCountArgs };
