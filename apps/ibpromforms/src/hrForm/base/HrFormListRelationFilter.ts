/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HrFormWhereInput } from "./HrFormWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class HrFormListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => HrFormWhereInput,
  })
  @ValidateNested()
  @Type(() => HrFormWhereInput)
  @IsOptional()
  @Field(() => HrFormWhereInput, {
    nullable: true,
  })
  every?: HrFormWhereInput;

  @ApiProperty({
    required: false,
    type: () => HrFormWhereInput,
  })
  @ValidateNested()
  @Type(() => HrFormWhereInput)
  @IsOptional()
  @Field(() => HrFormWhereInput, {
    nullable: true,
  })
  some?: HrFormWhereInput;

  @ApiProperty({
    required: false,
    type: () => HrFormWhereInput,
  })
  @ValidateNested()
  @Type(() => HrFormWhereInput)
  @IsOptional()
  @Field(() => HrFormWhereInput, {
    nullable: true,
  })
  none?: HrFormWhereInput;
}
export { HrFormListRelationFilter as HrFormListRelationFilter };
