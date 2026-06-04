import { Controller, Get } from '@nestjs/common';
import { StudentsService } from './student.service';
import { Student } from '../model/student.entity';

@Controller()
export class StudentController {
  constructor(
    private readonly studentService: StudentsService,
  ) {}

  @Get('/students')
  getStudent(): Promise<Student[]> {
    return this.studentService.findAll();
  }
}
