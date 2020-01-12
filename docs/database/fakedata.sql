use cnca;
INSERT INTO roles (name)
VALUES ("owner"), ("admin"), ("user");

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
INSERT INTO activity_types(nome)  
VALUES          -- id
("attività1"),  -- 1
("attività2"),  -- 2
("attività3"),  -- 3
("ferie"),      -- 4
("malattia"),   -- 5
("Recupero ore lavoro in festivo"),  -- 6
("Formazione Generale"),             -- 7
("Formazione Specifica"),            -- 8
("Formazione FAD"),                  -- 9
("PERMESSO str: donazione sangue"),  -- 10
("PERMESSO str: diritto di voto"),   -- 11
("PERMESSO str: testimone g"),       -- 12
("PERMESSO str: seggio elettorale"); -- 13

INSERT INTO 
users  (nome, cognome, data_di_nascita, organizzazione, email, password)
VALUES ('Ramazan',  'Aliskhanov',   '1986-7-06',   'GreenVolunteers',          'social@gmail.com',      '1234567'), -- #1
('Ahmad',    'Macsud',       '1983-8-05',   'RedCross Roma',            'ahmed@rcr.com',         '1234567'), -- #2
('Hlyal',    'Ibn Amin',     '1990-9-04',   'Doctors Without Borders',  'ramazan3@gmail.com',    '1234567'), -- #3
('Ramazan',  'Aliskhanov',   '1994-10-03',  'CYF Volunteer',            'ravillion@mail.com',    '1234567'), -- #4
('Ramazan',  'Aliskhanov',   '1980-11-02',  'GreenVolunteers',          'voluone@gv.com',        '1234567'), -- #5
('Ramazan',  'Aliskhanov',   '1998-12-01',  'GreenVolunteers',          'ramazan6@gv.com',       '1234567'); -- #6

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