import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-prisma-crud';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EmployeeService extends PrismaCrudService {
  constructor(private prismaService: PrismaService) {
    super({
      model: 'employee',
      allowedJoins: [],
      defaultJoins: [],
    });
  }
}
