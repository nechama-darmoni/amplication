import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HrFormServiceBase } from "./base/hrForm.service.base";

@Injectable()
export class HrFormService extends HrFormServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
