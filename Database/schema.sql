CREATE DATABASE logsheet_scheduler;

USE logsheet_scheduler;

-- Courses Table
CREATE TABLE Courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(255) NOT NULL
);

-- Staff Table
CREATE TABLE Staff (
    staff_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role ENUM('Course Coordinator', 'Technical Staff') NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Modules Table
CREATE TABLE Modules (
    module_id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT,
    module_name VARCHAR(255) NOT NULL,
    curriculum_file_path VARCHAR(255),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id) ON DELETE CASCADE
);

-- Schedules Table
CREATE TABLE Schedules (
    schedule_id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT,
    module_id INT,
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    type ENUM('Lecture', 'Lab') NOT NULL,
    group_name VARCHAR(50),
    faculty_id INT,
    venue VARCHAR(255),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id) ON DELETE CASCADE,
    FOREIGN KEY (module_id) REFERENCES Modules(module_id) ON DELETE CASCADE,
    FOREIGN KEY (faculty_id) REFERENCES Staff(staff_id) ON DELETE CASCADE
);

-- Logsheets Table
CREATE TABLE Logsheets (
    logsheet_id INT AUTO_INCREMENT PRIMARY KEY,
    schedule_id INT,
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    course_id INT,
    module_id INT,
    type ENUM('Lecture', 'Lab') NOT NULL,
    topics_taught TEXT,
    assignment_given TEXT,
    student_progress TEXT,
    faculty_id INT,
    FOREIGN KEY (schedule_id) REFERENCES Schedules(schedule_id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES Courses(course_id) ON DELETE CASCADE,
    FOREIGN KEY (module_id) REFERENCES Modules(module_id) ON DELETE CASCADE,
    FOREIGN KEY (faculty_id) REFERENCES Staff(staff_id) ON DELETE CASCADE
);
