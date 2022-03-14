
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "fullName" VARCHAR (100) NOT NULL,
    "city" VARCHAR (100) NOT NULL,
    "region" VARCHAR (100) NOT NULL,
    "graduation_date" DATE NOT NULL,
    "needs_ride" BOOLEAN NOT NULL,
    "provide_ride" BOOLEAN NOT NULL
);