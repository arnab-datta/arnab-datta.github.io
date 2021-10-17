import email from "../assets/icon/email.png";
import facebook from "../assets/icon/facebook.svg";
import github from "../assets/icon/github.svg";
import instagram from "../assets/icon/instagram.svg";
import linkedin from "../assets/icon/linkedin.svg";
import stackoverflow from "../assets/icon/stackoverflow.svg";
import twitter from "../assets/icon/twitter.svg";

const STATIC_DATA = {
  profilesArr: [
    {
      id: "li",
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/datta-arnab/",
      iconlink: linkedin,
      color: "#007fc4",
    },
    {
      id: "gh",
      name: "GitHub",
      link: "https://github.com/arnab-datta",
      iconlink: github,
      color: "#0e0e0e",
    },

    {
      id: "so",
      name: "Stack Overflow",
      link: "https://stackoverflow.com/users/7554145/arnab-datta?tab=profile",
      iconlink: stackoverflow,
      color: "#f48225",
    },
    // {
    //   id: "em",
    //   name: "Email",
    //   link: "mailto:dattaarnab2013@gmail.com",
    //   iconlink: email,
    //   color: "linear-gradient(45deg, #d5135a, #f05924)",
    // },
    {
      id: "fb",
      name: "Facebook",
      link: "https://www.facebook.com/arnab.datta.babai/",
      iconlink: facebook,
      color: "#3b5a9a",
    },
    {
      id: "ins",
      name: "Instagram",
      link: "https://www.instagram.com/urs_arnab_/",
      iconlink: instagram,
      color:
        "linear-gradient(45deg, #405de6,#5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
    },
    {
      id: "tw",
      name: "Twitter",
      link: "https://twitter.com/ArnabDatta8",
      iconlink: twitter,
      color: "#60a9dc",
    },
  ],
  skillsArray: [
    {
      id: 1,
      skillsHeading: "Languages",
      dataArr: [
        {
          sid: 1,
          skill_name: "JavaScript",
          skill_percentage: "90",
          skill_color: "#a470f8",
        },
        {
          sid: 2,
          skill_name: "C#",
          skill_percentage: "60",
          skill_color: "#84dcc5",
        },
        {
          sid: 3,
          skill_name: "TypeScript",
          skill_percentage: "30",
          skill_color: "#f3d547",
        },
        {
          sid: 4,
          skill_name: "Java",
          skill_percentage: "30",
          skill_color: "#f25f5c",
        },
        {
          sid: 5,
          skill_name: "Python",
          skill_percentage: "30",
          skill_color: "#a470f8",
        },
        {
          sid: 6,
          skill_name: "PHP",
          skill_percentage: "30",
          skill_color: "#84dcc5",
        },
        {
          sid: 7,
          skill_name: "C",
          skill_percentage: "30",
          skill_color: "#f3d547",
        },
      ],
    },
    {
      id: 2,
      skillsHeading: "Frontend",
      dataArr: [
        {
          sid: 1,
          skill_name: "HTML",
          skill_percentage: "90",
          skill_color: "#a470f8",
        },
        {
          sid: 2,
          skill_name: "CSS",
          skill_percentage: "90",
          skill_color: "#84dcc5",
        },
        {
          sid: 3,
          skill_name: "JQuery",
          skill_percentage: "80",
          skill_color: "#f3d547",
        },
        {
          sid: 4,
          skill_name: "Angular",
          skill_percentage: "70",
          skill_color: "#f25f5c",
        },
        {
          sid: 5,
          skill_name: "React.js",
          skill_percentage: "50",
          skill_color: "#a470f8",
        },
      ],
    },
    {
      id: 3,
      skillsHeading: "Backend and API",
      dataArr: [
        {
          sid: 1,
          skill_name: "MySQL",
          skill_percentage: "70",
          skill_color: "#a470f8",
        },
        {
          sid: 2,
          skill_name: "ASP.NET",
          skill_percentage: "70",
          skill_color: "#84dcc5",
        },
        {
          sid: 3,
          skill_name: "Node.js & Express.js",
          skill_percentage: "40",
          skill_color: "#f3d547",
        },
      ],
    },
    {
      id: 4,
      skillsHeading: "Tools",
      dataArr: [
        {
          sid: 1,
          skill_name: "Git",
          skill_percentage: "80",
          skill_color: "#a470f8",
        },
        {
          sid: 2,
          skill_name: "Postman",
          skill_percentage: "80",
          skill_color: "#84dcc5",
        },
      ],
    },
  ],
};

export default STATIC_DATA;
