import { ApiProperty } from "@nestjs/swagger";

export class CreateTailoredDto {

    @ApiProperty()
    title:string

    @ApiProperty()
    description:string

    @ApiProperty()
    image?:any



}
