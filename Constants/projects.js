// import project demo images as follows.
const PROJECT1_1 = "/projects/Project1_1.jpg";
const PROJECT1_2 = "/projects/Project1_2.jpg";
const PROJECT2_1 = "/projects/Project2_1.jpg";
const PROJECT2_2 = "/projects/Project2_2.jpg";
const PROJECT2_3 = "/projects/Project2_3.jpg";
const PROJECT3_1 = "/projects/Project3_1.jpg";
const PROJECT3_2 = "/projects/Project3_2.jpg";

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
  //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
  //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
  {
    name: "실습으로 배우는 SQL Injection", //project name
    description:
      "제주대학교 정보보안 동아리 'CrackUs'에서 부회장을 맡으며, '실습으로 배우는 SQL Injection' 책 작성과 실습 사이트 구현을 도왔습니다. 실습서 독자들을 위해 PHP와 MySQL로 간단한 사이트를 만들었고, CTF 문제들을 업로드하여 책에 내용을 쉽게 배울 수 있게 했습니다. 제주도에 부족한 보안 공부 인프라를 위해 책과 사이트를 홍보하며 제주 보안 커뮤니티 활성화에 기여하였습니다.", //project description
    githubLink: "https://github.com/stanaly", //github repo link
    projectLink: "/", //deployed project link
    tech: ["보안", "개발", "동아리"], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
    photo: [PROJECT1_1, PROJECT1_2], //list of names of images from above imports.
  },
  {
    name: "육군 사이버작전센터",
    description:
      "육군 사이버작전센터에서 CERT병으로 근무하며 육군 사이버보안 최전선을 지켰습니다. 주 업무는 보안사고 대응을 하였으며, 부분적으로 악성코드 분석과 네트워크 공격 분석 업무를 맡았습니다. 동기들과 대회에 참가하여 '화이트햇 콘테스트 합참의장상'과 '국방오픈소스아카데미 해커톤 육군참모총장상'을 수상했습니다.",
    githubLink: "https://github.com/stanaly",
    projectLink: "/",
    tech: ["보안", "개발", "군복무"],
    photo: [PROJECT2_1, PROJECT2_2, PROJECT2_3],
  },
  {
    name: "팀 리드미",
    description:
      "제주 개발자 커뮤니티 활성화를 위해 제주대학교 개발 동아리 '리드미'를 개설하였습니다. 팀 리드미는 웹·AI·게임·보안 등 여러 분야에 관심 있는 사람들이 모여서 협업을 통해 프로젝트를 진행하고, 본인 관심 분야와 관련하여 글을 작성해서 발표하는 활동을 하고 있습니다. 저는 팀 인원들을 관리하고, 협업 가이드북 작성과 프로젝트 리뷰를 진행하고 있습니다. 또한, 개발 입문자들을 모아서 CS와 프로그래밍을 주제로 수업도 진행하고 있습니다.",
    githubLink: "https://github.com/rleadme",
    projectLink: "/",
    tech: ["개발", "동아리", "운영"],
    photo: [PROJECT3_1, PROJECT3_2],
  },
];
