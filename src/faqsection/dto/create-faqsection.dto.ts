import { ApiProperty } from "@nestjs/swagger";

export class CreateFaqsectionDto {

    @ApiProperty()
    title: string

    @ApiProperty()
    description: string
}
