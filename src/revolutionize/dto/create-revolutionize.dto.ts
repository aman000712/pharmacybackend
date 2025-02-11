import { ApiProperty } from "@nestjs/swagger";

export class CreateRevolutionizeDto {

    @ApiProperty()
    title:string

    @ApiProperty()
    description:string

    @ApiProperty()
    image?:any




}
