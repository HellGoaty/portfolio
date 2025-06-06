export default function ContactNetworkSlides() {
  return (
    <div className="h-[calc(100vh-100px)] flex flex-col justify-center relative z-10">
      <div className="flex-1 w-full flex items-center justify-end border-t dark:border-secondary-light border-primary-dark">
        <a
          href="https://github.com/HellGoaty"
          className="uppercase text-5xl tracking-wide font-medium mr-[5%] text-right transition-transform duration-200 ease-in-out hover:-translate-x-2.5 cursor-pointer"
        >
          GitHub
        </a>
      </div>
      <div className="flex-1 w-full flex items-center justify-end border-t dark:border-secondary-light border-primary-dark">
        <a
          href="https://www.linkedin.com/in/etienne-gagniere/"
          className="uppercase text-5xl tracking-wide font-medium mr-[5%] text-right transition-transform duration-200 ease-in-out hover:-translate-x-2.5 cursor-pointer"
        >
          LinkedIn
        </a>
      </div>
      <div className="flex-1 w-full flex items-center justify-end border-t dark:border-secondary-light border-primary-dark">
        <a
          href="mailto:etienne.gagniere@gmail.com"
          className="uppercase text-5xl tracking-wide font-medium mr-[5%] text-right transition-transform duration-200 ease-in-out hover:-translate-x-2.5 cursor-pointer"
        >
          E-mail
        </a>
      </div>
    </div>
  );
}
