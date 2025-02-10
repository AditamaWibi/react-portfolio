import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = ["React", "TypeScript", "Tailwind CSS"];

  const backendSkills = ["Node JS", "PHP", "MySQL"];

  const workExperiences = [
    {
      title: "Fullstack Web Developer",
      company: "Bambino Learning Center Kediri",
      period: "Dec 2022 - Dec 2024",
      jobdesk: [
        "Develop a responsive and efficient web application for administration using Laravel and Bootstrap frameworks and store data using MySQL.",
        "Improve the efficiency of the administration process by 20% by automating routine tasks using the developed application.",
      ],
    },
    {
      title: "Teacher & Office Staff",
      company: "Ar-Risallah Islamic Boarding School Lirboyo Kediri",
      period: "May 2022 - Nov 2022",
      jobdesk: [
        "Created learning materials for students in grades 1 and 2 of high school and succeeded in increasing the average score of students in information technology subjects by 15%.",
        "Working on school administration.",
      ],
    },
    {
      title: "Intern Programmer",
      company: "PT. Bhakti Idola Tama",
      period: "Jan 2022 - March 2022",
      jobdesk: [
        "Developed the front-end of the company's B2B website using the Angular framework and implemented third-party APIs.",
        "Improved the loading speed of the company's B2B website by 10%.",
      ],
    },
  ];

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
              Hi there 👋🏽 I am Wibi Aditama, and I am a Web Developer with more
              than 2 years of experience in developing and optimizing
              medium-scale web applications. Successfully increased application
              efficiency up to 20% through the implementation of API-based
              features. Proficient in PHP, JavaScript, MySQL, as well as
              frameworks and tools such as Laravel, Tailwind CSS, Bootstrap, and
              React JS. Skilled in designing responsive and scalable interfaces,
              with a focus on innovative and impactful web solutions.
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
                {workExperiences.map((item, key) => (
                  <div key={key}>
                    <h4 className="font-semibold">
                      {item.title} at {item.company} ({item.period})
                    </h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {item.jobdesk.map((job, i) => (
                        <li key={i}>{job}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
