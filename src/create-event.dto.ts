import { IsDateString, IsString } from "class-validator";


export class CreateEventDto {

  @IsString()
  name: string

  @IsString()
  description: string

  @IsDateString()
  when: string

  @IsString()
  address: string
}
