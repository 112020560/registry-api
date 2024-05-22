import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MemberDocument = HydratedDocument<Member>;

export class AccountInformation {
  @Prop()
  bank: string;
  @Prop()
  money_target: string;
  @Prop()
  account: string;
}

@Schema()
export class Member {
  @Prop()
  first_name: string;
  @Prop()
  second_name: string;
  @Prop()
  last_name: string;
  @Prop()
  second_last_name: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  create_date: Date;
  @Prop()
  update_date: Date;
  @Prop()
  status: string;
  @Prop()
  account_information: AccountInformation;
}

export const MemberSchema = SchemaFactory.createForClass(Member);
