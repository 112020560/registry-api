import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Member, MemberSchema } from './entities/member.entity';
import { Services, ServicesSchema } from './entities/service.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Member.name, schema: MemberSchema }, {name: Services.name, schema: ServicesSchema}]),
  ],
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
