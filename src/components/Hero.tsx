const GRADIENT_TEXT = "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent";
const GRADIENT_BG = "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-base-100 py-20 px-4">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Build Your Perfect{" "}
            <span className={GRADIENT_TEXT}>Dev Stack</span>
          </h1>
          <p className="text-base-content/60 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
            Explore the best technologies, frameworks, and tools. Curate your
            own developer stack and share what powers your projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            
            <a href="#technologies"
              className={`btn rounded-full text-white border-none ${GRADIENT_BG} hover:opacity-90 px-6`}
            >
              Explore Technologies
            </a>
            
            < a href="#about"
              className="btn btn-outline rounded-full px-6"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className={`absolute inset-0 rounded-3xl ${GRADIENT_BG} opacity-20 blur-2xl`} />
            <div className="relative grid grid-cols-3 gap-4 p-6">
              {[
                "https://icon.icepanel.io/Technology/svg/React.svg",
                "https://icon.icepanel.io/Technology/svg/Node.js.svg",
                "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
                "https://icon.icepanel.io/Technology/svg/Python.svg",
                "https://icon.icepanel.io/Technology/svg/Docker.svg",
                "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
                "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
                "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
                "https://icon.icepanel.io/Technology/svg/Git.svg",
              ].map((src, i) => (
                <div
                  key={i}
                  className="bg-base-200 rounded-2xl p-3 flex items-center justify-center shadow"
                >
                  <img src={src} alt="" className="w-10 h-10 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;