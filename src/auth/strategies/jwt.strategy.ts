// // jwt.strategy.ts
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { AuthService } from '../auth.service'; // Or UsersService if you manage users there

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(private readonly authService: AuthService) { // Inject AuthService
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: process.env.JWT_SECRET, // Your JWT secret (from env variables)
//     });
//   }

//   async validate(payload: any) {  // Payload from the JWT
//     // Option 1: Fetch the user from the database based on the payload (recommended)
//     const user = await this.authService.findUserById(payload.sub); // Assuming payload.sub is the userId
//     if (!user) {
//       throw new UnauthorizedException();
//     }
//     return user; // Make the user object available in the request (req.user)

//     // Option 2: If you don't need to fetch the whole user:
//     // return { userId: payload.sub, username: payload.username }; // Return payload directly
//   }
// }