import { ApiProperty } from "@nestjs/swagger";

export class CreateVisionsectionDto {

    @ApiProperty()
    title: string

    @ApiProperty()
    description: string

    @ApiProperty()
    image?: any


}
