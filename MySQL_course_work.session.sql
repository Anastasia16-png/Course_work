    CREATE TABLE IF NOT EXISTS registration (
        id INT  AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(225) NOT NULL,
        userpassword  CHAR(32) NOT NULL
    );
    
    SELECT * FROM registration;
    