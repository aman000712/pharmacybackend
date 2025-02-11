import { ApiProperty } from "@nestjs/swagger";

export class CreateConnectDto {

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    image?: any;


}
