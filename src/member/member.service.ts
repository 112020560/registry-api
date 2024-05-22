import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MemberService {
  constructor(@InjectModel(Member.name) private MemberModel: Model<Member>) {}

  create(createMemberDto: CreateMemberDto): Promise<Member> {
    const createMember = new this.MemberModel(createMemberDto);
    return createMember.save();
    //return 'This action adds a new member';
  }

  async findAll(): Promise<Member[]> {
    return await this.MemberModel.find();
  }

  async findOne(id: string) {
    return await this.MemberModel.findById(id);
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return this.MemberModel.updateOne({
      where: {
        _id: id,
      },
      updateMemberDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}
