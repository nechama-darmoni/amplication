import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HrFormService } from "./hrForm.service";
import { HrFormControllerBase } from "./base/hrForm.controller.base";

@swagger.ApiTags("hrForms")
@common.Controller("hrForms")
export class HrFormController extends HrFormControllerBase {
  constructor(protected readonly service: HrFormService) {
    super(service);
  }
}
