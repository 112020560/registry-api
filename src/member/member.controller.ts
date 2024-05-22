import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
} from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('MemberController')
@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Version('1')
  @Post()
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.memberService.create(createMemberDto);
  }

  @Version('1')
  @Get()
  findAll() {
    return this.memberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memberService.findOne(id);
  }

  @Version('1')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.memberService.update(+id, updateMemberDto);
  }

  @Version('1')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memberService.remove(+id);
  }
}
