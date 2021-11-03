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
  artsImagesArray: [
    {
      img_id: 1,
      img_name: "Death Note L",
      img_desc: "",
      img_src:
        "https://images.unsplash.com/photo-1635969185655-dc6a8653df0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1618&q=80",
    },
    {
      img_id: 2,
      img_name: "Rabindranth Tagore",
      img_desc: "",
      img_src:
        "https://images.unsplash.com/photo-1635969186461-555d932eeefc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=716&q=80",
    },
    {
      img_id: 3,
      img_name: "Cristiano Ronaldo",
      img_desc: "",
      img_src:
        "https://images.unsplash.com/photo-1635969186533-52ac532e9e1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80",
    },

    {
      img_id: 4,
      img_name: "Design 1",
      img_desc: "",
      img_src:
        "https://images.unsplash.com/photo-1635969185603-a38441612759?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    },

    {
      img_id: 5,
      img_name: "Parrot",
      img_desc: "",
      img_src:
        "https://images.unsplash.com/photo-1635969187109-2290659bc61e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
    },
    {
      img_id: 6,
      img_name: "Design 2",
      img_desc: "",
      img_src:
        "https://images.unsplash.com/photo-1635969186981-6796c8d2a5da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80",
    },
    {
      img_id: 7,
      img_name: "Cranes bird",
      img_desc: "",
      img_src:
        "https://images.unsplash.com/photo-1635969187039-f5ce3d3034eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=999&q=80",
    },
    {
      img_id: 8,
      img_name: "Kolkata",
      img_desc: "",
      img_src:
        "https://images.unsplash.com/photo-1635969187012-adc75df885b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
    },
    {
      img_id: 9,
      img_name: "Girl after dance",
      img_desc: "",
      img_src:
        "https://images.unsplash.com/photo-1635969186943-67cdfb8d14a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1095&q=80",
    },
    {
      img_id: 10,
      img_name: "Rickshaw & Street Life",
      img_desc: "",
      img_src:
        "https://images.unsplash.com/photo-1635969186933-6a6a5f357094?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1086&q=80",
    },
  ],
};

export default STATIC_DATA;
