import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 bg-cover bg-center bg-no-repeat bg-[url('/images/hero/rm373batch15-bg-01.jpg')] pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        style={{
          minHeight: '100vh', 
        }}      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  DNA as a Service
                </h1>
                <div className="relative inline-block">
                  <p
                    className="text-xl font-bold text-white-800  text-white dark:text-white  transition-transform transform hover:translate-y-[-5px]  hover:text-shadow-lg cursor-default p-2"
                  >
                    Unlock the Future of Data: Store Eternity in DNA.
                    <span
                      className="absolute left-0 bottom-0 block w-full h-1 bg-blue-500 transition-transform transform scale-x-0 origin-right group-hover:scale-x-100"
                    ></span>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="./upload"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Start
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Hero;
