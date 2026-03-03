import dotenv from "dotenv";

dotenv.config();

export const env = {
  taigaUsername: process.env.TAIGA_USERNAME as string,
  taigaPassword: process.env.TAIGA_PASSWORD as string,
};