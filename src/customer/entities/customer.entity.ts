import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Customer>;

export class Tag {
  @Prop()
  key: string;
  @Prop()
  value: string;
}

export class MethodOfPayment {
  @Prop()
  method: string;
  @Prop()
  is_default: boolean;
  @Prop()
  value: string;
  @Prop()
  status: string;
  @Prop()
  tags: Array<Tag>;
}

@Schema()
export class Customer {
  @Prop()
  first_name: string;
  @Prop()
  second_name: string;
  @Prop()
  last_name: string;
  @Prop()
  second_last_name: string;
  @Prop()
  identification_number: string;
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
  method_of_payments: Array<MethodOfPayment>;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
