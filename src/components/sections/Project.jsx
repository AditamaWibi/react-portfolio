import RevealOnScroll from "../RevealOnScroll";

const Project = () => {
  const projectLists = [
    {
      name: "Movie Gallery",
      description:
        "This web application showcases movies from around the world. It demonstrates my proficiency in React JS and Tailwind CSS by utilizing an external API to fetch and display movie data. Additionally, Appwrite is used to implement an algorithm for identifying trending movies.",
      tech: [
        "React",
        "JavaScript",
        "AppWriter",
        "Tailwind CSS",
        "GitHub",
        "API",
      ],
      url: "https://github.com/AditamaWibi/movie-gallery",
    },
    {
      name: "YC Directory",
      description:
        "YC Directory is a website that I created using Next.JS 15, TypeScript, and Tailwind CSS. YC Directory is a website similar to X (Formerly known as Twitter).",
      tech: ["Next JS", "TypeScript", "Tailwind CSS", "GitHub", "API"],
      url: "https://github.com/AditamaWibi/yc_directory",
    },
    {
      name: "Student Administration",
      description:
        "A website that I created while still working at Bambino Learning Center Kediri that aims to enter and store student data.",
      tech: ["Laravel", "MySQL", "XAMPP", "Bootstrap", "Hostinger"],
      url: "https://github.com/AditamaWibi/bambino-farm",
    },
    {
      name: "Chicken Farm Administration",
      description:
        "A website that I created while still working at Bambino Learning Center Kediri that aims to enter and store data on chickens, eggs, chicken coops, and chicken feed.",
      tech: ["Laravel", "MySQL", "XAMPP", "Bootstrap", "Hostinger"],
      url: "https://github.com/AditamaWibi/bambino-farm",
    },
  ];

  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectLists.map((item, key) => (
              <div
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                key={key}
              >
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 my-4">
                  {item.tech.map((tech, i) => (
                    <span
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                      key={i}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div>
                  <a
                    href={item.url}
                    target="_blank"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="my-4">
            <a
              href="https://github.com/AditamaWibi"
              target="_blank"
              className="flex items-center justify-center gap-2 text-gray-100 hover:text-gray-400 transition-colors"
            >
              View Other Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Project;
