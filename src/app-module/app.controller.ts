import { Controller, Res, Body, Get, Param, Post, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './services/app.service';
import { UserInfo } from './dto/user-info.dto'
import { NewInfo } from './dto/user-new-info.dto'

@Controller('api/user/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  @UsePipes(new ValidationPipe())
  findUser(@Param('id') id: string): object {
    return this.appService.findUser(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  addUser(@Body() userInfo: UserInfo) : object {
    return this.appService.addUser(userInfo)
  }
  
  @Put(':id')
  @UsePipes(new ValidationPipe())
  editUser(@Param('id') id: string, @Body() newInfo : NewInfo): object {
    return this.appService.editUser(id, newInfo)
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) : object {
    return this.appService.deleteUser(id)
  }
}
