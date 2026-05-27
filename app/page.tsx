// 📌 แก้ไขไฟล์ app/page.tsx ด้านบนสุดให้เป็นแบบนี้ทั้งหมดครับ:
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features"; // 👈 เปลี่ยนจาก @/ เป็น ./ ให้หมด
import { Footer } from "./components/Footer";     // 👈 เปลี่ยนจาก @/ เป็น ./ ให้หมด

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        {/* <Features /> */}
      </main>
      <Footer />
    </div>
  );
}