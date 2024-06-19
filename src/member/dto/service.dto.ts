import { ApiProperty } from "@nestjs/swagger";

export class ServiceDto {
    @ApiProperty()
    member_id: string;
    @ApiProperty()
    service_id: string;
}