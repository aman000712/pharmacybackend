import { ApiProperty } from "@nestjs/swagger";

export class CreateProgressbarDto {

    @ApiProperty()
    Number: number

    @ApiProperty()
    label: string


}
