CREATE DATABASE users_xdev; 

CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "firstname" varchar NOT NULL,
  "lastname" varchar NOT NULL,
  "e_mail" varchar NOT NULL,
  "profile_image" varchar,
  "password" varchar NOT NULL
);
