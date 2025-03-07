import Image from "next/image"

export function Scroller() {
  return (
    <div className="bg-primary py-4 overflow-hidden">
      <div className="flex animate-scroll">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center mx-4 text-white">
            <Image src="/dc-logo.png" alt="DC Studio Logo" width={30} height={30} />
            <span className="ml-2 text-lg font-semibold">Addinda Ayu Arsyah Portfolio</span>
          </div>
        ))}
      </div>
    </div>
  )
}

