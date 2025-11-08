"use client";

import Layout from "../../components/layout";
import { useEffect } from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

const B = ({ children }: ChildrenProps) => <strong>{children}</strong>;
const Ul = ({ children }: ChildrenProps) => (
  <ul>
    {children}
    <style jsx>{`
      ul {
        padding-left: calc(0.5rem - 1px);
      }
      @media (min-width: 45rem) {
        ul {
          padding: 0;
        }
      }
    `}</style>
  </ul>
);
const Li = ({ children }: ChildrenProps) => (
  <li>
    <span>{children}</span>
    <style jsx>{`
      li {
        margin: 1rem 0;
      }
      span {
        position: relative;
        left: calc(-0.5rem + 1px);
      }
      @media (min-width: 45rem) {
        span {
          left: 0;
        }
      }
      @media print {
        li {
          margin: 0.25rem 0 0.25rem 0.3rem;
        }
      }
    `}</style>
  </li>
);
const H3 = ({ children }: ChildrenProps) => (
  <h3>
    {children}
    <style jsx>{`
      h3 {
        font-size: 1rem;
        font-weight: normal;
        margin: 1.5rem 0;
      }
      @media (min-width: 45rem) {
        h3 {
          margin: 2rem 0 1.5rem;
        }
      }
      @media print {
        h3 {
          margin: 0rem;
        }
      }
    `}</style>
  </h3>
);

const GOVUK = () => (
  <a href="https://www.gov.uk" target="_blank">
    GOV.UK
  </a>
);
const GaaP = () => (
  <a href="https://governmentasaplatform.blog.gov.uk/" target="_blank">
    GaaP
  </a>
);
const MigrationProgramme = () => (
  <a
    href="https://insidegovuk.blog.gov.uk/2016/06/30/migration-update-june-2016/"
    target="_blank"
  >
    Migration programme
  </a>
);
const GOVUKExperience = () => (
  <Li>
    Rebuild GOV.UK formats as part of the <B>Migration Programme</B> team,
    moving from the legacy monolith publisher to a <B>microservices</B>{" "}
    pipeline. <B>Ruby on Rails</B>, <B>TDD</B>, <B>Agile</B>.
  </Li>
);
const WebchatAlpha = () => (
  <a href="https://github.com/alphagov/webchat-alpha" target="_blank">
    Webchat Alpha
  </a>
);
const WroteAWebchatBlogPost = () => (
  <a
    href="https://accessibility.blog.gov.uk/2016/12/09/patterns-for-accessible-webchats/"
    target="_blank"
  >
    wrote a blog post
  </a>
);
const ViewTransformationDependencies = () => (
  <a
    href="https://github.com/alphagov/transformation-dependencies"
    target="_blank"
  >
    view digital transformation dependencies
  </a>
);
const OpenSourceCountryPicker = () => (
  <a
    href="https://github.com/alphagov/openregister-location-picker"
    target="_blank"
  >
    open source country picker component
  </a>
);
const AccessibleAutocomplete = () => (
  <a href="https://github.com/alphagov/accessible-typeahead" target="_blank">
    accessible autocomplete component
  </a>
);
const SuggestionEngine = () => (
  <a
    href="https://github.com/alphagov/openregister-picker-engine"
    target="_blank"
  >
    suggestion engine
  </a>
);
const GenerateCountryPickerData = () => (
  <a
    href="https://github.com/openregister/generate-picker-data-file"
    target="_blank"
  >
    generate country picker data
  </a>
);
const DAC = () => (
  <a href="http://www.digitalaccessibilitycentre.org/" target="_blank">
    Digital Accessibility Centre
  </a>
);

const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });

interface TimeProps {
  iso: string;
}

const Time = ({ iso }: TimeProps) => <time dateTime={iso}>{formatDate(iso)}</time>;

interface PeriodProps {
  period: [React.ReactNode, React.ReactNode];
}

const Period = ({ period: [from, to] }: PeriodProps) => (
  <>
    {from} - {to}
  </>
);

interface JobProps {
  employer: string;
  period: [string | null, string | null];
  title: string;
}

