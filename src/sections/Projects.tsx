import animeTrackerPage from "@/assets/images/anime-tracker-page.png";
import meetupPage from "@/assets/images/meet-up-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "MeetUp",
    year: "2024",
    title: "MeetUp Spot",
    results: [
      { title: "Encontre o melhor lugar para se encontrar!" },
      { title: "Aplicação acelerada por IA" },
      { title: "Funcionalidade baseada em Geometria Não-Euclidiana" },
    ],
    link: "https://portfolio-fernando-3za5.vercel.app/",
    image: meetupPage,
  },
  {
    company: "Anime Tracker",
    year: "2024",
    title: "Anime Tracker",
    results: [
      { title: "Organize os seus Animes favoritos!" },
      { title: "Integrado com o maior site de Animes do mundo" },
      { title: "Design clean e responsivo" },
    ],
    link: "https://anime-tracker-vert.vercel.app/",
    image: animeTrackerPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="Projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader title={"Resultados Reais"} eyebrow={"Projetos em Destaque"} description={"Veja como eu transformei conceitos em experiências digitais"} />

        <div className="flex flex-col mt-10 md:mt-20  gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card  key={project.title} className="lg:pt-16 lg:px-20 md:pt-12 md:px-10 px-8 pt-8 sticky"
            style = {{
              top : `calc(64px + ${projectIndex * 40}px)`,
            }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map(result => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="md:w-auto px-6 bg-white text-gray-900 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visite o Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
