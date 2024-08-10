import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from 'src/entities/user/user.service';
import { loginUserDto, registerUserDto } from './auth.dto';

@Controller("auth")
export class AuthController {
  constructor(private readonly userService:UserService){}
 
  @Post("register")
  async registerUser(@Body() user:registerUserDto): Promise<{}> {
    const {email,name,password}=user;
    
    // if user exists
    if(await this.userService.findByColumns({email})){
      return {"message":"User already exists"}
    }

    /**
     * Todo: hash the password then save the user
     * const hashedPassword= hashFunction(password)
     * createUser(name,email,hashedPassword)
     */
    await this.userService.createUser(name,email,password);
    
    return {email}
  }

  @Post("login")
  async loginUser(@Body() user:loginUserDto): Promise<{}> {
    const {email,password}=user;

    /**
     * Todo: hash the password then compare
     * const hashedPassword= hashFunction(password)
     * findByColumns(email,hashedPassword)
     */
    
    // if user doesnot exists
    if(!await this.userService.findByColumns({email,password})){
      return {"message":"User does not exists"}
    }

    
    return {email}
  }
}
