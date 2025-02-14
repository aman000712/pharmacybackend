// // auth.service.ts
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// // import { UsersService } from '../users/users.service'; // Or your UserService
// // import { CreateUserDto } from '../users/create-user.dto';
// import { JwtService } from '@nestjs/jwt'; // Inject JwtService

// @Injectable()
// export class AuthService {
//   constructor(
//     // private readonly usersService: UsersService, // Inject UsersService
//     private readonly jwtService: JwtService, // Inject JwtService
//   ) {}

//   async login(CreateUserDto: CreateUserDto) {
//     const user = await this.usersService.findByUsername(CreateUserDto.username); // Or find by email
//     if (!user || user.password !== CreateUserDto.password) { // Replace with proper password comparison (bcrypt)
//       throw new UnauthorizedException('Invalid credentials');
//     }

//     const payload = { sub: user.id, username: user.username }; // JWT payload
//     const accessToken = await this.jwtService.signAsync(payload); // Generate JWT

//     return { access_token: accessToken }; // Return the token
//   }

//   async findUserById(id: number) {
//     return this.usersService.findOne(id);
//   }

//   // ... other auth methods (register, password reset, etc.)
// }