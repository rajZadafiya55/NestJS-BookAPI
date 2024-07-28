import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsString , IsNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateBookDto extends PartialType(CreateBookDto) {
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
