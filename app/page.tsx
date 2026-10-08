"use client";

const WEB3FORMS_ACCESS_KEY = "2596a311-7ed0-46fd-ad00-17d465f61f7d";

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  formData.append("access_key", WEB3FORMS_ACCESS_KEY);
  formData.append("subject", "New message from Sandiso Bio");
  formData.append("from_name", "Sandiso Bio Website");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const result = await response.json();

  if (result.success) {
    alert("Message sent successfully!");
    (event.target as HTMLFormElement).reset();
  } else {
    alert("Something went wrong. Please try again.");
  }
};

const expertise = [
  {
    title: "Facilitation",
    description:
      "Practical learning experiences across public-sector, workplace readiness and skills development programmes.",
  },
  {
    title: "Data & AI",
    description:
      "Data science, artificial intelligence and practical AI literacy for learners, educators and professionals.",
  },
  {
    title: "Digital Skills",
    description:
      "Digital literacy, coding, productivity tools and technology-enabled learning.",
  },
];

const experience = [
  {
    role: "Facilitator",
    organisation: "Edunova",
    period: "2025 — Present",
    description:
      "Facilitating workplace readiness, AI fluency, digital skills and technology-focused learning programmes.",
  },
  {
    role: "Data Science Intern / Team Lead",
    organisation: "SAND Technologies",
    period: "2024",
    description:
      "Applied data science, analytics and machine learning while supporting team-based technical projects.",
  },
  {
    role: "Economics Teacher",
    organisation: "Tholukukhanya High School",
    period: "2021 — 2022",
    description:
      "Taught Grade 12 Economics and supported learners through structured teaching, assessment and academic development.",
  },
];

const qualifications = [
  "Bachelor of Accounting Science — University of the Witwatersrand",
  "Data Science — Explore AI Academy",
  "AI Fluency — Microsoft",
  "Enterprise Design Thinking Practitioner — IBM",
  "GenAI Course for Software Engineers — WeThinkCode",
  "Introduction to Cybersecurity — Cisco Networking Academy",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070A13] text-[#111827]">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-lg font-bold tracking-tight text-white">
            SANDISO MAGWAZA{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              BIO.
          </span>
        </div>

        <div className="hidden gap-8 text-sm font-medium text-slate-100 md:flex">
          <a href="#about" className="transition hover:text-blue-600">
            About
          </a>
          <a href="#experience" className="transition hover:text-blue-600">
            Experience
          </a>
          <a href="#expertise" className="transition hover:text-blue-600">
            Expertise
          </a>
          <a href="#contact" className="transition hover:text-blue-600">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto grid min-h-[75vh] max-w-6xl items-center gap-12 overflow-hidden px-6 py-20 md:grid-cols-[1fr_420px]">

        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" />

        <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
    
        <div className="max-w-2xl">
          <p className="animate-fade-left mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#7C3AED]">
            Professional Facilitator
          </p>

          <h1 className="animate-fade-left text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
            Sandiso
            <br />
            <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">Magwaza.</span>
          </h1>

          <p className="animate-fade-left mt-8 max-w-2xl text-xl leading-8 text-slate-300">
            Facilitator, data professional and digital skills practitioner
            passionate about helping people learn, adapt and use technology
            with confidence.
          </p>

          <div className="animate-fade-up mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Contact Me
            </a>

            <a
              href="#experience"
              className="animate-fade-up rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold transition hover:border-slate-400"
            >
              View Experience
            </a>
          </div>
        </div>
        {/* Profile Image */}
        <div className="animate-fade-up relative mx-auto w-full max-w-sm md:mx-0">
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-cyan-400/20 blur-3xl" />

          <div className="animate-pulse absolute -inset-10 rounded-[3rem] bg-blue-500/40 blur-3xl" />

          <div className="animate-fade-right relative overflow-hidden rounded-[2rem] bg-black/20 p-2 shadow-2xl shadow-blue-500/20">
            <img
              src="/images/Sandiso.jpeg"
              alt="Sandiso Magwaza"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/80 bg-white/95 px-5 py-4 shadow-xl shadow-slate-300/40 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3B82F6]">
              Focus Areas
            </p>

            <p className="mt-1 font-bold text-slate-900">
              Data • AI • Accounting • Finance
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-slate-200 bg-[#3B82F6]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                About Me
              </p>
            </div>

            <div>
              <h2 className="animate-fade-up text-3xl font-bold tracking-tight sm:text-4xl">
                Learning, technology and people.
              </h2>

              <p className="animate-fade-up mt-6 text-lg leading-8 text-slate-600">
                I am a facilitator and data professional with a background in
                accounting, data science, education and digital skills
                development. My work sits at the intersection of people,
                learning and technology.
              </p>

              <p className="animate-fade-up mt-5 text-lg leading-8 text-slate-600">
                I enjoy making complex concepts practical and accessible,
                particularly in environments where learners are developing
                new professional and digital skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="bg-[#CBD5E1]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="animate-fade-left text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            What I Do
          </p>

          <h2 className="animate-fade-left mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Areas of expertise
          </h2>

          <div className="animate-fade-up mt-12 grid gap-6 md:grid-cols-3">
  {expertise.map((item, index) => {
    const styles = [
      "bg-[#2563EB] text-white",
      "bg-[#7C3AED] text-white",
      "bg-[#F59E0B] text-slate-950",
    ];

    return (
      <div
        key={item.title}
        className={`rounded-3xl p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${styles[index]}`}
      >
        <div className="mb-10 text-sm font-bold uppercase tracking-[0.2em] opacity-70">
          0{index + 1}
        </div>

        <h3 className="text-2xl font-bold">{item.title}</h3>

        <p className="mt-4 leading-7 opacity-85">
          {item.description}
        </p>
      </div>
    );
  })}
</div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="animate-fade-left text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Experience
          </p>

          <h2 className="animate-fade-left mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Professional journey
          </h2>

          <div className="mt-12 space-y-10">
            {experience.map((item) => (
              <div
                key={`${item.organisation}-${item.role}`}
                className="grid gap-4 border-b border-slate-200 pb-10 md:grid-cols-[220px_1fr]"
              >
                <div>
                  <p className="text-sm font-semibold text-blue-600">
                    {item.period}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold">{item.role}</h3>
                  <p className="mt-1 font-medium text-slate-500">
                    {item.organisation}
                  </p>

                  <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Qualifications
          </p>

          <h2 className="animate-fade-up mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Education & professional development
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {qualifications.map((qualification) => (
              <div
                key={qualification}
                className="animate-fade-right rounded-xl border border-slate-800 bg-slate-900 p-6"
              >
                {qualification}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="animate-fade-left text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Get In Touch
            </p>

            <h2 className="animate-fade-left mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s work together.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Interested in facilitation, digital skills, AI literacy or
              technology-enabled learning? Get in touch.
            </p>

            <div className="mt-10 max-w-xl">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-black"
                    >
                      Your Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-black"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me how I can help..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-blue-500/30"
                  >
                    Send Message
                  </button>
                  </form>
                  <div className="mt-6">
                    <a
                      href="https://www.linkedin.com/in/sandiso-magwaza"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-blue-500/30"
                    >
                      LinkedIn
                    </a>
                  </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-[#f7f9fc]">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Sandiso Magwaza. All rights reserved.
        </div>
      </footer>
    </main>
  );
}