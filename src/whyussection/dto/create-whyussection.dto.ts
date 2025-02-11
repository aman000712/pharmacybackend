import { ApiProperty } from "@nestjs/swagger";

export class CreateWhyussectionDto {

    @ApiProperty()
    title: string;

    
    @ApiProperty()
    description: string;
    
    
    @ApiProperty()
    image?: any


}
