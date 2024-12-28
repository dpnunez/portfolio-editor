import { FadeIn, MainContent } from "@/components";
import Image from "next/image";

function Page() {
  return (
    <FadeIn>
      <MainContent className="markdown">
        <h1># Softplan</h1>

        <span>
          {">"} <b>**Started in July 2024**</b>
        </span>
        <Image
          className="mx-auto rounded-lg my-8"
          src="/images/works/softplan-banner.png"
          width={800}
          height={800}
          alt="Softplan"
        />
        <h2>## Company Overview</h2>
        <p>
          Softplan is a business focused on providing technological solutions to
          the construction sector.
        </p>
        <h2>## My Role</h2>
        <p>
          I started working at Softplan in <b>**July 2024**</b> as part of the
          development team, contributing to two main goals in the company:
        </p>
        <h3>
          ### 1. <b>**Single Sign-On (SSO) Solution**</b>
        </h3>
        <div className="flex gap-8 items-center">
          <div>
            <p>
              We are building a comprehensive <b>**SSO solution**</b> to serve
              the entire business ecosystem. The system includes several key
              features:
            </p>
            <ul>
              <li>
                <b>**Roles**</b> management: Define user permissions and access
                controls.
              </li>
              <li>
                <b>**Organization**</b>: Manage organizational units and teams.
              </li>
              <li>
                <b>**External Providers**</b>: Allow login via third-party
                authentication providers (e.g., Google, Facebook).
              </li>
              <li>
                <b>**TOTP (Time-Based One-Time Password)**</b>: Implementing
                two-factor authentication for enhanced security.
              </li>
              <li>
                <b>**MFA (Multi-Factor Authentication)**</b>: Adding another
                layer of security beyond the traditional password-based login.
              </li>
            </ul>
          </div>
          <Image
            className="rounded-2xl"
            alt="sienge-id"
            src="/images/works/sienge-id.png"
            width={600}
            height={300}
          />
        </div>
        <h3>
          ### 2. <b>**API Gateway**</b>
        </h3>
        <p>
          The second major focus is the <b>**API Gateway**</b> project, which
          serves as a central point for managing requests and routing them to
          the correct services. It includes:
        </p>
        <ul>
          <li>
            <b>**Authentication and Authorization**</b> for all incoming API
            requests.
          </li>
          <li>
            <b>**Rate Limiting**</b> and <b>**Caching**</b> for improved
            performance and resource management.
          </li>
          <li>
            <b>**Service Discovery**</b> for dynamic routing to backend
            services.
          </li>
          <li>
            <b>**Precification**</b>: The API Gateway also provides detailed API
            documentation and precise management of data access, ensuring that
            every service is described and handled accurately.
          </li>
        </ul>
        <h3>### Technologies Used:</h3>
        <ul>
          <li>
            <b>**SSO**</b>: OAuth2, OpenID Connect, Java Spring Boot, React,
            Next.js
          </li>
          <li>
            <b>**API Gateway**</b>: KrakenD, Kong, Go, Scalar, React
          </li>
          <li>
            <b>**Security**</b>: TOTP, MFA, Two-Factor Authentication
          </li>
        </ul>
      </MainContent>
    </FadeIn>
  );
}

export default Page;
