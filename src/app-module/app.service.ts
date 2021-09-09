import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  findUser(id): object {
    let res = {
      message: "user found",
      success: true
    }
    return res;
  }

  addUser(userInfo): object {
    let res = {
      message: "new use info added",
      success: true
    }
    return res;
  }

  editUser(username, newInfo): object {
    let res = {
      message: "user information updated",
      success: true
    }
    return res
  }

  deleteUser(id) : object {
    let res = {
      message : "user information removed",
      success: true
    }
    return res
  }
}
