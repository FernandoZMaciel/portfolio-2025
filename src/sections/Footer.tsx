import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks =  [
  {
    title: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=5547996697380&text=Pronto%20para%20dar%20vida%20ao%20seu%20projeto?%20Vamos%20nos%20conectar%20e%20alinhar%20como%20posso%20te%20ajudar%20a%20construir%20seus%20objetivos.',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/fernandoz.maciel/',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/fernando-zimmermann-maciel-917a88198/',
  },
]

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="-z-10 absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]" ></div>
      <div className="container">
        <div className=" border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy;2025. Todos os direitos reservados.</div>
          <nav  className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map(link => (
              <a target="blank" href={link.href} key={link.title} className="inline-flex items-center gap-1.5 pointer-events-auto">
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4"/>
              </a>
            ))}
          </nav>  
        </div>
      </div>
    </footer>
  );
};
