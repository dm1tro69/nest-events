import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateEventDto } from "./create-event.dto";
import { UpdateEventDto } from "./update-event.dto";
import { EventEntity } from "./event.entity";


@Controller('events')
export class EventsController {

  private events: EventEntity[] = []

  @Get()
  findAll(){
    return this.events
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    const event = this.events.find((e)=> e.id === parseInt(id))
    return event
  }


  @Post()
  create(@Body() input: CreateEventDto){
     const event = {
       ...input,
       when: new Date(input.when),
       id: this.events.length + 1
     }
     this.events.push(event)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() input: UpdateEventDto){
   const index = this.events.findIndex((event)=> event.id === +id)
   this.events[index] = {
      ...this.events[index],
      ...input,
      when: input.when? new Date(input.when): this.events[index].when
    }
    return this.events[index]
  }

  @Delete(':id')
  remove(@Param('id') id:string){
     this.events.filter((event)=>event.id !== +id)
  }
}
