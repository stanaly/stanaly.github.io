//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import {
  faGithubAlt,
  faLinkedinIn,
  faMediumM,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

export const userinfo = {
  logoText: "현규의 공간", //This text is visible on your navbar and footer like your logo.
  contact: {
    email: "tlsgusrb70@email.com", //It is always a good idea to mention your email on your website. Good platform to communicate.
    phone: "010-8766-9825", //Phone number is optional, if you dont want it, consider leaving it blank .
    countrycode: "+82", //It is advisable to add the country code incase you mention your contact number.
  },
  socials: [
    //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
    //more icons are imported above, use as you like them.
    { type: "github", link: "https://github.com/stanaly", icon: faGithubAlt },
    { type: "linkedin", link: "", icon: faLinkedinIn },
    { type: "medium", link: "", icon: faMediumM },
  ],
  greeting: {
    //this text goes on your landing page
    title: "안녕하세요. 고민하는 개발자 신현규입니다.",
    subtitle:
      "블록체인과 웹해킹을 좋아하는 개발자입니다. 컴퓨터공학과 블록체인보안을 전공하고 있는 학생입니다. 목표를 설정하여 완수하는 것과 여러 사람들의 의견을 듣는 것을 좋아합니다. 문제를 마주할 때 고민을 하면서 본질을 파악하는 것을 추구합니다. 2023년부터 제주대학교 학생을 대상으로 개발 팀 ‘리드미’를 만들어 운영하고 있습니다. 현재는 스마트 계약과 DAO에 관심을 가지고 있습니다.",
  },
  capabilities: [
    //this text goes on your home page in table format.
    //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
    //For aesthetics, it is advisable for you to keep similar number of skills in each category
    {
      category: "frontend", // eg.frontend, backend, devops etc
      skills: ["React", "Angular", "Vue"], //eg. react, html, python etc.
    },
    {
      category: "backend",
      skills: ["Express", "Django", "Spring"],
    },
    {
      category: "blockchain",
      skills: ["Ethereum", "EOSIO", "Hyperledger Fabric"],
    },
    {
      category: "hacking",
      skills: ["Web", "Network", "System"],
    },
  ],
  about: {
    //this text goes at the bottom of your home page.
    content:
      "제주도에서 자라며 어린 나이부터 컴퓨터에 관심이 많았습니다. 주변에 개발 학원이나 커뮤니티가 없어서 일단 혼자 무작정 C언어를 공부하였습니다. 메모리 접근과 비트 연산 등 이해하기 어려운 지식들이 많아서 간단한 개념도 이해하는데 정말 많은 시간을 써야만 했습니다. 공부 방법도 방향도 모르는 상태로 컴퓨터와 관련된 지식들은 모두 흡수하려고 했습니다. 대학교 입학 전까지 실속없는 공부만 하다가 학교에서 좋은 선배들을 만나 공부 방향을 잡을 수 있었고, 빠르게 성장할 수 있었습니다. 선배들 덕분에 점점 더 전문적인 경험을 할 수 있었고, 주변에 실력자들도 많이 알게 되었습니다. 저는 유년기에 겪었던 일들을 다른 사람들도 겪지 않았으면 하는 마음에 선배들에게 받은 도움을 후배들에게, 더 나아가 어려움을 겪고 있는 제주도 개발 입문자들에게 주고 싶습니다. 아직 저도 많이 부족하지만, 서로 알려주고 도와줄 수 있는 활발한 제주 개발자 커뮤니티를 만드는데 기여하고 싶습니다.",
    resume: "/", //link your resume here. it can be drive link or any other link
  },
  education: {
    visible: true, //set this to false if you want to omit this section
    educationList: [
      {
        time: "2019년 03월", //timespan
        title: "대학교 입학", //eg. BTech in Compuster Engineering
        organization: "1학년", //eg. VJTI, Mumbai
        description:
          "정보보안 동아리 활동을 중심으로 해커톤 참가, 주니어 논문 작성, 고등학교 멘토링, CTF 실습 사이트 제작 등 신입생의 패기로 최대한 많은 경험을 하기 위해 노력했습니다.", //eg. secured a cgpa of 9.25 in all sems appeared in so far
      },
      {
        time: "2021년 07월",
        title: "군입대 ",
        organization: "육군",
        description:
          "대규모 네트워크를 관리하면서 많은 경험을 할 수 있었고, 실력이 좋은 동기들과 해킹방어대회와 SW해커톤을 참가하면서 세상을 보는 시야를 넓힐 수 있었습니다.",
      },
      {
        time: "2022년 01월",
        title: "대학교 복학",
        organization: "3학년",
        description:
          "정보보안 전문가의 꿈을 접고, 블록체인 개발자가 되기 위해 공부하고 있습니다. 또한, 제주도 개발자 커뮤니티 활성화를 목표로 제주대학교 개발 동아리를 만들어 운영하고 있습니다.",
      },
    ],
  },
  experience: {
    visible: false, //set this to false if you want to omit this section
    experienceList: [
      {
        company: "Dunder Mifflin", //company name eg.Microsoft
        companylogo:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*", //companylogo
        position: "Regional Manager", //post you held eg.Senior SDE
        time: "March 2020 - May 2020", //timespan
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum", //eg. spearheaded the graphics team in designing SASS product UIs
      },
      {
        company: "Dunder Mifflin",
        companylogo:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*",
        position: "Regional Manager",
        time: "March 2020 - May 2020",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
      },
      {
        company: "Dunder Mifflin",
        companylogo:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*",
        position: "Regional Manager",
        time: "March 2020 - May 2020",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
      },
    ],
  },
  blogs: {
    //set this to false if you want to omit this section
    visible: false,
  },
};

export const headings = {
  //you can customise all the headings here.
  workHomePage: "저는 경험을 좋아합니다.",
  workMainPage: "경험",
  capabilities: "기술 스택",
  about: "저는",
  education: "히스토리",
  experience: "Experiences",
  blogs: "I write!",
  contact: "문의 하기",
};

export const ctaTexts = {
  //you can customise all the cta texts here.
  landingCTA: "활동 보기",
  workCTA: "전체 보기",
  capabCTA: "연락 하기",
  educationCTA: "저는",
  resumeCTA: "위로 가기",
  submitBTN: "보내기",
};
