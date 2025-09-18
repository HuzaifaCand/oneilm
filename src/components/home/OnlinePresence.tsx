import Image from "next/image";
import InfoCard from "./InfoCard";

export default function OnlinePresence() {
  return (
    <section className="px-4 flex items-center  justify-center py-12">
      <div className=" max-w-5xl mx-auto w-full bg-white border-4 border-accent shadow-sm rounded-2xl text-center px-4 py-20">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-primary text-2xl sm:text-3xl font-semibold">
            Why you NEED a strong Online Presence
          </h2>
        </div>
        <div className="space-y-12 max-w-3xl mx-auto">
          <InfoCard
            title="Save 20+ Hours a Week"
            paragraph="You can not afford to lose time. Streamline your administrative and marketing tasks with a professional online presence that works for you, allowing you to focus on teaching."
            icon={
              <Image
                src="/icons/Clock.svg"
                alt="Clock Icon"
                width={60}
                height={60}
              />
            }
          />
          <InfoCard
            title="Save 20+ Hours a Week"
            paragraph="You can not afford to lose time in this hyper-competitive teaching business. Streamline your administrative and marketing tasks with a professional online presence that works for you, allowing you to focus on teaching."
            icon={
              <Image
                src="/icons/Ppl.svg"
                alt="People Icon"
                width={50}
                height={50}
              />
            }
            flipped={true}
          />
          <InfoCard
            title="Save 20+ Hours a Week"
            paragraph="You can not afford to lose time. Streamline your administrative and marketing tasks with a professional online presence that works for you, allowing you to focus on teaching."
            icon={
              <Image
                src="/icons/Cred.svg"
                alt="Credibility Icon"
                width={50}
                height={50}
              />
            }
          />
          <InfoCard
            title="Save 20+ Hours a Week"
            paragraph="You can not afford to lose time in this hyper-competitive teaching business. Streamline your administrative and marketing tasks with a professional online presence that works for you, allowing you to focus on teaching."
            icon={
              <Image
                src="/icons/Stocks.svg"
                alt="Stocks Icon"
                width={40}
                height={40}
              />
            }
            flipped={true}
          />
          <InfoCard
            title="Save 20+ Hours a Week"
            paragraph="You can not afford to lose time. Streamline your administrative and marketing tasks with a professional online presence that works for you, allowing you to focus on teaching."
            icon={
              <Image
                src="/icons/Bars.svg"
                alt="Bars Icon"
                width={40}
                height={40}
              />
            }
          />
        </div>
      </div>
    </section>
  );
}
