CREATE TABLE IF NOT EXISTS Users (
   UserID INT PRIMARY KEY AUTO_INCREMENT,
   Username VARCHAR(255) NOT NULL,
   Password VARCHAR(255) NOT NULL,
   Email VARCHAR(255) NOT NULL,
   RegistrationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Posts (
   PostID INT PRIMARY KEY AUTO_INCREMENT,
   Title VARCHAR(255) NOT NULL,
   Content TEXT NOT NULL,
   PublishDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   AuthorID INT,
   FOREIGN KEY (AuthorID) REFERENCES Users(UserID) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Comments (
   CommentID INT PRIMARY KEY AUTO_INCREMENT,
   Content TEXT NOT NULL,
   CommentDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PostID INT,
   UserID INT,
   FOREIGN KEY (PostID) REFERENCES Posts(PostID) ON DELETE CASCADE,
   FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Tags (
   TagID INT PRIMARY KEY AUTO_INCREMENT,
   TagName VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS PostTags (
   RelationID INT PRIMARY KEY AUTO_INCREMENT,
   PostID INT,
   TagID INT,
   FOREIGN KEY (PostID) REFERENCES Posts(PostID) ON DELETE CASCADE,
   FOREIGN KEY (TagID) REFERENCES Tags(TagID) ON DELETE CASCADE
);
