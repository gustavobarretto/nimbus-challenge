CREATE DATABASE forecasts_by_neighbourhood;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS neighbourhoods (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS forecasts (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  ts TIMESTAMP NOT NULL,
  mm FLOAT NOT NULL,
  neighbourhood_id UUID,
  FOREIGN KEY(neighbourhood_id) REFERENCES neighbourhoods(id)
);

INSERT INTO neighbourhoods (name)
VALUES
('Pituba'),
('Patamares'),
('Patamares'),
('Piatã'),
('Barra');



