import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg"
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg"
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {

  
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip ">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-10">
        <div className="absolute inset-0 -z-30 opacity-5" style={{backgroundImage: `url(${grainImage.src})`}}></div>
        <div className="size-[120px] md:size-[620px]  lg:size-[620px] hero-ring"></div>
        <div className="size-[320px] md:size-[820px]  lg:size-[820px] hero-ring"></div>
        <div className="size-[620px] md:size-[1120px] lg:size-[1120px] hero-ring"></div>
        <div className="size-[820px] md:size-[1320px] lg:size-[1320px] hero-ring"></div>
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[150px]" alt="Pessoa atrás de um notebook" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">Disponível para novos projetos</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto"> 
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Criando Ótimas Experiências de Usuário</h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Sou especializado em transformar designs em Aplicações Web funcionais e de alta-performance. Vamos discutir seu próximo projeto!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 z-10">
          <a href="#Projects" className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore Meu Trabalho</span>
            <ArrowDown className="size-4" />
          </a>
          <a href="#ContactMe" className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
            >
            <span>👋</span>
            <span className="">Vamos nos Conectar</span>
          </a>
        </div>
      </div>
    </div>
  )
};
