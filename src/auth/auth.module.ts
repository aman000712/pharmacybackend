// // auth.module.ts
// import { Module } from '@nestjs/common';
// import { AuthController } from './auth.controller';
// import { AuthService } from './auth.service';
// import { JwtModule } from '@nestjs/jwt'; // Import JwtModule
// import { JwtStrategy } from './strategies/jwt.strategy';
// import { PassportModule } from '@nestjs/passport';
// // import { UsersModule } from '../users/users.module'; // Or where your User entity is

// @Module({
//   imports: [
//     PassportModule, // Import PassportModule
//     JwtModule.register({ // Configure JwtModule
//       secret: process.env.JWT_SECRET, // Your JWT secret
//       signOptions: { expiresIn: '1h' }, // Token expiration time
//     }),
//     // UsersModule, // Import UsersModule if you're using a UserService to retrieve users
//   ],
//   controllers: [AuthController],
//   providers: [AuthService, JwtStrategy], // Include JwtStrategy
//   exports: [AuthService], // Export AuthService if you need it in other modules
// })
// export class AuthModule {}