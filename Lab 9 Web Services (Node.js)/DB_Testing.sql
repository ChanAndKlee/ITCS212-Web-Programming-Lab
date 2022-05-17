use `itcs212-2`;

delete from personal_info where StudentID > 0;

INSERT INTO personal_info (StudentID, Firstname, Lastname, DOB, Mobilephone)
VALUES (1, 'Robert', 'Dolls', '1985-01-20', '0919998877'),
	(2, 'Peter', 'Jones', '1980-06-10', '0834455667'),
    (3, 'Lily', 'James', '1991-10-20', '0889988776');

SELECT * FROM personal_info;