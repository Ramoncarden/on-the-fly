CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  email TEXT NOT NULL
    CHECK(position('@' IN email) > 1),
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
  password TEXT NOT NULL
)