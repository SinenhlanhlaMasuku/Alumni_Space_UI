CREATE TABLE Alumni_Space_Account (
    account_id SERIAL PRIMARY KEY,
    fullname VARCHAR(20) NOT NULL
    email VARCHAR(50) NOT NULL UNIQUE, -- Added UNIQUE constraint
    password VARCHAR(100) NOT NULL,
    
);
