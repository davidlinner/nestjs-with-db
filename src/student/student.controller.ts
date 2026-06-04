import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { StudentsService } from './student.service';
import { Student } from '../model/student.entity';
import { StudentCreateDTO } from './student.api';
import { DeleteResult } from 'typeorm';

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

  @Delete('/students/:id')
  async deleteStudent(@Param('id') id: number): Promise<void> {
    const result: DeleteResult = await this.studentService.delete(id);
    if (result.affected === 0) {
      throw new Error(`Student with ID ${id} not found`);
    }
  }
}
