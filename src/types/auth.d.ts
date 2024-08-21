import { User } from "next-auth";

type UserId = string;
type Token = string;

declare module "next-auth" {
  interface User {
    token?: Token;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: UserId;
    token: Token;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId;
    };
    token: Token;
  }
}
