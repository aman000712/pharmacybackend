import { ApiProperty } from "@nestjs/swagger";

export class CreateKeyfeatureDto {

    @ApiProperty()
    title:string

    @ApiProperty()
    description:string

    @ApiProperty()
    image?:any




}
