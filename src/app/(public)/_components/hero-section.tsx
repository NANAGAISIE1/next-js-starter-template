import Image from "next/image";

import RegisterationLink from "@/components/buttons/register-link";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="flex h-full flex-col items-center justify-center gap-y-6">
      <div className="relative flex flex-col items-center justify-center  text-center">
        <div>
          <h1 className="font-mont">Learn, organize, and excel.</h1>
          <h1>With your AI companion.</h1>
          <p className="text-xl ">
            SmartNote is your personal learning oasis, adapting to your unique
            educational journey.
          </p>
        </div>
        {/* <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="absolute inset-0 block h-full w-full dark:hidden"
          particleColor={"#000000"}
        />
        <SparklesCore
          id="tsparticlesfullpagedark"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="absolute inset-0 hidden h-full w-full dark:block"
          particleColor={"#ffffff"}
        /> */}
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="flex w-fit items-center justify-center">
          <RegisterationLink label="Get started" arrow={true} />
        </div>
      </div>
      <Image
        src={"/genius.svg"}
        alt="Messy Doodle"
        height={400}
        width={400}
        className="fill-background stroke-foreground"
        priority
        quality={100}
      />
    </section>
  );
};

export default HeroSection;
