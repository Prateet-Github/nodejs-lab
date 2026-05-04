import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './schemas/student.schema';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name)
    private readonly studentModel: Model<Student>,
  ) { }

  // CREATE
  async create(createStudentDto: CreateStudentDto) {
    return this.studentModel.create(createStudentDto);
  }

  // GET ALL
  async findAll() {
    return this.studentModel.find();
  }

  // GET ONE
  async findOne(id: string) {
    const student = await this.studentModel.findById(id);
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    return student;
  }

  // UPDATE
  async update(id: string, updateStudentDto: UpdateStudentDto) {
    const updated = await this.studentModel.findByIdAndUpdate(
      id,
      updateStudentDto,
      { new: true },
    );

    if (!updated) {
      throw new NotFoundException('Student not found');
    }

    return updated;
  }

  // DELETE
  async remove(id: string) {
    const deleted = await this.studentModel.findByIdAndDelete(id);

    if (!deleted) {
      throw new NotFoundException('Student not found');
    }

    return deleted;
  }
}