const Job = ({ employer, period, title }: JobProps) => (
  <H3>
    <div>
      <span className="employer">
        <B>{employer}</B>
      </span>
      <span className="title">{title}</span>
      <span className="period">
        <Period
          period={period.map((p) =>
            p === null ? "Present" : <Time iso={p} />
          )}
        />
      </span>
    </div>
    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
      }
      @media print, (min-width: 45rem) {
        div {
          flex-direction: row;
        }
        span {
          width: calc(100% / 3);
        }
        .title {
          text-align: center;
        }
        .period {
          text-align: right;
        }
      }
    `}</style>
  </H3>
);

const GamesysCom = () => (
  <a href="http://www.gamesyscorporate.com" target="_blank">
    Gamesys
  </a>
);

const GraphitCom = () => (
  <a href="https://graphit.com" target="_blank">
    Graphit.com
  </a>
);

const Tachyons = () => (
  <a href="http://tachyons.io" target="_blank">
    Tachyons.io
  </a>
);

const Cypress = () => (
  <a href="https://www.cypress.io" target="_blank">
    Cypress.io
  </a>
);

const Jest = () => (
  <a href="https://facebook.github.io/jest/" target="_blank">
    Jest.js
  </a>
);

const Sentry = () => (
  <a href="https://sentry.io/for/javascript/" target="_blank">
    Sentry.js
  </a>
);

const Babel = () => (
  <a href="https://babeljs.io" target="_blank">
    Babel.js
  </a>
);

const ReactNative = () => (
  <a href="https://facebook.github.io/react-native/" target="_blank">
    React Native
  </a>
);

const Expo = () => (
  <a href="https://expo.io" target="_blank">
    Expo.io
  </a>
);

const NativeARApp = () => (
  <a href="https://expo.io/@tvararu/graphit-ar" target="_blank">
    native AR application
  </a>
);

const DfEDigital = () => (
  <a href="https://dfedigital.blog.gov.uk" target="_blank">
    DfE Digital
  </a>
);

const FindPostgraduateTeacherTraining = () => (
  <a
    href="https://www.find-postgraduate-teacher-training.service.gov.uk"
    target="_blank"
  >
    Find postgraduate training
  </a>
);

const NHS = () => (
  <section>
    <Job
      employer="NHS"
      period={["2023-01-01", null]}
      title="Tech Lead (Contract)"
    />
    <p>
      Lead development of the <B>Manage vaccinations in schools</B> (Mavis)
      service, a national service used by nurses to record consent and
      vaccinations.
    </p>
  </section>
);

const DfETRA = () => (
  <section>
    <Job
      employer="Department for Education"
      period={["2022-01-01", "2022-12-31"]}
      title="Tech Lead (Contract)"
    />
    <p>
      Lead development of 4 projects across the{" "}
      <B>Teaching Regulation Authority</B> platform, such as a teacher OIDC
      provider, and a service to manage serious misconduct.
    </p>
  </section>
);

const MoJ = () => (
  <section>
    <Job
      employer="Ministry of Justice"
      period={["2021-09-01", "2021-12-01"]}
      title="Senior Developer (Contract)"
    />
    <p>
      Brought in to facilitate an <B>accessibility audit</B> of the{" "}
      <B>Manage Supervisions</B> service within the HMPPS platform. Carry on
      further improvements and fix accessibility issues.
    </p>
  </section>
);

const Facebook = () => (
  <section>
    <Job
      employer="Facebook"
      period={["2021-01-25", "2021-07-09"]}
      title="Software Engineer"
    />
    <p>
      Work on the <B>Workplace</B> product as part of the <B>Web Core</B> team,
      in the <B>Accessibility</B> squad. Triage, identify, and fix accessibility
      issues in the push towards full <B>WCAG 2.2</B> compliance.
    </p>
  </section>
);

const DfEApply = () => (
  <section>
    <Job
      employer="Department for Education"
      period={["2018-09-01", "2020-11-13"]}
      title="Tech Lead (Contract)"
    />
    <p>
      Lead development of the candidate-facing side of{" "}
      <B>Apply for teacher training</B> in <B>Ruby on Rails</B> and{" "}
      <B>JavaScript</B> on <B>Azure</B>. Collaborate with stakeholders,
      architects, and other tech leads to ship MVP in Nov 2019. Iterate in 2020
      to <B>100k+</B> teacher training applications.
    </p>
  </section>
);

const Gamesys = () => (
  <section>
    <Job
      employer="Gamesys"
      period={["2018-03-01", "2018-09-01"]}
      title="Senior Developer (Contract)"
    />
    <p>
      Improve performance and tooling on <B>React</B> and flux-based frontends.
    </p>
  </section>
);

const Graphit = () => (
  <section>
    <Job
      employer="Graphit Systems"
      period={["2017-08-01", "2018-02-01"]}
      title="Senior Developer (Contract)"
    />
    <p>
      Ship a complete redesign, online payments with <B>Stripe</B>, fixes for{" "}
      <B>legacy browsers</B> and <B>performance</B> issues while building on top
      of the previous developer's work without handover. <B>React.js</B>,{" "}
      <B>Three.js</B>, <B>webpack</B>, <B>Redux.js</B>.
    </p>
  </section>
);

const GDS = () => (
  <section>
    <Job
      employer="Government Digital Service"
      period={["2016-03-01", "2017-08-01"]}
      title="Senior Developer"
    />
  </section>
);

const Timecounts = () => (
  <section>
    <Job
      employer="Timecounts"
      period={["2015-05-01", "2016-02-01"]}
      title="Senior Full Stack Developer"
    />
  </section>
);

const Workangel = () => (
  <section>
    <Job
      employer="Workangel"
      period={["2014-09-01", "2015-04-01"]}
      title="Lead Front End Developer"
    />
  </section>
);

const LFA = () => (
  <a href="https://github.com/learnfwd/lfa" target="_blank">
    digital textbook authoring tool
  </a>
);
const GeorgeEnescuFestival = () => (
  <a href="http://festivalenescu.ro/" target="_blank">
    George Enescu festival website
  </a>
);

const ReadForward = () => (
  <section>
    <Job
      employer="ReadForward"
      period={["2013-03-01", "2014-09-01"]}
      title="Lead Full Stack Developer"
    />
  </section>
);

const GitHub = () => (
  <a href="https://github.com/tvararu" target="_blank">
    GitHub profile
  </a>
);
const TheLastQuestion = () => (
  <a href="https://github.com/tvararu/the-last-question" target="_blank">
    Isaac Asimov's The Last Question
  </a>
);
const Dotfiles = () => (
  <a href="https://github.com/tvararu/.dotfiles" target="_blank">
    dotfiles
  </a>
);
const NEBUL4 = () => (
  <a href="https://github.com/tvararu/NEBUL4" target="_blank">
    3D online space flight simulation game
  </a>
);
const Vararuorg = () => (
  <a href="https://github.com/tvararu/vararu.org" target="_blank">
    personal website
  </a>
);
const N7m = () => (
  <a href="https://github.com/tvararu/n7m" target="_blank">
    single-serving numeronym generator app
  </a>
);

export default function Resume() {
  useEffect(() => {
    document.title = "résumé - theodor vararu";
  }, []);

  return (
    <Layout wide>
      <article>
        <h1 className="visuallyhidden">
          Theodor Vararu's Résumé{" "}
          <a href="mailto:theo@vararu.org" style={{ float: "right" }}>
            theo@vararu.org
          </a>
        </h1>

        <section>
          <p>
            👋 I'm a full stack engineer with 12 years of experience and a passion
            for inclusive design. User needs, design systems, performance, and
            accessibility are my jam.
          </p>

          <p>
            I have lead teams, and I don't mind getting my hands dirty across the
            whole stack. I like the Lean Startup method, being an active
            participant in the design and research process, and the Retrospective
            Prime Directive. I have a Bachelor's degree in Engineering.
          </p>
        </section>

        <section>
          <h2>Experience</h2>

          <NHS />
          <DfETRA />
          <MoJ />
          <Facebook />
          <DfEApply />
          <Gamesys />
          <Graphit />
          <GDS />
          <Timecounts />
          <Workangel />
          <ReadForward />
        </section>
      </article>
      <style jsx>{`
        h1,
        h2 {
          font-size: 1.25rem;
          margin: 1.5rem 0;
        }

        @media (min-width: 45rem) {
          h1,
          h2 {
            font-size: 1.5rem;
            margin: 2rem 0 1.5rem;
          }
        }

        @media print {
          h1,
          h2 {
            font-size: 1.25rem;
            margin: 1rem 0 0.5rem;
          }
        }

        @media screen {
          .visuallyhidden {
            border: 0;
            clip: rect(1px, 1px, 1px, 1px);
            height: 1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
          }
        }
      `}</style>
    </Layout>
  );
}
