import { ApiProperty } from '@nestjs/swagger';
import { BankAccountDto } from './common.dto';

export class CreateMemberDto {
  @ApiProperty()
  first_name: string;
  @ApiProperty()
  second_name: string;
  @ApiProperty()
  last_name: string;
  @ApiProperty()
  second_last_name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  birth_date: Date;
  @ApiProperty()
  image_path: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  create_date: Date;
  @ApiProperty()
  update_date: Date;
  @ApiProperty()
  status: string;
  @ApiProperty({ type: () => BankAccountDto })
  account_information: BankAccountDto;
}
