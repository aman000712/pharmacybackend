import { ApiProperty } from "@nestjs/swagger";

export class CreatePricingplanDto {

    @ApiProperty()
    planname: string;

    @ApiProperty()
    montlyprice: number;

    @ApiProperty()
    yearlyprice: number;

    @ApiProperty()
    features: string




}
