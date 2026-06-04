import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentsService } from './student.service';
import { Student } from '../model/student.entity';
import { StudentCreateDTO } from './student.api';

@Controller()
export class StudentController {
  constructor(private readonly studentService: StudentsService) {}

  @Get('/students')
  getStudent(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Post('/students')
  addStudent(@Body() student: StudentCreateDTO): Promise<Student> {
    return this.studentService.create(student);
  }
}
