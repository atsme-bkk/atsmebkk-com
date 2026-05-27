export function Hero() {
  return (
    <section className="py-6 md:py-10 flex flex-col items-center text-center container mx-auto px-4 overflow-hidden">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-6 md:mb-8 leading-[1.3] md:leading-[1.2]">
        สหพันธ์สมาคมผู้ประกอบการไทย <br />
        <span className="text-red-600 block mt-1 md:mt-2">กรุงเทพมหานคร</span>
      </h1>

      <div className="w-full max-w-5xl mb-6 md:mb-8 overflow-hidden rounded-lg md:rounded-xl border border-slate-200 bg-slate-900 shadow-sm">
        <video
          controls
          playsInline
          preload="metadata"
          poster="/event/june/jun13-1.jpg"
          className="w-full h-auto max-h-[70vh] object-contain mx-auto bg-black"
        >
          <source src="/event/june/june13.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="w-full max-w-5xl h-full">
        <div className="relative w-full h-full overflow-hidden rounded-lg md:rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
          <img
            src="/event/june/jun13-1.jpg"
            alt="FASME June Event"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}