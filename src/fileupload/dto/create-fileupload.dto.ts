import { ApiProperty } from "@nestjs/swagger";

export class CreateFileuploadDto {

    @ApiProperty({
        type: 'string',
        format: 'binary'
    })
    image: any


}
