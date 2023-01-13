import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateEventDto } from "./create-event.dto";
import { UpdateEventDto } from "./update-event.dto";


@Controller('events')
export class EventsController {

  @Get()
  findAll(){}

  @Get(':id')
  findOne(@Param('id') id: string){}

  @Post()
  create(@Body() input: CreateEventDto){}

  @Patch(':id')
  update(@Param('id') id: string, @Body() input: UpdateEventDto){}

  @Delete(':id')
  remove(@Param('id') id:string){}
}
