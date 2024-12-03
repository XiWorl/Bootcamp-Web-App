import sqlite3
import os


lecture_slides = [
"https://docs.google.com/presentation/d/1VP9mrEZJZ9ALk2dBwadcGkWBg5twjUbM6VFZ7Fn3Vkk/edit?usp=sharing",
"https://docs.google.com/presentation/d/1wO047LhrT73QIcC5WzFhzGOtYhxap3aPq-nYbjmOSKk/edit?usp=sharing",
"https://docs.google.com/presentation/d/1RWvO8TQ_ueJyBdSHfZ6oNvq9E6J3rYovItbX_Q-r-44/edit?usp=sharing",
"https://docs.google.com/presentation/d/14ooPTPyM4QZPWMBq2sg4NypMQZAHQ4rY5n6CUn6l7zI/edit?usp=sharing",
"https://docs.google.com/presentation/d/1YzEswdGs5zqZMaK8zPCaJl8PiiFFOYDnz2QVHLDAxak/edit?usp=sharing",
"https://docs.google.com/presentation/d/1GTiIFoT1EDLZ0Y9SC6G1f9c1-YZoMM-NMLOC8-0_-lI/edit?usp=sharing",
"https://docs.google.com/presentation/d/1LqK53V6loCTSSouDKSLi0ghzEUEeoyfh49JIIpD04OQ/edit?usp=sharing",
"https://docs.google.com/presentation/d/1l67FCwXIndPk7by-60jXrStApbmZtccyJQhMuFQl4-c/edit?usp=sharing",
]

homeworks = [
"https://forms.gle/MQejHVuzuVzj3uGE7",
"https://forms.gle/6XVNWAyVc5ADfZxz9",
"https://forms.gle/fhbZwTntgESBEY6j8",
"https://forms.gle/2bRc93qwD8nwJafu5",
"https://forms.gle/65u4Er1kCaEMJioa7"
]


homework_imgs = [
    "../src/assets/ImageHomework1.png",
    "../src/assets/ImageHomework2.png",
    "../src/assets/ImageHomework3.png",
    "../src/assets/ImageHomework4.png",
    "../src/assets/ImageHomework5.png",
]

lecture_imgs = [
    "../src/assets/ImageLecture1.png",
    "../src/assets/ImageLecture2.png",
    "../src/assets/ImageLecture3.png",
    "../src/assets/ImageLecture4.png",
    "../src/assets/ImageLecture5.png",
    "../src/assets/ImageLecture6.png",
    "../src/assets/ImageLecture7.png",
    "../src/assets/ImageLecture8.png",
]

lecture_topics = [
    'Introduction',
    'Git, HTML, CSS',
    'Intermediate Git, CSS, JS',
    'JS ASYNC, TS AWAIT',
    'React',
    'React State',
    'APIs',
    'SQLite',
]




announcements = []


lectures_queries = [(f'Lecture {i+1}',v, lecture_imgs[i], lecture_topics[i]) for i,v in enumerate(lecture_slides)]
homework_queries = [(f"Homework {i + 1}",v, homework_imgs[i]) for i,v in enumerate(homeworks)]




con = sqlite3.connect('appdev.db')
cur = con.cursor()

cur.execute("DROP TABLE lectures")
lecture_table = """
        CREATE TABLE lectures (
            class VARCHAR,
            link VARCHAR,
            img_link VARCHAR,
            topics VARCHAR
        );
    """

con.execute(lecture_table)
cur.execute("DROP TABLE homeworks")
homework_table = """
        CREATE TABLE homeworks (
            class VARCHAR,
            link VARCHAR,
            img_link VARCHAR
        );
    """

con.execute(homework_table)


cur.executemany("INSERT INTO lectures VALUES(?, ?, ?, ?)", lectures_queries)
cur.executemany("INSERT INTO homeworks VALUES(?, ?, ?)", homework_queries)
con.commit()

#for debugging
for c in cur.execute("SELECT * FROM lectures"):
    print(c)

con.close()
