// // auth.controller.ts
// import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
// import { AuthService } from './auth.service';
// // import { CreateUserDto } from '../users/create-user.dto';

// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Post('login')
//   async login(@Body(ValidationPipe) CreateUserDto: CreateUserDto) {
//     return this.authService.login(CreateUserDto); // Call the login method in your service
//   }

//   // ... other auth routes (register, logout, password reset, etc.)
// }