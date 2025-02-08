import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = ["React", "TypeScript", "Tailwind CSS"];

  const backendSkills = ["Node JS", "PHP", "MySQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              vitae numquam nostrum modi dolorum libero laboriosam laborum, odio
              voluptate consequuntur corporis, itaque adipisci officia atque
              odit quibusdam dolores cumque harum, porro molestiae quis? Saepe
              itaque possimus quae ad cum eos vel dolore, asperiores expedita,
              reprehenderit beatae architecto. A dolorem eaque assumenda
              incidunt repudiandae amet totam iure nulla ab at ullam magni
              quisquam perferendis quasi, debitis dignissimos nihil vero
              corporis! Beatae molestias corrupti recusandae, modi fugit fuga
              dolor alias, doloribus cum porro eos repellat omnis sit
              dignissimos suscipit atque placeat quo officia officiis
              consequuntur blanditiis! A nesciunt consequatur laudantium quos
              voluptatem?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>

                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((item) => (
                    <span
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>

                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((item) => (
                    <span
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S. in Information System</strong> - Telkom
                  University
                </li>
                <li>
                  Relevant Coursework: Advanced Relational Database and SQL
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>

              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Fullstack Web Developer at Bambino Learning Center Kediri
                    (Dec 2022 - Dec 2024)
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, odit quod! Voluptate enim pariatur ut quasi totam,
                    eaque facilis culpa possimus aut quod? Mollitia distinctio
                    suscipit nesciunt ut ea blanditiis!
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Teacher and Office Staff at Ar-Risallah Islamic Boarding
                    School Lirboyo Kediri (Mei 2022 - Nov 2022)
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, odit quod! Voluptate enim pariatur ut quasi totam,
                    eaque facilis culpa possimus aut quod? Mollitia distinctio
                    suscipit nesciunt ut ea blanditiis!
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Programmer at PT. Bhakti Idola Tama (Jan 2022 - March 2022)
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, odit quod! Voluptate enim pariatur ut quasi totam,
                    eaque facilis culpa possimus aut quod? Mollitia distinctio
                    suscipit nesciunt ut ea blanditiis!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
