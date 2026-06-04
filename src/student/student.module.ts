import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsService } from './student.service';
import { Student } from '../model/student.entity';
import { StudentController } from './student.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
  ],
  controllers: [StudentController],
  providers: [StudentsService],
})
export class StudentModule {}
