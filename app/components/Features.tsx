export function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">ทำไมต้องเลือกเรา</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 bg-background rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
              <div className="h-16 w-16 rounded-full bg-slate-100 mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-900">{i}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">คุณสมบัติที่ {i}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                รายละเอียดเกี่ยวกับคุณธรรมและความเป็นเลิศของโครงการ FA SME Bangkok เพื่อพัฒนาผู้ประกอบการไทย
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
