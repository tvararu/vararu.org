import ProjectCard from "@/components/project-card";

export default function Home() {
  return (
    <article>
      <p className="my-5 leading-relaxed">
        I’m Theo, a software engineer with a penchant for accessibility and
        progressive enhancement. I specialise in shipping full-stack web
        applications, and love to dabble in design, local ML, AI-assisted
        development, Linux, and entrepreneurship. I’m currently working on a
        national vaccination platform for the UK government, and building my own
        ideas on the side.
      </p>
      <p className="my-5 leading-relaxed">
        I like computers, metal, philosophy, minimalism, and road trips. I
        maintain a menagerie of pet servers, including my home lab and SFF rig.
      </p>
      <h2 className="mt-10 text-xl font-semibold">Currently exploring</h2>
      <div className="mt-5 columns-1 gap-4 sm:columns-2">
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
        <ProjectCard title="hasteOS.com" video="/hasteos-com.mov">
          A native Swift app that parses the currently focussed window and asks
          an LLM to suggest the next action, using Ollama and a variety of local
          models.
        </ProjectCard>
      </div>
    </article>
  );
}
