import { ApiProperty } from "@nestjs/swagger";

export class CreateTestimonialssectionDto {


    @ApiProperty()
    clientname: string;

    @ApiProperty()
    position: string;

    @ApiProperty()
    testimonial: string;

    @ApiProperty()
    testimonialimage?: any;




}
