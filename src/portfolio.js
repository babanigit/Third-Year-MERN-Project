/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Aniket",
  logo_name: "BMI",
  nickname: "ani / bablu",
  full_name: "Aniket Panchal",
  subTitle: "Full Stack Developer, digital Artist. Always learning.",
  resumeLink:"https://drive.google.com/file/d/1vrH2TG_69x0BslVAYGnNDpzCPCczuPXb/view?usp=sharing/view",
  mail: "aniketpanchal07@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://www.github.com/babanigit",
  linkedin: "https://www.linkedin.com/in/aniket-vilas-panchal",
  gmail: "aniketpanchal07@gmail.com",
  gitlab: " ",
  facebook: "https://www.facebook.com/profile.php?id=100014709424349",
  twitter: "",
  instagram: "https://instagram.com/changeyourthinkingg?igshid=MzRlODBiNWFlZA==",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using Flutter and native Android",
        "⚡ Backend development using NodeJS",
      ],
      softwareSkills: [
        {
          skillName: "Tailwindcss",
          fontAwesomeClassname: "devicon:tailwindcss",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "skill-icons:react-dark",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "git",
          fontAwesomeClassname: "logos:git",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Nodejs",
          fontAwesomeClassname: "logos:nodejs",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },

    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Certified AWS Developer Associate and Cloud Practioner",
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Experience hosting and managing web apps on GCP and AWS",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //   ],
    //   softwareSkills: [],
    // },
    {
      title: "",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with Computer Vision and object oriented logics",
        "⚡ Experience with 10+ Projects",
        "⚡ Experience in DSA (Data Structure and Algorithms)"
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "c++",
          fontAwesomeClassname: "skill-icons:cpp",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "vscode-icons:file-type-sql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "devicon:linux",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Tilak Maharashtra Vidyapeeth ",
      subtitle: "Bachelor in Computer Application ",
      logo_path: "tmv.png",
      alt_name: "DAL",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, Object Oriented Programming, Web Development  etc.",
        "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
      ],
      website_link: "https://www.bcaedu.in/",
    },
    // {
    //   title: "SAL Engineering and Technical Institute",
    //   subtitle: "B.Tech. in Computer Engineering",
    //   logo_path: "sal.png",
    //   alt_name: "SETI",
    //   duration: "2017 - 2021",
    //   descriptions: [
    //     "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
    //     "⚡ I have also completed various online courses for ML/DL, Web Development, Mobile App Development, etc.",
    //     "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
    //   ],
    //   website_link: "https://www.sal.edu.in/",
    // },
  ],
};

 const educationTrail = {
  x:"I actively participate in hackathons and other tech-related activities.Below are some of my major certifications.",
};

