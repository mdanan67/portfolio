'use client';

import {
  Blocks,
  Bot,
  Braces,
  BrainCircuit,
  CircleDot,
  Cloud,
  Code2,
  Container,
  Database,
  FileJson2,
  GitBranch,
  Globe2,
  Handshake,
  Languages,
  Layers3,
  MessageCircle,
  Network,
  PenTool,
  Server,
  ServerCog,
  Terminal,
  Workflow,
  Wrench,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const services = [
  'Full-stack Development',
  'Microservices APIs',
  'ASP.NET Core APIs',
  'AI Agent Workflows',
];

const projects = [
  {
    title: 'PayGuard API Platform',
    category: 'ASP.NET Core allowance management backend',
    year: '2026',
    href: 'https://github.com/mdanan67/server_PayGuard',
    description:
      'A secure ASP.NET Core Web API for allowance management, structured around Clean Architecture, RESTful endpoints and maintainable service boundaries.',
  },
  {
    title: 'MERN SecureAuth',
    category: 'Authentication, verification and reset flow',
    year: '2026',
    href: 'https://github.com/mdanan67/mern-authentication-with-email-verification-and-password-reset',
    description:
      'A MERN authentication system with email verification and password reset flows, focused on secure account access and production-ready user onboarding.',
  },
  {
    title: 'FoodFlow Delivery System',
    category: 'Food ordering and delivery platform',
    year: '2026',
    href: 'https://github.com/mdanan67/Food-Delivery-System',
    description:
      'A food ordering and delivery application covering customer ordering flows, backend data models, order management and delivery-focused system design.',
  },
];

const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript (ES6)', 'C#'],
  },
  {
    title: 'Architecture & Practices',
    items: ['Clean Architecture', 'RESTful API Design', 'MCP Server Fundamentals'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'ASP.NET Core'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'Next.js'],
  },
  {
    title: 'AI / LLM Tooling',
    items: ['LangChain', 'LangGraph Fundamentals', 'AI Agents'],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'Visual Studio', 'VS Code'],
  },
  {
    title: 'Soft Skills',
    items: ['Communication', 'Teamwork', 'Problem Solving', 'English'],
  },
];

const technologyIcons = {
  Python: { Icon: Terminal, color: '#3776ab' },
  TypeScript: { Icon: Code2, color: '#3178c6' },
  'JavaScript (ES6)': { Icon: FileJson2, color: '#f7df1e' },
  'C#': { Icon: Braces, color: '#9b5de5' },
  'Clean Architecture': { Icon: Layers3, color: '#16d9ff' },
  'RESTful API Design': { Icon: Network, color: '#00b894' },
  'MCP Server Fundamentals': { Icon: ServerCog, color: '#ff7a18' },
  'Node.js': { Icon: Server, color: '#5fa04e' },
  'Express.js': { Icon: Workflow, color: '#f5f1e8' },
  'ASP.NET Core': { Icon: Blocks, color: '#9b5de5' },
  'React.js': { Icon: CircleDot, color: '#61dafb' },
  'Next.js': { Icon: Globe2, color: '#f5f1e8' },
  LangChain: { Icon: Workflow, color: '#1c9f70' },
  'LangGraph Fundamentals': { Icon: BrainCircuit, color: '#10b981' },
  'AI Agents': { Icon: Bot, color: '#16d9ff' },
  MongoDB: { Icon: Database, color: '#47a248' },
  MySQL: { Icon: Database, color: '#4479a1' },
  PostgreSQL: { Icon: Database, color: '#4169e1' },
  Redis: { Icon: Database, color: '#dc382d' },
  Git: { Icon: GitBranch, color: '#f05032' },
  GitHub: { Icon: GitBranch, color: '#f5f1e8' },
  Docker: { Icon: Container, color: '#2496ed' },
  Postman: { Icon: Cloud, color: '#ff6c37' },
  'Visual Studio': { Icon: Wrench, color: '#9b5de5' },
  'VS Code': { Icon: PenTool, color: '#007acc' },
  Communication: { Icon: MessageCircle, color: '#16d9ff' },
  Teamwork: { Icon: Handshake, color: '#f5f1e8' },
  'Problem Solving': { Icon: BrainCircuit, color: '#00b894' },
  English: { Icon: Languages, color: '#3178c6' },
};

