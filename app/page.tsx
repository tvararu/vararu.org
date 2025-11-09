import ProjectCard from "@/components/project-card";
import OrganizationLink from "@/components/organization-link";

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="-mx-1 bg-blue-600/5 p-1 text-blue-600 hover:bg-blue-600
        hover:text-white dark:bg-blue-600/15 dark:text-blue-400
        dark:hover:bg-blue-600"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <article>
      <p className="my-5 leading-relaxed">
        I’m Theo, a software engineer with a penchant for accessibility and
        progressive enhancement.
      </p>
      <p className="my-5 leading-relaxed">
        I specialise in shipping full-stack web applications, and love to dabble
        in design, local ML, AI-assisted development, Linux, and
        entrepreneurship. I’m currently working on a national vaccination
        platform for the UK government, and building my own ideas on the side.
      </p>
      <p className="my-5 leading-relaxed">
        I like computers, metal, philosophy, minimalism, and road trips. I
        maintain a menagerie of pet servers, including my home lab and SFF rig.
      </p>

      <h2 className="mt-10 text-xl font-semibold">Currently exploring</h2>
      <section className="mt-5 columns-1 gap-4 sm:columns-2">
        <ProjectCard title="untitled.ink" video="/untitled-ink.mov">
          An interactive fiction platform, featuring a Claude Code-style agentic
          editor, the Ink markup language, a hot-reloading preview, and image
          generation &amp; editing on Replicate.
        </ProjectCard>
        <ProjectCard title="Condolist" video="/condolist.mov">
          A property listing aggregator, leveraging openai/CLIP on Replicate to
          find duplicate listings, search by a particular niche feature, and
          reduce the time it takes to find a nice condo.
        </ProjectCard>
        <ProjectCard title="@gromit" video="/gromit.mov">
          A RAG-based chat agent that takes a company’s messaging history, core
          documents, and other notable memories, embeds it securely using a
          local model, and lets users ask anything on Slack.
        </ProjectCard>
        <ProjectCard title="hasteOS" video="/hasteos-com.mov">
          A native Swift app that parses the currently focussed window and asks
          an LLM to suggest the next action, using Ollama and a variety of local
          models.
        </ProjectCard>
      </section>

      <h2 className="mt-10 text-xl font-semibold">Worked with</h2>
      <section className="my-5 grid grid-cols-1 gap-x-4 sm:grid-cols-2">
        <ul>
          <OrganizationLink href="https://www.nhs.uk">
            National Health Service
          </OrganizationLink>
          <OrganizationLink href="https://www.gov.uk/government/organisations/government-digital-service">
            Government Digital Service
          </OrganizationLink>
          <OrganizationLink href="https://www.gov.uk/government/organisations/department-for-education">
            Department for Education
          </OrganizationLink>
          <OrganizationLink href="https://www.gov.uk/government/organisations/ministry-of-justice">
            Ministry of Justice
          </OrganizationLink>
        </ul>
        <ul>
          <OrganizationLink href="https://www.meta.com">Meta</OrganizationLink>
          <OrganizationLink href="https://www.gamesysgroup.com">
            Gamesys
          </OrganizationLink>
          <OrganizationLink href="https://www.goodmachine.team">
            Good Machine
          </OrganizationLink>
          <OrganizationLink href="https://hypersay.com">
            Hypersay
          </OrganizationLink>
        </ul>
      </section>

      <h2 className="mt-10 text-xl font-semibold">Miscellanea</h2>

      <h3 className="mt-5 mb-3">
        <Link href="https://github.com/alphagov/accessible-autocomplete">
          Accessible autocomplete
        </Link>
      </h3>
      <p>
        I developed the most widely used combobox component in the UK public
        sector, based on extensive user and browser testing. We coined
        “accessibility acceptance criteria,”{" "}
        <Link href="https://accessibility.blog.gov.uk/2018/05/15/what-we-learned-from-getting-our-autocomplete-tested-for-accessibility/">
          blogged about our user research
        </Link>
        , and{" "}
        <Link href="https://www.youtube.com/watch?v=gRVgWT3glII">
          gave a conference talk about it
        </Link>
        .
      </p>

      <h3 className="mt-5 mb-3">
        <Link href="https://github.com/tvararu/the-last-question">
          The Last Question
        </Link>
      </h3>
      <p>
        Back in early 2013, Isaac Asimov’s famous short story resurfaced back to
        the top of Hacker News and I read it for the first time. I loved it, and
        spent the next days hacking on a reimagined version. I guess I haven’t
        really stopped thinking about interactive fiction since.
      </p>

      <h3 className="mt-5 mb-3">
        <Link href="https://art.vararu.org">Art</Link>,{" "}
        <Link href="https://quotes.vararu.org">Quotes</Link>, and{" "}
        <Link href="https://hours.vararu.org">Hours</Link>
      </h3>
      <p>
        I sometimes make small, single-serving websites. Among the surviving
        ones are an art gallery, a collection of quotes I like, and a countdown
        of how many hours are likely left in my life.
      </p>

      <h3 className="mt-5 mb-3">Grade tracker</h3>
      <p>
        In high school I developed an online grade tracker in raw PHP and
        jQuery, using the{" "}
        <Link href="https://en.wikipedia.org/wiki/Metro_(design_language)">
          Metro design language
        </Link>
        , which won first place in an IT competition run by a state university.
        The prize, an 11” MacBook Air, lead me to adopt macOS, learn about the
        UNIX philosophy, and significantly influence my trajectory as a software
        engineer.
      </p>

      <h3 className="mt-5 mb-3">Ret paladin</h3>
      <p>
        I was a competitive raider in the original Wrath of the Lich King,
        playing through the entire expansion from launch to the release of
        Icecrown Citadel on my Ret paladin main. I earned the rare “The Undying”
        title from clearing Naxxramas without anyone in the group dying, and
        ranked as officer in our guild.
      </p>
    </article>
  );
}
