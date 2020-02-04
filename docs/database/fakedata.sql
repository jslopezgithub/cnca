use cnca;
INSERT INTO roles (nome)
VALUES ("admin"),
       ("volunteer");

-- this date isn't fake
INSERT into holidays (holiday, is_continious)
-- YEAR-MONTH-DAY
VALUES  ('2020-1-1', true),
('2020-1-6'  , true),
('2020-4-25' , true),
('2020-5-1'  , true),
('2020-6-2'  , true),
('2020-8-15' , true),
('2020-11-1' , true),
('2020-12-8' , true),
('2020-12-25', true),
('2020-12-26', true),
('2020-12-21', true),
('2020-5-9'  , false), -- TEST
('2020-10-15', false); -- TEST

-- CREATE DEFAULT ACTIVITY TYPES
INSERT INTO activity_types(nome, is_daily)  
VALUES          -- id
("attività1", 0),  -- 1
("attività2", 0),  -- 2
("attività3", 0),  -- 3
("ferie", 0),      -- 4
("malattia", 1),   -- 5
("Recupero ore lavoro in festivo",  0), -- 6
("Formazione Generale",             0), -- 7
("Formazione Specifica",            0), -- 8
("Formazione FAD",                  0), -- 9
("PERMESSO str: donazione sangue",  0), -- 10
("PERMESSO str: diritto di voto",   0), -- 11
("PERMESSO str: testimone g",       0), -- 12
("PERMESSO str: seggio elettorale", 0); -- 13

INSERT INTO 
users  (nome, cognome, data_di_nascita, organizzazione, email, activity_id)
VALUES ('Ramazan',  'Aliskhanov',   '1986-7-06',   'GreenVolunteers',   'social@gmail.com', 1), -- #1
('Ahmad',    'Macsud',       '1983-8-05',   'RedCross Roma',            'ahmed@rcr.com', 1), -- #2
('Hlyal',    'Ibn Amin',     '1990-9-04',   'Doctors Without Borders',  'ramazan3@gmail.com', 1), -- #3
('Ramazan',  'Aliskhanov',   '1994-10-03',  'CYF Volunteer',            'ravillion@mail.com', 1), -- #4
('Ramazan',  'Aliskhanov',   '1980-11-02',  'GreenVolunteers',          'voluone@gv.com', 1), -- #5
('Ramazan',  'Aliskhanov',   '1998-12-01',  'GreenVolunteers',          'ramazan6@gv.com', 1); -- #6

INSERT INTO 
activities (volunteer_id, activity_date, start_time, end_time, activity_type_id)
VALUES 
(1, "2019-02-12", "08:00:00", "11:00:00", 10),
(1, "2019-03-12", "08:00:00", "10:00:00", 4),
(1, "2019-04-12", "08:30:00", "12:00:00", 11),
(1, "2019-05-12", "08:00:00", "9:00:00",  12),
(1, "2019-06-12", "09:00:00", "13:00:00", 13);

INSERT INTO 
activities (volunteer_id, activity_date, start_time, end_time, activity_type_id)
VALUES 
(2, "2019-12-02", "08:00:00", "11:00:00", 10),
(2, "2019-12-03", "08:00:00", "10:00:00", 4),
(2, "2019-12-04", "08:30:00", "12:00:00", 11),
(2, "2019-12-05", "08:00:00", "9:00:00",  12),
(2, "2019-12-06", "09:00:00", "13:00:00", 13);

INSERT INTO 
activities (volunteer_id, activity_date, start_time, end_time, activity_type_id)
VALUES 
(3, "2019-12-02", "08:00:00", "11:00:00", 10),
(3, "2019-12-03", "08:00:00", "10:00:00", 4),
(3, "2019-12-04", "08:30:00", "12:00:00", 11),
(3, "2019-12-05", "08:00:00", "9:00:00",  12),
(3, "2019-12-06", "09:00:00", "13:00:00", 13);

INSERT INTO 
activities (volunteer_id, activity_date, start_time, end_time, activity_type_id)
VALUES 
(4, "2019-12-02", "08:00:00", "11:00:00", 10),
(4, "2019-12-03", "08:00:00", "10:00:00", 4),
(4, "2019-12-04", "08:30:00", "12:00:00", 11),
(4, "2019-12-05", "08:00:00", "9:00:00",  12),
(4, "2019-12-06", "09:00:00", "13:00:00", 13);

INSERT INTO 
activities (volunteer_id, activity_date, start_time, end_time, activity_type_id)
VALUES 
(5, "2019-12-02", "08:00:00", "11:00:00", 10),
(5, "2019-12-03", "08:00:00", "10:00:00", 4),
(5, "2019-12-04", "08:30:00", "12:00:00", 11),
(5, "2019-12-05", "08:00:00", "9:00:00",  12),
(5, "2019-12-06", "09:00:00", "13:00:00", 13);