const journey = [
  {
    tag: '2026',
    title: 'Graduated - BSc in CSE',
    text: 'Completed my Bachelor of Science in Computer Science & Engineering at IUBAT, Dhaka - building a strong foundation in algorithms, systems and software design.',
    muted: true,
  },
  {
    tag: '2026',
    title: 'MERN Stack Certification',
    text: 'Completed the MERN Stack Development program at Eshikhon.com, going deep on MongoDB, Express, React and Node.js through hands-on builds.',
    muted: true,
  },
  {
    tag: 'Project',
    title: 'Engineered PayGuard API Platform',
    text: 'Built a secure allowance management backend with ASP.NET Core Web API, applying Clean Architecture, RESTful API design and maintainable service boundaries.',
  },
  {
    tag: 'Project',
    title: 'Built MERN SecureAuth',
    text: 'Created a MERN authentication project with email verification and password reset flows for secure account access and user onboarding.',
  },
  {
    tag: 'Project',
    title: 'Built FoodFlow Delivery System',
    text: 'Worked on a food ordering and delivery platform with ordering flows, backend data modeling, REST APIs and scalable service thinking.',
  },
  {
    tag: 'Now',
    title: 'Building AI Agents',
    text: 'Expanding into AI agent development with Python, LangChain, LangGraph and MCP-style tool integrations while connecting automation ideas to practical software products.',
  },
];

