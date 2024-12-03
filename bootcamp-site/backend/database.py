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
"https://forms.gle/8SXRVwGs4q2MQHJD6"
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





announcements = [
    "📢 Hi everyone, hope you all had a restful weekend. The Accenture event overlaps with our normal bootcamp time, so we have a couple adjustments. Bootcamp will start promptly at 7:35pm at CSI 1121 (our usual room). If you want to network with the Accenture speakers, prioritize that and then come to bootcamp after. This will our last in-person lecture for the semester so please come if you can! We're gonna go until 8:35pm and we understand that’s a little late so you’re free to leave around 8:15pm, but it would be great if you could stay the full time because we will be learning about SQL and database knowledge which will be important for your projects. See you Tuesday!!",
    "📢 reminder that we are having the Accenture event next Tuesday 6:30pm in Antonov auditorium. This is required for all of you! Please be prepared with a printed copy of your most updated resume",
    "📢 Hello bootcampers!! We are having our first App Dev Bootcamp Hackathon this semester! The prompt is: Imagine you are the Director of Education for App Dev Club. Build a web app that facilitates the bootcamp process. You have until December 3rd at 7:00pm to submit your project. You will be presenting with your team on December 3rd at 7:00pm in our usual bootcamp room CSI 1121. Detailed instructions for this hackathon can be found in the document link below. Happy coding!! https://docs.google.com/document/d/13GH77ppbY0O1szoMAVyKTgVk0ndZx6JioZaKiDTbGvk/edit?usp=sharing",
    "📢 I hope everyone is doing well! Next week, our team will have the opportunity to speak with the CMNS Board of Directors. I’d love for anyone in the app dev community to share how this club has impacted their life. If app dev has helped with anything. whether it’s about career support (like helping you get an internship), community/social benefits, building your tech background, or anything else you want to share—please reach out to me via dms. We want to feature these quotes to showcase the true impact this club is making for students on campus. Hopefully showing real quotes can help us get more support so we can create more stories, similar to yours, in the future. Thank you, everyone!"
    "📢 we are considering doing App Dev Professional headshots in front of Iribe for everyone. It would be a good way for us to brand our LinkedIns similar to other clubs on campus, please like this is you are interested! Also please everyone try to put app dev in your LinkedIn if you are comfortable with it. Putting that you are involved helps people know who's in the community. Those who are on project teams, you can still put the sponsor company but please make clear that you are involved in App Dev using our company logo or in your activities or something :)"
    "📢 Join us for an exclusive evening with Accenture on September 18th from 6:30-7:30pm in Antonov Auditorium! This event offers a great opportunity to network with Accenture employees, explore their company culture, and discover internship and full-time roles with FREE pizza being provided! Don’t miss out—bring your questions and curiosity! We can’t wait to see you there",
    "📢 Hi everyone, We're thrilled to announce that we are hosting an exclusive event with NSA's Laboratory of Telecommunication Sciences on September 16th from 6:30-7:30pm in CSI 1115! This is a great opportunity to network with LTS professionals and learn about their internship opportunities and full-time roles! Mark your calendars and make sure you don't miss out on this!"
]

announcements_titles = [
    "Accenture Event this Tuesday!!",
    "Reminders for Accenture Event on November 19th",
    "Bootcamp Hackathon Prompt",
    "Quotes for CMNS Board of Directors",
    "App Dev Professional Headshots",
    "Accenture Event on September 18th",
    "App Dev Professional Headshots" 
]

announcements_dates = [
    "November 17th, 2024",
    "November 14th, 2024",
    "November 12th, 2024",
    "October 31, 2024",
    "October 12th, 2024",
    "September 14th, 2024",
    "September 12th, 2024"
]


group_names = [
    "Praying for Internships 🙏",
     "Researchers",
     "ADC Whales",
      "Quant",
      "Team 4 People",
       "Kimbots",
        "BHANK",
        "Praying for Internships 🙏 ",
        "Samai's Legacy"
]

group_description = [
    "Specializing Software Engineering and Quant Development",
    "Specializing in AI Research",
    "Exploring machine learning, AI models, and automation.",
    "Specializing in Quant Development",
    "Specializing in Software Engineering",
     "Specializing in Software Engineering",
     "Specializing in Software Engineering",
     "Specializing in Software Engineering and AI Research",
     "Specializing in Software Engineering, Product Managements, and Consulting"
]

group_mentor = [
    "Spencer and Pheobe",
    "Phillip & Aaquib",
    "Emily Davis",
    "Aditya & Sam",
    "Brian & Yanit",
    "Maura & Michelle",
     "Jayden & Ravi",
     "Nitish & Gavin",
     "Samai & Matt"
]

group_members = [
    "Lakshmee Harivanam, Joseph Acquah, Milana Dagne, Jayant Kammula, & Uriel Vit-Ojiegbe",
    "Pranav Krishnamurthy, Misha Khan, Cedric Pierre-Louis, Harini Thirukonda, & Emily Lawrence \n          ",
    "Andy Chen, Kira Le, Lily Ureta, Kyle Yin, & Rachel Li",
    "Deep Mistry, Samara Rahman, Yashu Bommareddy, Mazin Nadaf, & Brandon Isbell",
    "Sawyer Bloom, Lauren Lipinski, Ryan Selser, Natali Oleinik, & Jacob Demory",
    "Autumn Anson, Rukmini Gaddam, Muatasim Miller, Nate Zhang, & Ryan Li",
    "Kaleb Ward, Andrew Chen, Bhavya Tanugula, Nimisokan Ojikutu, & Harleen Green",
    "Aditi Sethi, Nithya Gopalakrishnan, Aryan Jain, Dhruv Satanur, & Rushil Juneja",
    "Vir Trivedi, Riya Lakhani, Madeline Moldrem, Samantha Tyles, & James Miller"
]

lectures_queries = [(f'Lecture {i+1}',v, lecture_imgs[i], lecture_topics[i]) for i,v in enumerate(lecture_slides)]
homework_queries = [(f"Homework {i + 1}",v, homework_imgs[i]) for i,v in enumerate(homeworks)]
announcements_queries = [(announcements_titles[i], announcements_dates[i],v) for i,v in enumerate(announcements)]
group_queries = [(i + 1, group_names[i], v, group_mentor[i], group_members[i]) for i,v in enumerate(group_description)]



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


cur.execute("DROP TABLE announcements")
announcements_table = """
        CREATE TABLE announcements (
            title VARCHAR,
            date VARCHAR,
            text VARCHAR
        );
    """


con.execute(announcements_table)


cur.execute("DROP TABLE groups")
groups_table = """
        CREATE TABLE groups (
            id INTEGER,
            name VARCHAR,
            description VARCHAR,
            mentor VARCHAR,
            members VARCHAR
        );
    """


con.execute(groups_table)


cur.executemany("INSERT INTO lectures VALUES(?, ?, ?, ?)", lectures_queries)
cur.executemany("INSERT INTO homeworks VALUES(?, ?, ?)", homework_queries)
cur.executemany("INSERT INTO announcements VALUES(?, ?, ?)", announcements_queries)
cur.executemany("INSERT INTO groups VALUES(?, ?, ?, ?, ?)", group_queries)


con.commit()

#for debugging
for c in cur.execute("SELECT id FROM groups"):
    print(c)

con.close()
