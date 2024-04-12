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
  title2: "TY-BCA",
  logo_name: "BMI",
};

export const PortfolioData = {
  para: "Shree Bhawani Musical Instrument and Classes is a distinguished institution dedicated to the preservation and dissemination of Indian classical music traditions. We specialize in providing comprehensive training in instruments like Pakhawaj, Tabla, and others, imparting both theoretical knowledge and practical skills to our students.",

  para2: "At Shree Bhawani, we take pride in offering expert guidance from seasoned musicians and educators who are passionate about nurturing talent and instilling a deep appreciation for the rich heritage of Indian classical music. Our curriculum is meticulously designed to cater to students of all skill levels, from beginners to advanced learners.",

  para3: "In addition to our educational endeavors, we also boast a state-of-the-art manufacturing facility where we handcraft high-quality Pakhawaj and Tabla instruments. Each instrument is crafted with precision and care, using traditional techniques passed down through generations, ensuring exceptional sound quality and durability."
}

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

// home,news and admissions,gallery,faculity,aboutus and contacts

export const Navbar=[
  {
    id:1,
    title:"Home",
    className:"homei",
    to:"/home",
    activeStyle:'{ fontWeight: "bold" }',
    // style:' borderRadius: 5, color: theme.text '
  },
  {
    title:"news and admissions",
    className:"homei",
    to:"/updates",
    activeStyle:'{ fontWeight: "bold" }',
    // style:'{ borderRadius: 5, color: theme.text }'
  },
  {
    title:"gallery",
    className:"homei",
    to:"/gallery",
    activeStyle:'{ fontWeight: "bold" }',
    // style:'{ borderRadius: 5, color: theme.text }'
  },
  {
    title:"faculty",
    className:"homei",
    to:"/faculty",
    activeStyle:'{ fontWeight: "bold" }',
    // style:'{ borderRadius: 5, color: theme.text }'
  },
  {
    title:"aboutus and contacts",
    className:"homei",
    to:"/aboutUs",
    activeStyle:'{ fontWeight: "bold" }',
    // style:'{ borderRadius: 5, color: theme.text }'
  }

]


export {
  settings,
  greeting,
  socialMediaLinks,
};




