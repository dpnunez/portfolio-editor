import { FadeIn, MainContent } from "@/components";
import Image from "next/image";

function Page() {
  return (
    <FadeIn>
      <MainContent className="markdown">
        <h1># Nav9</h1>

        <span>
          {">"} <b>**from October 2019 to November 2023**</b>
        </span>
        <Image
          className="mx-auto rounded-lg my-8"
          src="/images/works/nav9-banner.png"
          width={800}
          height={800}
          alt="Nav9"
        />
        <h2>## Company Overview</h2>
        <p>
          Nav9 is a software house that delivers solutions across various
          sectors, including finance, entertainment, and healthcare. They work
          on both national and international projects, helping clients create
          innovative software using the latest technologies.
        </p>
        <h2>## My Role</h2>
        <p>
          I joined Nav9 as an intern in <b>**October 2019**</b> and stayed until{" "}
          <b>**November 2023**</b> as a software developer, where I was involved
          in several diverse projects. Over the course of 4 years, I have gained
          experience in various tech stacks, including React, React Native, Vue,
          and Angular, contributing to projects across a wide range of
          industries.
        </p>
        <h3>### Sectors I Worked In:</h3>
        <ul>
          <li>
            <b>**Education Sector**</b>: Developed platforms used by major
            Brazilian school networks. My work facilitated seamless
            communication, optimized processes, and enhanced the learning
            experience for students, educators, and administrators.
          </li>
          <li>
            <b>**Banking Internal Systems**</b>: Worked on enhancing internal
            banking systems, focusing on the automation and digitization of
            complex forms, ensuring efficiency, security, and user-friendly
            interfaces for financial professionals.
          </li>
          <li>
            <b>**Digital Marketing Projects**</b>: Participated in the creation
            of platforms for digital marketing, particularly simplifying the
            creation of sales funnels and landing pages.
          </li>
          <li>
            <b>**Sports Leagues**</b>: Developed trivia games for prominent
            global sports leagues, creating engaging experiences for fans and
            users.
          </li>
        </ul>
        <h3>### Technologies Used:</h3>
        <ul>
          <li>
            <b>**Languages**</b>: JavaScript, TypeScript, NodeJS
          </li>
          <li>
            <b>**Frameworks and Libraries**</b>: React, React Native, Vue,
            Angular, Node.js, Express, NestJS
          </li>
          <li>
            <b>**Databases**</b>: PostgreSQL, MongoDB, MySQL
          </li>
          <li>
            <b>**Other Technologies**</b>: Docker, Kubernetes, GraphQL, REST
            APIs, AWS
          </li>
        </ul>
        <h3>### Key Contributions:</h3>
        <ul>
          <li>
            Led and contributed to several projects across diverse industries,
            working with various tech stacks.
          </li>
          <li>
            Delivered solutions that enhanced communication, efficiency, and
            user experiences in multiple sectors, such as education, banking,
            digital marketing, and sports.
          </li>
          <li>
            Gained extensive experience in full-stack development, from
            front-end frameworks like React and Angular to back-end services.
          </li>
          <li>
            Collaborated on international projects and managed software products
            through successful deployment and launch phases.
          </li>
        </ul>
      </MainContent>
    </FadeIn>
  );
}

export default Page;
