import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[3/4] max-w-[800px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/DNABG.png"
                alt="DNA background image"
                fill
                style={{ objectFit: 'cover' }} // Ensures the image covers the container
                className="drop-shadow-three dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Innovative DNA Data Storage
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color sm:text-lg sm:leading-relaxed">
                  Our platform leverages cutting-edge technology to store data in DNA, offering unparalleled storage density and long-term preservation. DaasS bridges the gap between businesses and advanced laboratories, making this revolutionary solution accessible to all.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Seamless Integration
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color sm:text-lg sm:leading-relaxed">
                  With our user-friendly interface, businesses can easily manage their DNA data storage needs, ensuring that their valuable information is secure and readily accessible.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Cutting-Edge Support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color sm:text-lg sm:leading-relaxed">
                  DaasS provides comprehensive support to help businesses transition to this innovative storage solution, ensuring a smooth and efficient process every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;