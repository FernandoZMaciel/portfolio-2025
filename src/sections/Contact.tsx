import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return(
    <div id="ContactMe" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div className="absolute inset-0 opacity-5 -z-10"
          style={{
            backgroundImage: `url(${grainImage.src})`,
           }}></div>
           <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">Vamos construir algo incrivel juntos!</h2>
              <p className="text-sm md:text-base mt-2">
                Pronto para dar vida ao seu projeto? Vamos nos conectar e alinhar como posso te ajudar a construir seus objetivos.
            </p>
            </div>
            <div>
              <a target="blank" href="https://api.whatsapp.com/send?phone=5547996697380&text=Pronto%20para%20dar%20vida%20ao%20seu%20projeto?%20Vamos%20nos%20conectar%20e%20alinhar%20como%20posso%20te%20ajudar%20a%20construir%20seus%20objetivos." className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                <span className="font-semibold">Entrar em Contato</span>
                <ArrowUpRightIcon  className="size-4"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
