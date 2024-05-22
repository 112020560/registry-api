import { ApiProperty } from '@nestjs/swagger';

export class BankAccountDto {
  @ApiProperty()
  bank: string;

  @ApiProperty()
  money_target: string;

  @ApiProperty()
  account: string;
}
