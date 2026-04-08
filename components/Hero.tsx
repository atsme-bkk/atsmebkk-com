import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="py-10 md:py-10 flex flex-col items-center text-center container mx-auto px-4 overflow-hidden">
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-4xl lg:text-4xl mb-8 leading-[1.2]">
        สหพันธ์สมาคมผู้ประกอบการไทย <br />
        <span className="text-red-600 block mt-2">กรุงเทพมหานคร</span>
      </h1>
      <div className="mt-2 mb-10">
        <a
          href="https://forms.gle/prP8t3nLeYJpSV6U6"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block"
        >
          <Button
            className="rounded-full font-bold bg-red-500 hover:bg-black text-white shadow-lg transition-all"
            style={{
              width: '500px',  // กำหนดความกว้างเป็น PX
              height: '60px',  // กำหนดความสูงเป็น PX
              fontSize: '18px' // ปรับขนาดตัวอักษรให้เหมาะสมกับปุ่มใหญ่
            }}
          >
            ลงทะเบียนเชื่อมโยง - นักธุรกิจชาวไต้หวัน/มาเลเซีย
          </Button>
        </a>
      </div>

      {/* Container สำหรับรูปภาพ 3 รูป เรียงแบบ 1 แถวต่อ 1 รูป */}
      <div className="w-full max-w-7xl flex flex-col gap-6">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border bg-slate-100 shadow-sm py-6">
          <img
            src="/event/april/a2.jpg"
            alt="Activities 1"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border bg-slate-100 shadow-sm py-6 mb-10 mt-10">
          <img
            src="/event/april/a3.jpg"
            alt="Activities 2"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border bg-slate-100 shadow-sm py-6">
          <img
            src="/event/april/a1.jpg"
            alt="Activities 3"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="mt-10">
        <a
          href="https://forms.gle/prP8t3nLeYJpSV6U6"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block"
        >
          <Button
            className="rounded-full font-bold bg-red-500 hover:bg-black text-white shadow-lg transition-all"
            style={{
              width: '500px',  // กำหนดความกว้างเป็น PX
              height: '60px',  // กำหนดความสูงเป็น PX
              fontSize: '18px' // ปรับขนาดตัวอักษรให้เหมาะสมกับปุ่มใหญ่
            }}
          >
            ลงทะเบียนเชื่อมโยง - นักธุรกิจชาวไต้หวัน/มาเลเซีย
          </Button>
        </a>
      </div>
    </section>
  );
}