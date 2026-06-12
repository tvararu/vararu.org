import { H1, H2, H3 } from "@/components/headings";
import InlineLink from "@/components/inline-link";
import ProjectCard from "@/components/project-card";
import StyledLink from "@/components/styled-link";

export default function Home() {
  return (
    <article>
      <H1>
        I’m Theo, a software engineer with a passion for accessibility and
        progressive enhancement.
      </H1>
      <p className="my-5 leading-relaxed">
        I specialise in shipping full-stack web applications, and love to dabble
        in design, local ML, AI-assisted development, Linux, and
        entrepreneurship.
      </p>
      <p className="my-5 leading-relaxed">
        I like computers, metal, philosophy, minimalism, and road trips. I
        maintain a menagerie of pet servers, including my home lab and SFF rig.
      </p>

      <H2>Currently exploring</H2>
      <section className="mt-5 columns-1 gap-4 sm:columns-2">
        <ProjectCard title="untitled.ink" video="/untitled-ink.mp4">
          An interactive fiction platform, featuring a Claude Code-style agentic
          editor, the Ink markup language, a hot-reloading preview, and image
          generation &amp; editing on Replicate.
        </ProjectCard>
        <ProjectCard title="Condolist" video="/condolist.mp4">
          A property listing aggregator, leveraging openai/CLIP on Replicate to
          find duplicate listings, search by a particular niche feature, and
          reduce the time it takes to find a nice condo.
        </ProjectCard>
        <ProjectCard title="@gromit" video="/gromit.mp4">
          A RAG-based chat agent that takes a company’s messaging history, core
          documents, and other notable memories, embeds it securely using a
          local model, and lets users ask anything on Slack.
        </ProjectCard>
        <ProjectCard title="hasteOS" video="/hasteos-com.mp4">
          A native Swift app that parses the currently focussed window and asks
          an LLM to suggest the next action, using Ollama and a variety of local
          models.
        </ProjectCard>
      </section>

      <H2>Worked with</H2>
      <section className="my-5 grid grid-cols-1 gap-x-4 sm:grid-cols-2">
        <ul>
          <StyledLink href="https://www.nhs.uk">
            <span className="font-mono">NHS</span>{" "}
            <span className="ml-2 text-sm uppercase">
              National Health Service
            </span>
          </StyledLink>
          <StyledLink href="https://www.gov.uk/government/organisations/government-digital-service">
            <span className="font-mono">GDS</span>{" "}
            <span className="ml-2 text-sm uppercase">
              Government Digital Service
            </span>
          </StyledLink>
          <StyledLink href="https://www.gov.uk/government/organisations/department-for-education">
            <span className="font-mono">DfE</span>{" "}
            <span className="ml-2 text-sm uppercase">
              Department for Education
            </span>
          </StyledLink>
          <StyledLink href="https://www.gov.uk/government/organisations/ministry-of-justice">
            <span className="font-mono">MoJ</span>{" "}
            <span className="ml-2 text-sm uppercase">Ministry of Justice</span>
          </StyledLink>
        </ul>
        <ul>
          <StyledLink href="https://www.meta.com">Meta</StyledLink>
          <StyledLink href="https://www.gamesysgroup.com">Gamesys</StyledLink>
          <StyledLink href="https://www.goodmachine.team">
            Good Machine
          </StyledLink>
          <StyledLink href="https://hypersay.com">Hypersay</StyledLink>
        </ul>
      </section>

      <H2>Miscellanea</H2>

      <H3>
        <InlineLink href="https://github.com/alphagov/accessible-autocomplete">
          Accessible autocomplete
        </InlineLink>
      </H3>
      <p className="leading-relaxed">
        I developed the most widely used combobox component in the UK public
        sector, based on extensive user and browser testing. We coined
        “accessibility acceptance criteria,”{" "}
        <InlineLink href="https://accessibility.blog.gov.uk/2018/05/15/what-we-learned-from-getting-our-autocomplete-tested-for-accessibility/">
          blogged about our user research
        </InlineLink>
        , and{" "}
        <InlineLink href="https://www.youtube.com/watch?v=gRVgWT3glII">
          gave a conference talk about it
        </InlineLink>
        .
      </p>

      <H3>
        <InlineLink href="https://github.com/tvararu/the-last-question">
          The Last Question
        </InlineLink>
      </H3>
      <p className="leading-relaxed">
        Back in early 2013, Isaac Asimov’s famous short story resurfaced to the
        top of Hacker News and I read it for the first time. I loved it, and
        spent the following days hacking on a reimagined version. I guess I
        haven’t really stopped thinking about interactive fiction since.
      </p>

      <H3>
        <InlineLink href="https://art.vararu.org">Art</InlineLink>,{" "}
        <InlineLink href="https://quotes.vararu.org">Quotes</InlineLink>, and{" "}
        <InlineLink href="https://hours.vararu.org">Hours</InlineLink>
      </H3>
      <p className="leading-relaxed">
        I sometimes make small, single-serving websites. Among the surviving
        ones are an art gallery, a collection of quotes I like, and a countdown
        of how many productive hours are likely left in my life.
      </p>

      <H3>Grade tracker</H3>
      <p className="leading-relaxed">
        In high school I developed an online grade tracker in vanilla PHP and
        jQuery, using the{" "}
        <InlineLink href="https://en.wikipedia.org/wiki/Metro_(design_language)">
          Metro design language
        </InlineLink>
        , which won first place in an IT competition run by a state university.
        The prize, an 11” MacBook Air, led me to adopt macOS, learn about the
        UNIX philosophy, and significantly shaped my trajectory as a software
        engineer.
      </p>

      <H3>Ret paladin</H3>
      <p className="leading-relaxed">
        I was a competitive raider in the original Wrath of the Lich King,
        playing through the entire expansion from launch to the release of
        Icecrown Citadel on my Ret paladin main. I earned the rare “The Undying”
        title from clearing Naxxramas without anyone in the group dying, and
        ranked as an officer in our guild.
      </p>

      <H2>Contact</H2>
      <ul className="my-5">
        <StyledLink href="mailto:theo@vararu.org" icon="at">
          Email me at theo@vararu.org
        </StyledLink>
        <StyledLink href="https://github.com/tvararu" icon="github">
          Read my code on GitHub
        </StyledLink>
        <StyledLink href="https://x.com/NihilSineTheo" icon="x">
          Follow me on X
        </StyledLink>
        <StyledLink
          href="https://www.instagram.com/nihil.sine.theo/"
          icon="instagram"
        >
          Follow me on Instagram
        </StyledLink>
        <StyledLink
          href="https://www.linkedin.com/in/theodor-vararu/"
          icon="linkedin"
        >
          Connect on LinkedIn
        </StyledLink>
      </ul>
    </article>
  );
}