const links = [
  { label: 'Email', href: 'mailto:atifmostoba456@gmail.com' },
  { label: 'Phone', href: 'tel:+8801935579051', number: '+880 1935 579051' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mdanan67/' },
  { label: 'GitHub', href: 'https://github.com/mdanan67' },
  { label: 'CV', href: '/Atif_Mostoba.pdf' },
];

export default function Home() {
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  return (
    <main className="min-h-screen bg-[#070707] text-[#f5f1e8]">
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-[#070707]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.24em]">
            Atif Mostoba
          </a>
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.22em] text-white/58 md:flex">
            <a className="transition hover:text-white" href="#work">
              Work
            </a>
            <a className="transition hover:text-white" href="#journey">
              Journey
            </a>
            <a className="transition hover:text-white" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
          <a
            href="/Atif_Mostoba.pdf"
            className="border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition hover:border-white hover:bg-white hover:text-black"
          >
            Resume
          </a>
        </div>
      </header>

      <section
        id="top"
        className="mx-auto grid min-h-screen max-w-7xl items-end gap-10 px-5 pb-10 pt-28 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:pb-14"
      >
        <div className="relative z-10">
          <p className="mb-5 max-w-md border-l border-[#16d9ff]/70 pl-4 text-sm font-semibold uppercase leading-6 tracking-[0.18em] text-[#16d9ff]">
            Software Engineer - Full-stack Developer
          </p>
          <h1 className="max-w-4xl text-[clamp(3.3rem,10vw,9.4rem)] font-black uppercase leading-[0.82] tracking-normal">
            Building
            <span className="block text-white/42">Software</span>
          </h1>
          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-base leading-7 text-white/64">
              I build responsive web applications, API-backed systems, microservices and AI agent
              workflows with Next.js, React, Node.js, ASP.NET Core, Python, C#, MongoDB, MySQL,
              PostgreSQL and Redis.
            </p>
            <a
              href="#work"
              className="w-fit bg-[#f5f1e8] px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-white"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="relative min-h-[520px] overflow-hidden border border-white/12 bg-[#111] sm:min-h-[640px]">
          <Image
            src="/atif-photo.png"
            alt="Black and white portrait of Atif Mostoba"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover object-[50%_30%] grayscale"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/52 to-transparent p-5 pt-28">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/52">Focus</p>
                <p className="mt-2 text-2xl font-semibold">Full-stack systems and AI agents</p>
              </div>
              <p className="text-right text-xs uppercase tracking-[0.22em] text-white/58">
                Based in
                <span className="block text-white">Dhaka, Bangladesh</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#f5f1e8] text-black">
        <div className="mx-auto grid max-w-7xl gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service} className="bg-[#f5f1e8] px-5 py-6 sm:px-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em]">{service}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-white/48">Selected Work</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">
              Projects with real engineering depth.
            </h2>
          </div>
          <div className="border-t border-white/14">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group grid gap-4 border-b border-white/14 py-8 transition sm:grid-cols-[5rem_1fr_auto] sm:items-start"
              >
                <p className="font-mono text-sm text-white/40">0{index + 1}</p>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#16d9ff]/75">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold transition group-hover:translate-x-2 sm:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-white/54">
                    {project.description}
                  </p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex w-fit border border-[#16d9ff]/40 px-3 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#16d9ff] transition hover:border-[#16d9ff] hover:bg-[#16d9ff] hover:text-black"
                  >
                    View GitHub
                  </a>
                </div>
                <p className="font-mono text-sm text-white/46">{project.year}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="journey"
        className="border-y border-white/10 bg-[#090910] px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="flex items-center gap-4 text-sm font-bold uppercase tracking-[0.34em] text-[#16d9ff]">
            <span className="h-px w-8 bg-[#16d9ff]" />
            The Journey
          </p>
          <h2 className="mt-5 max-w-5xl text-4xl font-black leading-none text-white sm:text-6xl">
            From fundamentals to full-stack
          </h2>

          <div className="relative mt-12 max-w-4xl pl-9 sm:mt-16">
            <div className="absolute bottom-6 left-[7px] top-2 w-px bg-[#16d9ff]/25" />
            <div className="space-y-11">
              {journey.map((item) => (
                <article key={item.title} className="relative">
                  <span
                    className={`absolute -left-9 top-1 h-3.5 w-3.5 rounded-full border border-[#16d9ff] ${
                      item.muted
                        ? 'bg-[#090910] shadow-[0_0_14px_rgba(22,217,255,0.65)]'
                        : 'bg-[#16d9ff] shadow-[0_0_18px_rgba(22,217,255,0.9)]'
                    }`}
                  />
                  <span className="inline-flex rounded-full border border-[#16d9ff]/45 bg-[#16d9ff]/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#16d9ff]">
                    {item.tag}
                  </span>
                  <h3 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-3xl font-mono text-sm font-bold leading-7 text-white/42 sm:text-base">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:py-28"
      >
        <div className="border border-white/12 p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-white/48">Engineering Stack</p>
          <h2 className="mt-5 text-3xl font-black uppercase leading-tight sm:text-5xl">
            Frontend polish backed by reliable server-side architecture.
          </h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-white/62">
            I like building complete systems: the interface users touch, the API that moves the
            data, the database that keeps it reliable, and the service structure that keeps the
            project maintainable as it grows.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <section key={group.title} className="border border-white/12 bg-white/[0.02] p-4">
                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#16d9ff]/80">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const icon = technologyIcons[item as keyof typeof technologyIcons] ?? {
                      Icon: Code2,
                      color: '#16d9ff',
                    };
                    const Icon = icon.Icon;

                    return (
                      <span
                        key={item}
                        className="inline-flex min-h-10 items-center gap-2 border border-white/10 bg-black/20 py-1.5 pl-1.5 pr-3 font-mono text-xs font-bold text-white/64"
                      >
                        <span
                          className="flex h-7 min-w-7 items-center justify-center border border-white/10 bg-white/5"
                          style={{ color: icon.color }}
                          aria-hidden="true"
                        >
                          <Icon size={16} strokeWidth={2.4} />
                        </span>
                        <span>{item}</span>
                      </span>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#f5f1e8] text-black">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-black/48">Contact</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="text-[clamp(3rem,9vw,8rem)] font-black uppercase leading-[0.86] tracking-normal">
              Let's build useful software.
            </h2>
            <div>
              <p className="text-lg leading-8 text-black/62">
                Open to software engineering roles, full-stack projects, web application builds,
                microservices work and applied AI agent experiments.
              </p>
              <div className="mt-6 grid gap-2 font-mono text-sm font-bold text-black/58">
                <a href="mailto:atifmostoba456@gmail.com" className="transition hover:text-black">
                  atifmostoba456@gmail.com
                </a>
                <a href="tel:+8801935579051" className="transition hover:text-black">
                  +880 1935 579051
                </a>
                <a
                  href="https://github.com/mdanan67"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-black"
                >
                  github.com/mdanan67
                </a>
                <a
                  href="https://www.linkedin.com/in/mdanan67/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-black"
                >
                  linkedin.com/in/mdanan67
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {links.map((link) => {
                  if (link.label === 'Phone') {
                    return (
                      <button
                        key={link.label}
                        onClick={() => setShowPhoneModal(true)}
                        className="border border-black/20 px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] transition hover:border-black hover:bg-black hover:text-white"
                      >
                        {link.label}
                      </button>
                    );
                  }
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="border border-black/20 px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] transition hover:border-black hover:bg-black hover:text-white"
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-3 border-t border-black/12 pt-6 text-sm text-black/50 sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright 2026 Atif Mostoba.</p>
            <a className="transition hover:text-black" href="#top">
              Back to top
            </a>
          </div>
        </div>
      </footer>

      {showPhoneModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setShowPhoneModal(false)}
        >
          <div
            className="mx-4 w-full max-w-sm bg-[#f5f1e8] p-8 text-center text-black"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.28em] text-black/48">
              Call me
            </p>
            <p className="text-3xl font-black tracking-tight">+880 1935 579051</p>
            <a
              href="tel:+8801935579051"
              className="mt-6 inline-block w-full border border-black/20 px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] transition hover:border-black hover:bg-black hover:text-white"
            >
              Call Now
            </a>
            <button
              onClick={() => setShowPhoneModal(false)}
              className="mt-3 w-full px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] text-black/50 transition hover:text-black"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
