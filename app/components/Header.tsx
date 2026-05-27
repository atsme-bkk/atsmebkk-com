import Image from "next/image";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto flex flex-col items-center py-6 gap-6 px-4">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/fasme-logo.jpg"
            alt="FA SME BANGKOK Logo"
            width={100}
            height={150}
            className="h-auto w-auto max-w-[150px]"
            priority
          />
        </div>

        {/* <nav className="flex items-center gap-8 text-sm font-semibold uppercase tracking-wide">
          <a href="#features" className="transition-colors hover:text-red-600 text-foreground/70">ข่าวสาร</a>
          <a href="#about" className="transition-colors hover:text-red-600 text-foreground/70">เกี่ยวกับเรา</a>
          <a href="#contact" className="transition-colors hover:text-red-600 text-foreground/70">ติดต่อเรา</a>
          <Button variant="outline" size="sm" className="rounded-full border-red-600 text-red-600 hover:bg-red-50">เข้าสู่ระบบ</Button>
        </nav> */}
      </div>
    </header>
  );
}