const certifications = {
  certifications: [
    // {
    //   title: "AWS Developer Associate",
    //   subtitle: "Amazon Web Services",
    //   logo_path: "aws.png",
    //   certificate_link:
    //     "https://www.credly.com/badges/b12fbece-07f3-47f5-9dda-cd56f49e250d/public_url",
    //   alt_name: "AWS",
    //   color_code: "#ffc475",
    // },
    // {
    //   title: "AWS Certified Cloud Practioner",
    //   subtitle: "Amazon Web Services",
    //   logo_path: "aws.png",
    //   certificate_link:
    //     "https://www.credly.com/badges/8b2db191-702d-427c-91aa-0f926be447a6/public_url",
    //   alt_name: "AWS",
    //   color_code: "#ffc475",
    // },
    // {
    //   title: "Google Summer of Code 2019",
    //   subtitle: "Google / Sugar Labs",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#ffc475",
    // },
    // {
    //   title: "Google Code-In Student",
    //   subtitle: "2014-2017",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#1e70c1",
    // },
    // {
    //   title: "Google Summer of Code Mentor",
    //   subtitle: "2017 / 2018 / 2020",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#ffbfae",
    // },
    // {
    //   title: "Google Code-In Mentor",
    //   subtitle: "2017 / 2018 / 2019",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#b190b0",
    // },
    // {
    //   title: "Deep Learning Specialization",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/737a9587023c666b8e6cb303157aaeba",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "Sequence Models",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/FM5AKEZA9NUY",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#F6B808",
    // },
    // {
    //   title: "Convolutional Neural Networks",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/U8BLDNUT9UUM",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Structuring Machine Learning Projects",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/YLC25SJQKH3Y",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#E2405F",
    // },
    // {
    //   title: "Machine Learning",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/72KY93DT82MP",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Neural Networks and Deep Learning",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/25JXRB2RWHRX",
    //   alt_name: "Google",
    //   color_code: "#7A7A7A",
    // },
    // {
    //   title: "Improving Deep Neural Networks",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Android Developer Nanodegree",
    //   subtitle: "Part of Google India Scholarship Program",
    //   logo_path: "100.png",
    //   certificate_link: "https://graduation.udacity.com/confirm/HLE7K5V3",
    //   alt_name: "Google",
    //   color_code: "#C5E2EE",
    // },
    // {
    //   title: "InOut 4.0 Winner #2",
    //   subtitle: "2017",
    //   logo_path: "ino.png",
    //   certificate_link: " ",
    //   alt_name: "InOut",
    //   color_code: "#fffbf3",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and projects experiences",
  description:
    "I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "IT Developer",
          company: "Canada Revenue Agency",
          company_url: "https://www.canada.ca/en/revenue-agency.html",
          logo_path: "cra.png",
          duration: "May 2023 - Ongoing",
          location: "Halifax, Nova Scotia",
          description:
            "Canada Revenue Agency (CRA) administers tax laws for the Government of Canada and for most provinces and territories, and administers various social and economic benefit and incentive programs delivered through the tax system.",
          color: "#f10000",
        },
        {
          title: "Full Stack Developer",
          company: "Quicko",
          company_url: "https://quicko.com/",
          logo_path: "quicko.jpg",
          duration: "June 2021 - October 2021",
          location: "Ahmedabad",
          description:
            "Quicko is an online tax planning, preparation & filing platform for individuals & businesses.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Google Summer of Code",
          company: "Sugar Labs",
          company_url: "https://sugarlabs.org/",
          logo_path: "google_logo.png",
          duration: "May 2019 - Aug 2019",
          location: "Work From Home",
          description:
            "I worked on the Dashboard project which helps users track their activities while using Sugar OS. I also worked on making a Tamagotchi-like widget for Sugar's Home Screen",
          color: "#ee3c26",
        },
        {
          title: "Android App Developer Intern",
          company: "IAS4Sure",
          company_url: " ",
          logo_path: "buld.jpg",
          duration: "December 2019 - February 2020",
          location: "Work From Home",
          description:
            "Internship task was to make a native Android application. ",
          color: "#0071C5",
        },
        {
          title: "Web Developer",
          company: "Wrighter Writing Solutions",
          company_url: " ",
          logo_path: "wrighter.jpg",
          duration: "August 2020",
          location: "",
          description: "Develop a website using PHP and jQuery.",
          color: "#56A4D3",
        },
        {
          title: "Front-End Developer",
          company: "VJ TechServe",
          company_url: " ",
          logo_path: "vjt.png",
          duration: "September 2020",
          location: "",
          description: "Develop a portfolio website using ReactJS",
          color: "#800000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Summer of Code Mentor",
          company: "Sugar Labs / GSoC",
          company_url: "https://sugarlabs.org/",
          logo_path: "google_logo.png",
          duration: "Summer of 2017 / 18 / 20",
          location: " ",
          description:
            "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
          color: "#4285F4",
        },
        {
          title: "Google Code-In Mentor",
          company: "Sugar Labs / GSoC",
          company_url: "https://sugarlabs.org/",
          logo_path: "google_logo.png",
          duration: "Winter of 2017 / 18 / 19",
          location: " ",
          description:
            "Day to day resposibilites of this mentorship was to help out children aged 13-17 get started with programming and open-source, review their work and approve them.",
          color: "#D83B01",
        },
        {
          title: "Board Member at Codeuino",
          company: " ",
          company_url: " ",
          logo_path: "codeuino.jpg",
          duration: "2018 - 2019",
          location: " ",
          description: "Previous Board during early days of Codeuino",
          color: "#D83B01",
        },
        {
          title: "BluWings Club",
          company: " ",
          company_url: " ",
          logo_path: "b.png",
          duration: "2018 - On Going",
          location: " ",
          description:
            "Co-Founder and President of the programming club called BluWings. Have organized several workshops which introduced programming and related tools to freshers.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science and React projects. Below are some of my projects. all projects are uploaded on github",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me306kb.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "Portfolio",
      url: "https://github.com/babanigit/Portfolio-react-aniketpachal",
      description: "first portfolio using react ",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        // {
        //   name: "Tailwindcss",
        //   iconifyClass: "devicon:tailwindcss",
        // },
        // {
        //   name: "Node.js",
        //   iconifyClass: "devicon-nodejs",
        // },
        // {
        //   name: "Express.js",
        //   iconifyClass: "devicon-express",
        // },
        // {
        //   name: "MongoDB",
        //   iconifyClass: "logos-mongodb",
        // },
      ],
    },
    {
      name: "Portfolio",
      url: "https://github.com/babanigit/Portfolio-react-aniketpanchal2",
      description:
        " portfolio using Tailwind and React",
      languages: [
        {
          name: "Tailwind",
          iconifyClass: "devicon:tailwindcss",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
   
  ],
};

export {
  educationTrail,
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};

export default educationTrail;



// projects

// {
//   name: "RecipesAPI",
//   url: "https://rapidapi.com/Hrishi1999/api/recipesapi2",
//   description: "Get recipes for hundreds and thousands of dishes",
//   languages: [
//     {
//       name: "NodeJS",
//       iconifyClass: "logos-nodejs",
//     },
//     {
//       name: "JavaScript",
//       iconifyClass: "logos-javascript",
//     },
//   ],
// },
// {
//   name: "opPortfolio",
//   url: "https://github.com/Hrishi1999/opPortfolio",
//   description: "(This) A clean and full customizable portfolio template.",
//   languages: [
//     {
//       name: "ReactJS",
//       iconifyClass: "logos-react",
//     },
//   ],
// },
// {
//   name: "Cab Security System",
//   url: " ",
//   description:
//     "Driver drowsiness detection, profanity detection, violence detection, SMS alerts, cab driver tracking.",
//   languages: [
//     {
//       name: "Python",
//       iconifyClass: "logos-python",
//     },
//     {
//       name: "Tensorflow",
//       iconifyClass: "logos-tensorflow",
//     },
//     {
//       name: "OpenCV",
//       iconifyClass: "logos-opencv",
//     },
//   ],
// },
// {
//   name: "Lensinator",
//   url: " ",
//   description:
//     "Published on Play Store back in 2017, crossed 55K downloads. Performed object detection, image captioning, OCR, handwritten OCR, barcode and QR code scanning with product information.",
//   languages: [
//     {
//       name: "JavaScript",
//       iconifyClass: "logos-java",
//     },
//     {
//       name: "Python",
//       iconifyClass: "logos-python",
//     },
//     {
//       name: "Firebase",
//       iconifyClass: "logos-firebase",
//     },
//   ],
// },
// {
//   name: "Doorbell.io",
//   url: "https://github.com/Hrishi1999/Doorbell.io",
//   description:
//     "A sound-classifier webapp made with ReactJS + TensorflowJS.",
//   languages: [
//     {
//       name: "Python",
//       iconifyClass: "logos-python",
//     },
//     {
//       name: "ReactJS",
//       iconifyClass: "logos-react",
//     },
//     {
//       name: "TensorflowJS",
//       iconifyClass: "logos-tensorflow",
//     },
//   ],
// },
// {
//   name: "Video Summarization",
//   url: "https://github.com/Hrishi1999/Video-Summarization",
//   description:
//     "A video summarization webapp. A Flask-based backend which servers the Tensorflow model and a frontend made in ReactJS.",
//   languages: [
//     {
//       name: "JavaScript",
//       iconifyClass: "logos-javascript",
//     },
//     {
//       name: "Python",
//       iconifyClass: "logos-python",
//     },
//     {
//       name: "ReactJS",
//       iconifyClass: "logos-react",
//     },
//     {
//       name: "Tensorflow",
//       iconifyClass: "logos-tensorflow",
//     },
//   ],
// },
// {
//   name: "Dashboard Activity",
//   url: "https://github.com/Hrishi1999/Dashboard.activity",
//   description:
//     "Google Summer of Code project. A Dashboard activity for Sugar OS which tracks user activity so user can know where they use their most time and where they create most files.",
//   languages: [
//     {
//       name: "Python",
//       iconifyClass: "logos-python",
//     },
//   ],
// },
// {
//   name: "Project Pickle",
//   url: " ",
//   description:
//     "An app similar to Uber Eats but targeted for Gruhudhyogs (homemade pickles and products). Order management, live order tracking, rating and reviews system, etc.",
//   languages: [
//     {
//       name: "Java",
//       iconifyClass: "logos-java",
//     },
//     {
//       name: "Firebase",
//       iconifyClass: "logos-firebase",
//     },
//     {
//       name: "Python",
//       iconifyClass: "logos-python",
//     },
//   ],
// },
// {
//   name: "Project Health Card",
//   url: "",
//   description:
//     "An aadhard-card like utility card which keeps track of all your health records suchs as: Medicines, Lab Reports, Recent Diseases, Allergies, etc.",
//   languages: [
//     {
//       name: "JavaScript",
//       iconifyClass: "logos-java",
//     },
//     {
//       name: "Python",
//       iconifyClass: "logos-python",
//     },
//     {
//       name: "Firebase",
//       iconifyClass: "logos-firebase",
//     },
//     {
//       name: "ReactJS",
//       iconifyClass: "logos-react",
//     },
//     {
//       name: "MongoDB",
//       iconifyClass: "logos-mongodb",
//     },
//   ],
// },
// {
//   name: "Food Classifier",
//   url: " ",
//   description:
//     "A food classifier app using tflite which classfier over 50 Indian Dishes.",
//   languages: [
//     {
//       name: "Flutter",
//       iconifyClass: "logos-flutter",
//     },
//     {
//       name: "Dart",
//       iconifyClass: "logos-dart",
//     },
//     {
//       name: "Tensorflow",
//       iconifyClass: "logos-tensorflow",
//     },
//     {
//       name: "Jupyter Notebook",
//       iconifyClass: "logos-jupyter",
//     },
//   ],
// },
// {
//   name: "Image Clustering",
//   url: " ",
//   description:
//     "A simple use of K-Means Clustering algorithm to sort images by automatically predicting number of classes. This can be used to clean an image dataset.",
//   languages: [
//     {
//       name: "Python",
//       iconifyClass: "logos-python",
//     },
//     {
//       name: "Jupyter Notebook",
//       iconifyClass: "logos-jupyter",
//     },
//   ],
// },
// {
//   name: "Antivirus",
//   url: " ",
//   description:
//     "A project from 2012. Made an antivirus with realtime scanning. Implemented by using comparison of md5 hashes.",
//   languages: [
//     {
//       name: "Visual Basic",
//       iconifyClass: "logos-dotnet",
//     },
//   ],
// },
// {
//   name: "Sugar on Windows",
//   url: " ",
//   description:
//     "Run and setup Sugar OS to be able to run on Windows using Windows Subsystem for Linux",
//   languages: [
//     {
//       name: "Visual Basic",
//       iconifyClass: "logos-dotnet",
//     },
//     {
//       name: "Python",
//       iconifyClass: "logos-python",
//     },
//   ],
// },
// {
//   name: "Object + Face Detection",
//   url: " ",
//   description: "2017 project. Object detection + accurate face detection.",
//   languages: [
//     {
//       name: "Python",
//       iconifyClass: "logos-python",
//     },
//     {
//       name: "Tensorflow",
//       iconifyClass: "logos-tensorflow",
//     },
//     {
//       name: "OpenCV",
//       iconifyClass: "logos-opencv",
//     },
//   ],
// },
// {
//   name: "Image Captioning with Visual Attention",
//   url: " ",
//   description: "Ongoing. Used MSCOCO 2014/2017 for image captioning.",
//   languages: [
//     {
//       name: "Python",
//       iconifyClass: "logos-python",
//     },
//     {
//       name: "Tensorflow",
//       iconifyClass: "logos-tensorflow",
//     },
//     {
//       name: "Jupyter Notebook",
//       iconifyClass: "logos-jupyter",
//     },
//   ],
// },
// {
//   name: "DalSocial",
//   url: " ",
//   description:
//     "An Android app to meet new people in the university, organize and join events. ",
//   languages: [
//     {
//       name: "Kotlin",
//       iconifyClass: "simple-icons:kotlin",
//       color: "#F18E33",
//     },
//     {
//       name: "Android",
//       iconifyClass: "simple-icons:android",
//       color: "#3DDC84",
//     },
//     {
//       name: "Firebase",
//       iconifyClass: "logos-firebase",
//     },
//   ],
// },
// {
//   name: "HalifaxFoodie",
//   url: " ",
//   description:
//     "CSCI5410 Project. A multi-client recipe app for Halifax Foodies.",
//   languages: [
//     {
//       name: "ReactJS",
//       iconifyClass: "logos-react",
//     },
//     {
//       name: "AWS",
//       iconifyClass: "logos-aws",
//     },
//     {
//       name: "Google Cloud",
//       iconifyClass: "logos-google-cloud",
//     },
//   ],
// },
