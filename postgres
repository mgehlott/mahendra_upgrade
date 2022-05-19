CREATE TABLE Transactions (
	check_no VARCHAR PRIMARY KEY,
	company_id VARCHAR ( 10 ) NOT NULL,
	date Date NOT NULL,
	Amount VARCHAR ( 50 ) NOT NULL,
);



INSERT INTO Transactions (check_no, company_id, date, Amount)
VALUES ('SBI1234', 'B', '18/01/2020', '19877'),
       ('AXIS2476', 'D', '23/05/2020', '20876'),
       ('HDFC7612', 'B', '09/09/2020', '45261'),
	   ('ICICI1010', 'E', '12/12/2020', '10298');

select * from Transactions;

CREATE TABLE Company (
	Company_id VARCHAR PRIMARY KEY,
	Company_name VARCHAR ( 20 ) NOT NULL
);

INSERT INTO Company (Company_id,Company_name)
VALUES ('A','Hyundai'),
        ('B','Toyota'),
        ('C','Tata'),
        ('E','Ford'),
        ('F','Maruti');
        
select * from Company;

SELECT
	*
FROM
    Transactions
INNER JOIN Company ON Transactions.company_id=Company.Company_id;
       
