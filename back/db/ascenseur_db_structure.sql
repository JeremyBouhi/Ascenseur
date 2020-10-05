CREATE DATABASE ascenseur_db;

\connect "ascenseur_db";

CREATE TABLE "public"."game"
(
    "id"          timestamp     NOT NULL,
    "name"        character(50) NOT NULL,
    "value"       real          NOT NULL,
)
