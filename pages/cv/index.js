import React from "react";
import Layout from "../../components/layout";

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
          margin: 0.25rem 0;
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
    Rebuild GOV.UK formats as part of the <MigrationProgramme /> team, moving
    from the legacy monolith publisher to a <B>microservices</B> pipeline.{" "}
    <B>Ruby on Rails</B>, <B>TDD</B>, <B>Agile</B>.
  </Li>
);
const WebchatAlpha = () => (
  <a href="https://github.com/alphagov/webchat-alpha" target="_blank">
    Webchat Alpha
  </a>
);
const WebchatBlogPost = () => (
  <a
    href="https://accessibility.blog.gov.uk/2016/12/09/patterns-for-accessible-webchats/"
    target="_blank"
  >
    blog posts
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
const CountryPicker = () => (
  <a
    href="https://github.com/alphagov/openregister-location-picker"
    target="_blank"
  >
    reusable country picker component
  </a>
);
const AccessibleAutocomplete = () => (
  <a href="https://github.com/alphagov/accessible-typeahead" target="_blank">
    Accessible Autocomplete component
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

const Job = ({ employer, period, title }) => (
  <H3>
    <div>
      <span className="employer">
        <B>{employer}</B>
      </span>
      <span className="title">{title}</span>
      <span className="period">{period}</span>
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

const Gamesys = () => (
  <section>
    <Job
      employer="Gamesys (Contract)"
      period="Mar 2018 - Present"
      title="Senior Frontend Developer"
    />
    <p>
      <GamesysCom /> is an award-winning social and real money gaming company.
    </p>
    <Ul>
      <Li>
        Develop user-facing features on the <B>React.js</B>, <B>Node.js</B>, and{" "}
        <B>Flux</B>-based single page application frontend, focused on
        addressing user experience issues, industry-specific regulatory
        requirements, and troubleshooting issues with the Selenium-based tests.
      </Li>
      <Li>
        Build an internal tool for managing web chat emoji packs, using{" "}
        <B>Next.js</B> (static mode with server-side rendering), <Cypress />,{" "}
        <Tachyons />. Leverage client-side JavaScript to cut/stitch PNG assets
        and package into .zips, without needing a server. MVP was delivered in
        record time to a high standard, with very satisfied stakeholders.
      </Li>
      <Li>
        Work on optimising the <B>frontend performance</B>. Remove the project's
        dependency on <B>moment.js</B>, and trim down the dependency on{" "}
        <B>lodash</B>, resulting in total savings of <B>33%</B> on the bundle
        size. Write performance <B>documentation</B> to aid with future work.
      </Li>
      <Li>
        Provide <B>mentoring</B> to team members and an apprentice, focusing on
        a pragmatic but <B>users first</B> approach to software engineering.
        Facilitate agile ceremonies, and interviews for frontend Node.js as well
        as backend Ruby candidates.
      </Li>
    </Ul>
  </section>
);

const Graphit = () => (
  <section>
    <Job
      employer="Graphit Systems (Contract)"
      period="Aug 2017 - Feb 2018"
      title="JavaScript Developer"
    />
    <p>
      <GraphitCom /> is an online app for configuring and buying modular
      manufacturing solutions.
    </p>
    <Ul>
      <Li>
        Build user-facing features for the online 3D configurator. Features
        shipped include a redesign, online payment with <B>Stripe</B>, fixes for{" "}
        <B>legacy browsers</B> and <B>performance</B> issues while building on
        top of the previous developer's work without handover. <B>React.js</B>,{" "}
        <B>Three.js</B>, <B>webpack</B>, <B>Redux.js</B>.
      </Li>
      <Li>
        Collaborate with the designer to create a revised <B>styleguide</B>,
        consolidating rhythm and colours throughout the app, backed by a{" "}
        <Tachyons />
        -inspired atomic CSS <B>design system</B>.
      </Li>
      <Li>
        Champion <B>user research</B> based decision-making, highlight and fix{" "}
        <B>accessibility</B> pitfalls, and provide input into design discussions
        to reach solutions that are <B>mobile-first</B> and <B>performant</B>.
      </Li>
      <Li>
        Improve product quality by implementing <B>end to end testing</B> using{" "}
        <Cypress />, <Jest /> component tests, <Sentry /> error tracking, and a
        bespoke gettext and <Babel /> <B>internationalisation</B> pipeline.
      </Li>
      <Li>
        Deliver a proof of concept <ReactNative /> and <Expo /> <NativeARApp />{" "}
        (link is iOS only) in only 3 days by reusing and adapting existing 3D
        code from the main codebase.
      </Li>
    </Ul>
  </section>
);

const GDS = () => (
  <section>
    <Job
      employer="Government Digital Service"
      period="Mar 2016 - Aug 2017"
      title="Developer / Senior Developer"
    />
    <p>
      GDS builds <GOVUK />, <GaaP />, and other digital transformation services.
    </p>
    <Ul>
      <Li>
        Lead development of a <CountryPicker />. Talk to service teams to learn
        about their needs, prototype initial implementation, build an{" "}
        <AccessibleAutocomplete /> and a <SuggestionEngine />. Take the
        component to user research, with abled users and with users with access
        needs, and to an accessibility audit from the <DAC />. <B>Preact.js</B>,{" "}
        <B>TDD</B>, <B>Selenium testing</B>, <B>accessibility testing</B>,{" "}
        <B>progressive enhancement</B>, <B>webpack</B>.
      </Li>
      <Li>
        Build a small <B>JSON API</B> to <GenerateCountryPickerData /> based on
        OpenRegister data. <B>Java</B>, <B>Serverless</B>, <B>AWS</B>,{" "}
        <B>TDD</B>, <B>JSON</B>.
      </Li>
      <Li>
        Sole developer on the <WebchatAlpha /> project, building user research
        prototypes and testing with users. Focus on <B>accessibility</B> of
        webchat interfaces. Attend user research sessions, conduct on-site
        interviews with departments using webchat. Released findings as
        presentations, <WebchatBlogPost />. <B>Node.js</B>, <B>React.js</B>,{" "}
        <B>Socket.io</B>, <B>accessibility testing</B>.
      </Li>
      <Li>
        Lead development of a <B>data visualisation</B> prototype to{" "}
        <ViewTransformationDependencies />. <B>Node.js</B>, <B>React.js</B>,{" "}
        <B>D3.js</B>, <B>Google Sheets API</B>.
      </Li>
      <GOVUKExperience />
      <Li>
        Present talks about <B>React.js</B> and <B>accessibility</B>. Provide
        mentoring to apprentices, line manage 2 developers.
      </Li>
    </Ul>
  </section>
);

const Timecounts = () => (
  <section>
    <Job
      employer="Timecounts"
      period="May 2015 - Feb 2016"
      title="Senior Full Stack Developer"
    />
    <p>
      Timecounts builds a volunteer and community management tool for charities
      and non-profits.
    </p>
    <Ul>
      <Li>
        Build product features, collaborating with the stakeholders to define
        specifications. <B>Node.js</B>, <B>React.js</B>, <B>TDD</B>,{" "}
        <B>Ruby on Rails JSON API</B>, <B>SASS</B> / <B>CSS modules</B>.
      </Li>
      <Li>
        Major features shipped include a calendar view and date picker
        component, CSV import validation, landing and marketing pages,{" "}
        <B>animations</B>, improvements to the build process, backend support
        fixes.
      </Li>
      <Li>
        Help the team refine their <B>Agile</B> processes, implement code review
        and issue tracking methods. Champion <B>functional programming</B> and
        linting.
      </Li>
    </Ul>
  </section>
);

const Workangel = () => (
  <section>
    <Job
      employer="Workangel"
      period="Sep 2014 - Apr 2015"
      title="Lead Front End Developer"
    />
    <p>
      Workangel builds an employee benefits, engagement and retention platform.
    </p>
    <Ul>
      <Li>
        Build product features on the admin panel and user facing application,
        two single page applications that interact with a{" "}
        <B>RESTful JSON API</B>. <B>Node.js</B>, <B>Angular.js 1.x</B>,{" "}
        <B>Stylus</B>.
      </Li>
      <Li>
        Ship a <B>mobile-first design</B> rebuild and <B>animations</B> for
        inter-page transitions and more, both not scoped or factored into
        estimations but delivered to extremely favourable reception.
      </Li>
      <Li>
        Dramatically improve the build process by{" "}
        <B>optimising the performance</B> of tasks and embracing modern best
        practices: template minification, linting, unit and Selenium integration
        testing, continuous integration, load testing.
      </Li>
      <Li>
        Defined Jade, Stylus, and JavaScript styleguides. Provided mentoring and
        coaching to new developers.
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
      period="Mar 2013 - Sep 2014"
      title="Lead Full Stack Developer"
    />
    <p>
      ReadForward is a digital agency with a focus towards education, culture,
      and political issues.
    </p>
    <Ul>
      <Li>
        Lead development of an open source <LFA />. Build the pipeline and the
        frontend pattern library. Onboard and train junior developers in its use
        that produced our digital textbook offerings for primary education,
        which became the company's bread and butter product. <B>Node.js</B>,{" "}
        <B>Backbone.js</B>, <B>pattern libraries</B>,{" "}
        <B>visual regression testing</B>.
      </Li>
      <Li>
        Architected and managed a <DeltaApp />. Delivered 1.0 in just{" "}
        <B>3 weeks</B> of development time. <B>Ampersand.js</B>,{" "}
        <B>Famous.js</B> native-like animations, <B>Cordova</B>, <B>testing</B>,{" "}
        <B>mapping and route generation</B>, <B>offline-first</B>.
      </Li>
      <Li>
        Architected and lead initial development of the open source website for{" "}
        <MonicaMacovei />. Score 100/100 on Google PageSpeed Insights using{" "}
        <B>performance optimisations</B> like{" "}
        <B>critical path CSS generation</B>,{" "}
        <B>single page application prerendering</B>, which favourably
        contributed to <B>SEO</B>. <B>Gulp.js</B>, <B>Ampersand.js</B>.
      </Li>
      <Li>
        Lead development of a holistic rewrite of the <GeorgeEnescuFestival />.
        Write scraping / data remodelling scripts to import old pages from the
        legacy PHP backend, add new capabilities like <B>full text search</B>{" "}
        and relationships between models. Build a <B>RESTful JSON API</B> for
        the newly developed native mobile apps. Website was deployed at scale
        with hundreds of thousands of hits per month. <B>Ruby on Rails</B>,{" "}
        <B>database and API design</B>, <B>load testing</B>,{" "}
        <B>New Relic monitoring</B>,{" "}
        <B>caching and database query performance optimisations</B>.
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
  <a href="https://github.com/tvararu/dotfiles" target="_blank">
    my dotfiles
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
    <article>
      <h1 className="visuallyhidden">Theodor Vararu's Résumé</h1>

      <section>
        <h2>Experience</h2>

        <Gamesys />
        <Graphit />
        <GDS />
        <Timecounts />
        <Workangel />
        <ReadForward />
      </section>

      <section>
        <h2>Projects</h2>

        <p>
          Please peruse my <GitHub /> for nearly all of my side projects.
          Notable highlights:
        </p>
        <Ul>
          <Li>
            a reimagined presentation of <TheLastQuestion />;
          </Li>
          <Li>
            the source code for my <B>Next.js</B> and <B>React.js</B>{" "}
            <Vararuorg />;
          </Li>
          <Li>
            a <N7m /> built using <B>Serverless</B> and <B>AWS Lambda</B>;
          </Li>
          <Li>
            <Dotfiles /> and macOS configuration scripts;
          </Li>
          <Li>
            a <B>Meteor.js</B> and <B>Three.js</B> <NEBUL4 />.
          </Li>
        </Ul>
      </section>

      <section>
        <h2>Technologies</h2>

        <p>
          I build products with <B>JavaScript</B> and <B>Node.js</B>, using{" "}
          <B>linting</B>, <B>testing</B>, <B>CI / CD</B>.
        </p>
        <p>
          I develop exclusively on macOS/UNIXlike operating systems, using{" "}
          <B>git</B> and modern tools.
        </p>
        <p>
          I admin my own DigitalOcean server, but also deploy to <B>Heroku</B>,{" "}
          <B>AWS Lambda</B>, static websites, and other solutions depending on
          the need.
        </p>
      </section>

      <section>
        <h2>Hobbies</h2>

        <p>
          I spend a lot of time reading books, about half of the programming
          variety, half about personal finance. I love mentoring and teaching
          others to learn to code. I practice guitar, work on my old car, and
          travel as much as I can.
        </p>
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
