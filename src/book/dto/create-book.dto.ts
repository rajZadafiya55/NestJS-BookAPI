import { IsString , IsNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateBookDto {

    @ApiProperty()
    @IsString()
    title:string;

    @ApiProperty()
    @IsString()
    author:string;

    @ApiProperty()
    @IsNumber()
    published:number;
}
