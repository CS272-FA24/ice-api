import { writeFileSync } from 'fs';

function getCourseList() {
    return [
        {
            id: "CS200",
            credits: 3,
            department: "Computer Sciences",
            keywords: ["java", "programming", "intro"],
            name: "Programming I",
            description: "Learn the process of incrementally developing small (200-500 lines) programs along with the fundamental Computer Science topics. These topics include: problem abstraction and decomposition, the edit-compile-run cycle, using variables of primitive and more complex data types, conditional and loop-based flow control, basic testing and debugging techniques, how to define and call functions (methods), and IO processing techniques. Also teaches and reinforces good programming practices including the use of a consistent style, and meaningful documentation. Intended for students who have no prior programming experience."
        },
        {
            id: "CS220",
            credits: 4,
            department: "Computer Sciences",
            keywords: ["python", "programming", "intro"],
            name: "Data Science I",
            description: "Introduction to Data Science programming using Python. No previous programming experience required. Emphasis on analyzing real datasets in a variety of forms and visual communication."
        },
        {
            id: "CS272",
            credits: 3,
            department: "Computer Sciences",
            keywords: ["javascript", "programming", "intro"],
            name: "Intro to Web Development",
            description: "Introduces methods and tools for creating/maintaining secure and interactive web content. Topics include programming fundamentals to support core web concepts, application development essentials, and content management systems. Web best practices - such as accessibility, design, and critical thinking about relevant ethics and organization. Covers practical skills to design and implement websites using popular scripting languages and frameworks, content management systems (CMSs), and related tools."
        },
        {
            id: "CS300",
            credits: 3,
            department: "Computer Sciences",
            keywords: ["java", "programming"],
            name: "Programming II",
            description: "Introduction to Object-Oriented Programming using classes and objects to solve more complex problems. Introduces array-based and linked data structures: including lists, stacks, and queues. Programming assignments require writing and developing multi-class (file) programs using interfaces, generics, and exception handling to solve challenging real world problems. Topics reviewed include reading/writing data and objects from/to files and exception handling, and command line arguments. Topics introduced: object-oriented design; class vs. object; create and define interfaces and iterators; searching and sorting; abstract data types (List,Stack,Queue,PriorityQueue(Heap),Binary Search Tree); generic interfaces (parametric polymorphism); how to design and write test methods and classes; array based vs. linked node implementations; introduction to complexity analysis; recursion."
        },
        {
            id: "CS400",
            credits: 3,
            keywords: ["java", "programming"],
            department: "Computer Sciences",
            name: "Programming III",
            description: "The third course in our programming fundamentals sequence. It presumes that students understand and use functional and object-oriented design and abstract data types as needed. This course introduces balanced search trees, graphs, graph traversal algorithms, hash tables and sets, and complexity analysis and about classes of problems that require each data type. Students are required to design and implement using high quality professional code, a medium sized program, that demonstrates knowledge and use of latest language features, tools, and conventions. Additional topics introduced will include as needed for projects: inheritance and polymorphism; anonymous inner classes, lambda functions, performance analysis to discover and optimize critical code blocks. Students learn about industry standards for code development. Students will design and implement a medium size project with a more advanced user-interface design, such as a web or mobile application with a GUI and event- driven implementation; use of version-control software."
        },
        {
            id: "LIS201",
            credits: 3,
            keywords: ["ethics", "discussion"],
            department: "Library & Information Sciences",
            name: "The Information Society",
            description: "Examines important social, legal, and historical contexts of information and information technologies, and explores significant social, legal, and moral questions that surround those technologies."
        },
        {
            id: "LIS350",
            credits: 3,
            keywords: ["books", "discussion"],
            department: "Library & Information Sciences",
            name: "History and Future of Books",
            description: "Framed by a question about what books are, what books have been, and what books might be: past, present, and future. It assumes that 'book' is a placeholder term for an object that becomes the site of questions and debates about a variety of media, expressions, and recording practices. A goal of the class is to understand the book as an active technology that shapes peoples, perceptions, and cultures rather than serving as a passive receptacle of them. This course will approach the book from a number of perspectives including book history, digital humanities, media studies, and human computer interaction, as well as examining industry-oriented interests such as e-reader manufacturing, book retail, and publishing."
        },
        {
            id: "LIS461",
            credits: 4,
            keywords: ["ethics", "discussion"],
            department: "Library & Information Sciences",
            name: "Data & Algorithms",
            description: "An introduction to ethical, legal and policy issues related to analytics, 'big data' and algorithms to support decision making. Gain familiarity with major debates and controversies in a variety of contexts. Critically analyze course materials and apply moral reasoning and legal concepts to assess case studies and critique arguments made by others."
        }
    ]
}

writeFileSync("courses.json", JSON.stringify(getCourseList(), null, 2));
