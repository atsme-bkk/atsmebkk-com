export function Footer() {
  return (
    <footer className="border-t bg-slate-50 my-5 mt-10 mb-15 mx-auto">
      <div className="container flex flex-col items-center text-center gap-4">
        <p className="text-sm font-medium text-slate-600">
          © {new Date().getFullYear()} FA SME Bangkok. สหพันธ์สมาคมผู้ประกอบการไทย จังหวัดกรุงเทพมหานคร.
        </p>
        <p className="text-xs text-muted-foreground italic">
          ร่วมสร้างสังคมผู้ประกอบการไทยให้เข้มแข็งและยั่งยืน
        </p>
      </div>
    </footer>
  );
}
