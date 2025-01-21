import { Module } from "@nestjs/common";
import { HrFormModuleBase } from "./base/hrForm.module.base";
import { HrFormService } from "./hrForm.service";
import { HrFormController } from "./hrForm.controller";

@Module({
  imports: [HrFormModuleBase],
  controllers: [HrFormController],
  providers: [HrFormService],
  exports: [HrFormService],
})
export class HrFormModule {}
