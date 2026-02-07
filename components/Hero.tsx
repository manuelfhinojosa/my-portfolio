import Image from "next/image";
export default function Hero() {
  return (
    <section id="hero" className="h-screen flex justify-center">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Manuel Hinojosa</h1>
          <p className="mt-6 text-xl text-gray-600 max-w-xl">
            {" "}
            Software Engineer — Committed to building secure and scalable
            systems.
          </p>
          <p className="mt-6 text-xl text-gray-600 max-w-xl">
            Python • TypeScript • Backend • Full Stack • AI-ready
          </p>
        </div>
        <div className="md:w-1/2 flex">
          <Image
            src="/images/ProfilePicture.jpg"
            width={192}
            height={192}
            alt="Hero Image"
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
