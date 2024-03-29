import React, { useEffect } from "react";
import classes from "../styles/Project.module.css";
import ProjectCard from "../UI/ProjectCard";
import { animateScroll as scroll } from "react-scroll";
import { v4 as uuid } from "uuid";

const project = [
  {
    id: 1,
    title: "Cultfit Clone",
    desc: "This website provides you with healthy food and good lifestyle features. It is completely responsive with entire product flow. This was part of a group project. I learned to use bootstrap and API during this project.",
    netlify: "https://charming-kleicha-f7531f.netlify.app/",
    git: "https://github.com/ROY-AMAN/Cult-Fit-clone",
    resp: "I build Eat page from where you can order food. Food can be added to cart from where payment can be made. A veg filter has been added form all vegeterians. I also created checkout page.",
    img: "/cult1.png",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  // {
  //   id: 2,
  //   title: "BigBasket Clone",
  //   desc: "This website provides you with personal and home decoration items. This website is responsive with entire product flow. This was part of a group project. I learned to use mongodb, redis and docker in this project",
  //   netlify: "https://bigbasket-clone-web16.netlify.app/",
  //   git: "https://github.com/jeny008/quixotic-snail-9802",
  //   resp: "I developed backend for this website. MongoDB used as primary database. Redis was used to store, verify and expire otp. Inplemented Authorization using cookies",
  //   img: "/bigbasket.png",
  //   tech: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "React",
  //     "Redux",
  //     "ExpressJS",
  //     "MongoDB",
  //     "Redis",
  //     "Heroku",
  //   ],
  // },
  {
    id: 3,
    title: "OverStock Clone",
    desc: "This website provides you with personal and home decoration items. This website is responsive with entire product flow. This was part of a group project. I learned to use Dom manipulation during this project",
    netlify: "https://profound-praline-6eee04.netlify.app/ ",
    git: "https://github.com/amananshul/Over_Stock_project",
    resp: "I build jewellery and furniture page. I included sorting by price and few filter method. This makes good user experience. I also made the footer component.",
    img: "/overstock1.png",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    title: "Max Faxhion Clone",
    desc: "This website provides you with clothing. This website is responsive with entire product flow. This was part of a group project.",
    netlify: "https://leafy-sorbet-dccc4d.netlify.app/",
    git: " https://github.com/kakashi10-23/Max-clone",
    resp: "I build Home page and cart page of this website. I learn to use tailwind library and moch-server during this project. I also made the footer component",
    img: "/max1.png",
    tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
  },
  // {
  //   id: 4,
  //   title: "Blogging App",
  //   desc: "This is a blogging application where you can write blog and ",
  //   netlify: "https://incredible-figolla-9ff290.netlify.app/",
  //   git: "https://github.com/masai-course/tapish_fw16_560/tree/master/Unit%205/sprint-1/day-3/assignments",
  //   resp: "This was create using custom hooks and react-redux.",
  //   img: "/clock.png",
  //   tech: ["HTML", "CSS", "JavaScript", "React", "Redux"],
  // },
];

const Project = ({ myref }) => {
  useEffect(() => {
    scroll.scrollToTop();
  });
  return (
    <>
      <section className={classes.project} ref={myref}>
        <div className={classes.project_container}>
          {project.map(({ id, title, desc, netlify, git, resp, img, tech }) => (
            <ProjectCard
              key={uuid()}
              id={id}
              title={title}
              desc={desc}
              netlify={netlify}
              git={git}
              resp={resp}
              img={img}
              tech={tech}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;

// https://charming-kleicha-f7531f.netlify.app/checkout.html   cultfit
// https://profound-praline-6eee04.netlify.app/cart.html       overstock
// https://leafy-sorbet-dccc4d.netlify.app/                     maxfashion
