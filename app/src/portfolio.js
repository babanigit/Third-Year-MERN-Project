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
  // nickname: "",
  // full_name: "",
  // subTitle: "
  // mail: "",
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




