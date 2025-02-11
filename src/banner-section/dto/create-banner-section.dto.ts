import { ApiProperty } from "@nestjs/swagger";

export class CreateBannerSectionDto {

    @ApiProperty()
    title:string

    @ApiProperty()
    description:string


}
