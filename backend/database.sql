CREATE DATABASE loginauth;


--setExtention
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name TEXT NOT NULL,
    user_password TEXT NOT NULL
);

--insert fake users

INSERT INTO users(user_name,user_password) VALUES ('shreya', 'shr123');