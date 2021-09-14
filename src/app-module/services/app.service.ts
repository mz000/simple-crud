import { Injectable } from '@nestjs/common';
import { InjectBroker } from "nestjs-moleculer";
import { ServiceBroker } from "moleculer";
import e from 'express';

@Injectable()
export class AppService {
  constructor(
    @InjectBroker() private readonly broker: ServiceBroker,
  ) {
  }

  async findUser(id): Promise<object> {
    try {
      let res = await this.broker.call('home.findUser', { username: id})
      return {
        message: res ? "username found" : "username not found",
        success: res ? true : false,
        data: res ? res : {}
      }
    } catch (error) {
      return error
    }
  }

  async addUser(userInfo): Promise<object> {
    try {
      let res = await this.broker.call('home.addUser', userInfo)
      return {
        message: res ? "new user added" : "username is taken",
        success: res ? true : false
      }
    } catch (error) {
      return error
    }
    
  }

  async editUser(username, newInfo): Promise<object> {
    try {
      let res = await this.broker.call('home.updateUser', {username, ...newInfo}) 
      return {
        message: res ? "user information updated" : "username not found",
        success: res ? true : false
      }      
    } catch (error) {
      return error
    }
  }

  async deleteUser(id) : Promise<object> {
    try {
      let res = await this.broker.call('home.deleteUser', { username: id})      
      return {
        message: res ? "user deleted successfully" : "username not found",
        success: res ? true : false
      }
    } catch (error) {
      return error
    }
  }
}
