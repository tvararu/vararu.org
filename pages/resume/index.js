import Layout from "../../components/layout";
import Head from "next/head";

const B = ({ children }) => <strong>{children}</strong>;
const Ul = ({ children }) => (
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
const Li = ({ children }) => (
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
const H3 = ({ children }) => (
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
          margin: 1rem 0 0.5rem;
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

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });

const Time = ({ iso }) => <time dateTime={iso}>{formatDate(iso)}</time>;

const Period = ({ period: [from, to] }) => (
  <>
    {from} - {to}
  </>
);

const Job = ({ employer, period, title }) => (
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

const ApplyForTeacherTraining = () => (
  <a
    href="https://www.apply-for-teacher-training.education.gov.uk/candidate"
    target="_blank"
  >
    Apply for teacher training
  </a>
);

const DfEApply = () => (
  <section>
    <Job
      employer="Department for Education"
      period={["2019-09-01", "2020-11-13"]}
      title="Tech Lead (Contract)"
    />
    <Ul>
      <Li>
        ⭐️ Lead development of the candidate-facing side of{" "}
        <ApplyForTeacherTraining /> in <B>Ruby on Rails</B> and{" "}
        <B>JavaScript</B> on <B>Azure</B>. Collaborate with stakeholders,
        architects, and other tech leads to ship MVP in Nov 2019. Iterate in
        2020 to <B>100k+</B> teacher training applications.
      </Li>
      <Li>
        <B>Unblock</B>, <B>pair</B> with, and <B>mentor</B> 6 developers.
        Champion <B>accessibility</B>, frontend <B>performance</B>, and{" "}
        <B>automated testing</B> by prioritising improvements into{" "}
        <B>agile sprints</B>.
      </Li>
    </Ul>
  </section>
);

const DfEFind = () => (
  <section>
    <Job
      employer="Department for Education"
      period={["2018-09-01", "2019-09-01"]}
      title="Senior Developer (Contract)"
    />
    <Ul>
      <Li>
        Develop full-stack features in <B>C#</B>, <B>Ruby on Rails</B>,{" "}
        <B>PostgreSQL</B>, and <B>Node.js</B>, to help teachers{" "}
        <FindPostgraduateTeacherTraining /> courses. Improve the <B>DevOps</B>{" "}
        pipeline by adopting <B>Docker</B>, reducing build times, using{" "}
        <B>Terraform</B>, adding <B>smoke tests</B> using <B>Cypress.io</B>.
      </Li>
      <Li>
        Develop prototypes using <B>Next.js</B>, <B>Now.sh</B>, and{" "}
        <B>Apollo.js</B> to trial <B>Node.js</B>, <B>Serverless</B>, and{" "}
        <B>GraphQL</B> for our services. Present findings to the wider technical
        community to <B>build engagement and awareness</B> of cutting edge
        technologies.
      </Li>
    </Ul>
  </section>
);

const Gamesys = () => (
  <section>
    <Job
      employer="Gamesys"
      period={["2018-03-01", "2018-09-01"]}
      title="Senior Developer (Contract)"
    />
    <Ul>
      <Li>
        Build a tool for managing web chat emoji using <B>Next.js</B>, in record
        time and to a high standard, well tested and documented, with very
        satisfied stakeholders.
      </Li>
      <Li>
        Optimise main site <B>frontend performance</B> by removing{" "}
        <B>moment.js</B> and <B>lodash</B>, resulting in total savings of{" "}
        <B>33%</B> on the bundle size. Provide <B>mentoring</B> to team members
        and apprentices, focusing on a pragmatic but <B>users first</B> approach
        to software engineering.
      </Li>
    </Ul>
  </section>
);

const Graphit = () => (
  <section>
    <Job
      employer="Graphit Systems"
      period={["2017-08-01", "2018-02-01"]}
      title="Senior Developer (Contract)"
    />
    <Ul>
      <Li>
        Ship a complete redesign, online payments with <B>Stripe</B>, fixes for{" "}
        <B>legacy browsers</B> and <B>performance</B> issues while building on
        top of the previous developer's work without handover. <B>React.js</B>,{" "}
        <B>Three.js</B>, <B>webpack</B>, <B>Redux.js</B>.
      </Li>
      <Li>
        Collaborate with the designer to create a revised <B>styleguide</B>,
        consolidating rhythm and colours throughout the app, backed by an atomic
        CSS <B>design system</B>. Champion <B>user research</B> based
        decision-making, highlight and fix <B>accessibility</B> pitfalls, and
        provide input into discussions to reach solutions that are{" "}
        <B>mobile-first</B> and <B>performant</B>.
      </Li>
    </Ul>
  </section>
);

const GDS = () => (
  <section>
    <Job
      employer="Government Digital Service"
      period={["2016-03-01", "2017-08-01"]}
      title="Senior Developer"
    />
    <Ul>
      <Li>
        ⭐️ Lead development of an <OpenSourceCountryPicker />. Talk to service
        teams to learn about their needs, build an <AccessibleAutocomplete />{" "}
        (400+ GitHub stars) using <B>JavaScript</B> and{" "}
        <B>progressive enhancement</B>. Extensive user research, collaborate
        with industry-leading accessibility experts, leverage <B>WCAG</B>, and
        attend a professional audit from the <B>Digital Accessibility Centre</B>
        .{" "}
        <a href="https://www.youtube.com/watch?v=gRVgWT3glII" target="_blank">
          Present it at the London Accessibility Meetup
        </a>
        .
      </Li>
      <Li>
        Sole developer on the <B>Webchat</B> project, building user research
        prototypes and testing with users. Focus on <B>accessibility</B> of
        webchat interfaces. Attend user research, conduct on-site interviews
        with departments using webchat. Did internal presentations,{" "}
        <WroteAWebchatBlogPost />.
      </Li>
      <GOVUKExperience />
    </Ul>
  </section>
);

const Timecounts = () => (
  <section>
    <Job
      employer="Timecounts"
      period={["2015-05-01", "2016-02-01"]}
      title="Senior Full Stack Developer"
    />
    <Ul>
      <Li>
        Ship major features in <B>React</B> and <B>Rails</B> including a
        calendar view and date picker component, landing and marketing pages,
        improvements to the build pipeline, support fixes. Refine the team's{" "}
        <B>Agile</B> processes, implement code review and issue tracking
        methods.
      </Li>
    </Ul>
  </section>
);

const Workangel = () => (
  <section>
    <Job
      employer="Workangel"
      period={["2014-09-01", "2015-04-01"]}
      title="Lead Front End Developer"
    />
    <Ul>
      <Li>
        Ship a <B>mobile-first design</B> rebuild and <B>animations</B> for
        inter-page transitions and more, both not scoped or factored into
        estimations but delivered to extremely favourable reception.
      </Li>
      <Li>
        Dramatically improve the build process by{" "}
        <B>optimising the performance</B> of builds and embracing modern best
        practices: template minification, linting, unit and Selenium integration
        testing, continuous integration, load testing.
      </Li>
    </Ul>
  </section>
);

const LFA = () => (
  <a href="https://github.com/learnfwd/lfa" target="_blank">
    digital textbook authoring tool
  </a>
);
const DeltaApp = () => (
  <a href="https://github.com/readfwd/delta-app" target="_blank">
    tour guide app for the Danube Delta
  </a>
);
const GeorgeEnescuFestival = () => (
  <a href="http://festivalenescu.ro/en/" target="_blank">
    George Enescu festival website
  </a>
);
const MonicaMacovei = () => (
  <a href="https://github.com/readfwd/macovei" target="_blank">
    Monica Macovei's 2014 presidential campaign
  </a>
);

const ReadForward = () => (
  <section>
    <Job
      employer="ReadForward"
      period={["2013-03-01", "2014-09-01"]}
      title="Lead Full Stack Developer"
    />
    <Ul>
      <Li>
        Lead development of an open source <LFA />. Build the pipeline and the
        frontend pattern library. Onboard and train junior developers in its use
        that produced our digital textbook offerings for primary education,
        which became the company's bread and butter product. <B>Node.js</B>,{" "}
        <B>Backbone.js</B>, <B>design systems</B>,{" "}
        <B>visual regression testing</B>.
      </Li>
      <Li>
        Lead development of a <B>Ruby on Rails</B> holistic rewrite of the{" "}
        <GeorgeEnescuFestival />. Write scraping / data remodelling scripts to
        import old pages from the legacy PHP backend, add new capabilities like{" "}
        <B>full text search</B> and relationships between models. Build a{" "}
        <B>RESTful JSON API</B> for native mobile app integrations. Successfully
        served <B>100k+</B> hits per month.
      </Li>
    </Ul>
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

export default () => (
  <Layout wide>
    <Head>
      <title>résumé - theodor vararu</title>
      <meta name="robots" content="noindex,nofollow" />
    </Head>

    <article>
      <h1 className="visuallyhidden">
        Theodor Vararu's Résumé{" "}
        <a href="mailto:theo@vararu.org" style={{ float: "right" }}>
          theo@vararu.org
        </a>
      </h1>

      <section>
        <h2>Summary</h2>

        <p>
          👋 I'm a full stack engineer with 8 years of experience and a passion
          for inclusive design. User needs, design systems, performance, and
          accessibility are my jam.
        </p>

        <p>
          I have lead teams, and I don't mind getting my hands dirty across the
          whole stack. I like the Lean Startup method, being an active
          participant in the design and research process, and the Retrospective
          Prime Directive.
        </p>
      </section>

      <section>
        <h2>Experience</h2>

        <DfEApply />
        <DfEFind />
        <Gamesys />
        <Graphit />
        <GDS />
        <Timecounts />
        <Workangel />
        <ReadForward />
      </section>

      <section>
        <h2>Notable open source contributions</h2>

        <Ul>
          <Li>
            A widely-used{" "}
            <a
              href="https://github.com/alphagov/accessible-autocomplete"
              target="_blank"
            >
              accessible autocomplete component
            </a>
            ;
          </Li>
          <Li>
            A reimagined presentation of <TheLastQuestion />;
          </Li>
          <Li>
            <a href="https://github.com/tvararu/dotfiles" target="_blank">
              Older dotfiles
            </a>
            , and newer <Dotfiles /> and configuration scripts.
          </Li>
        </Ul>
      </section>

      <section>
        <h2>Everything else</h2>

        <Ul>
          <Li>Undergraduate Computer Science / Computer Networks Degree</Li>
          <Li>
            I manage 5 home Ubuntu/Arch Linux servers and my own personal cloud
            server;
          </Li>
          <Li>
            I foster cats for Battersea Dogs & Cats Home; on my 10th cat as of
            writing!
          </Li>
        </Ul>
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
