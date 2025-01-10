"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import pragmaticProgrammerCover from "@/assets/images/PragmaticProgrammer.png";
import cleanCodeCover from "@/assets/images/cleanCode.png";
import scienceComputation from "@/assets/images/ComputerScience.png"
import Image from "next/image";
import smileMemoji from "@/assets/images/memoji-smile.png";
import mapImage from "@/assets/images/map.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import JavaIcon from "@/assets/icons/java.svg";
import SpringbootIcon from "@/assets/icons/spring-boot.svg";
import TailwindIcon from "@/assets/icons/tailwindCss.svg";
import SQLIcon from "@/assets/icons/sql.svg";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const images = [
   pragmaticProgrammerCover,
   cleanCodeCover, 
   scienceComputation
];

const toolboxItems = [
 {
  title: 'Java',
  iconType: JavaIcon,
 },
 {
  title: 'SpringBoot',
  iconType: SpringbootIcon,
 },
 {
  title: 'JavaScript',
  iconType: JavascriptIcon,
 },
 {
  title: 'HTML5',
  iconType: HTMLIcon,
 },
 {
  title: 'TailwindCSS',
  iconType: TailwindIcon,
 },
 {
  title: 'Github',
  iconType: GitHubIcon,
 },
 {
  title: 'SQL',
  iconType: SQLIcon,
 },
]

const hobbies = [
  {
    title: 'VideoGames',
    emoji: '🎮',
    left: '5%',
    top: '5%'
  },
  {
    title: 'Anime',
    emoji: '🍙',
    left: '50%',
    top: '5%'
  },
  {
    title: 'Piano',
    emoji: '🎹',
    left: '35%',
    top: '40%'
  },
  {
    title: 'Vôlei',
    emoji: '🏐',
    left: '70%',
    top: '45%'
  },
  {
    title: 'Gatos',
    emoji: '🐱‍👤',
    left: '5%',
    top: '65%'
  },
  {
    title: 'Matemática',
    emoji: '➗',
    left: '10%',
    top: '35%'
  },
  {
    title: 'Rock and Roll',
    emoji: '🎸',
    left: '45%',
    top: '70%'
  }
]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => {
          const currentIndex = images.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % images.length;
          return images[nextIndex];
        });
        setFade(true); 
      }, 1000); 
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);
  return (
    <div id="AboutMe" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader title={"Um Pouco do Meu Mundo"} eyebrow={"Sobre Mim"} description={"Conheça um pouco mais sobre que eu sou, o que eu faço e o que me inspira."} />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title={"Leitura"} description={"Explore os livros que moldam quem eu sou."}/>
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image className={`transition-opacity duration-1000 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`} src={currentImage} alt="Capa do Livro"/>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader className="" title={"Tecnologias"} description={"Explore as tecnologias e ferramentas que utilizo para criar experiências digitais."}/>
              <ToolboxItems className="" items={toolboxItems} itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
              <ToolboxItems className="mt-6" itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]" items={toolboxItems} />
            </Card>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader title={"Por Trás do Código"} description={"Explore meus interesses e hobbies."} className="px-6 pt-6"/>  
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map(hobby => (
                  <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }} drag dragConstraints = {constraintRef}>
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image className="h-full w-full object-cover object-left-top" src={mapImage} alt="mapa" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:1.5s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 "></div>
                <Image className="size-20" src={smileMemoji} alt="memoji sorrindo"/>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
