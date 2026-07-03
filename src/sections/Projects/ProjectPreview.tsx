import type { Project } from "../../data/projects";
import { ProjectCarousel } from "./ProjectCarousel";

interface ProjectPreviewProps {
  project: Project;
  tall?: boolean;
  eager?: boolean;
}

function getHostname(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

export function ProjectPreview({ project, tall = false, eager = false }: ProjectPreviewProps) {
  const hasRealImages = project.images && project.images.length > 0;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] ${
        tall ? "aspect-[4/3.1] sm:aspect-[1400/740]" : "aspect-[4/3.3] sm:aspect-[1400/760]"
      }`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-error/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
        <span className="ml-3 truncate rounded-full bg-white/5 px-3 py-1 text-[11px] text-muted-foreground">
          {getHostname(project.liveUrl)}
        </span>
      </div>

      {/* Content: real screenshots when available, CSS mockup as fallback */}
      <div className="relative h-[calc(100%-40px)] w-full bg-gradient-to-br from-primary/10 via-surface to-secondary/10">
        {hasRealImages ? (
          <ProjectCarousel images={project.images} projectName={project.name} eager={eager} />
        ) : (
          <div className="h-full w-full p-5">
            <MockupContent slug={project.slug} />
          </div>
        )}
      </div>
    </div>
  );
}

function MockupContent({ slug }: { slug: Project["slug"] }) {
  switch (slug) {
    case "librix":
      return <LibrixMockup />;
    case "persona-agent":
      return <PersonaMockup />;
    case "super-app":
      return <SuperAppMockup />;
    case "pharmassist":
      return <PharmAssistMockup />;
  }
}

function LibrixMockup() {
  const rows = [
    { title: "Clean Code", status: "Available" },
    { title: "Atomic Habits", status: "Borrowed" },
    { title: "Deep Work", status: "Available" },
    { title: "The Pragmatic Engineer", status: "Available" },
  ];
  return (
    <div className="flex h-full gap-4">
      <div className="hidden w-24 shrink-0 flex-col gap-2 rounded-xl bg-white/5 p-3 sm:flex">
        {["Catalog", "Members", "Borrow", "Reports"].map((item, i) => (
          <div
            key={item}
            className={`rounded-lg px-2 py-1.5 text-[10px] font-medium ${
              i === 0 ? "bg-primary/30 text-white" : "text-muted-foreground"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="mb-1 h-3 w-28 rounded-full bg-white/15" />
        {rows.map((row) => (
          <div
            key={row.title}
            className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.04] px-3 py-2"
          >
            <span className="text-[11px] text-white/80">{row.title}</span>
            <span
              className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                row.status === "Available" ? "bg-success/20 text-success" : "bg-warning/20 text-warning"
              }`}
            >
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PersonaMockup() {
  return (
    <div className="flex h-full flex-col justify-end gap-2.5">
      <div className="mb-auto flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-success" />
        <span className="text-[10px] text-muted-foreground">Persona detected -- Technical</span>
      </div>
      <div className="max-w-[75%] self-start rounded-2xl rounded-bl-sm bg-white/10 px-3.5 py-2.5 text-[11px] text-white/85">
        How do I reset API rate limits for my account?
      </div>
      <div className="max-w-[80%] self-end rounded-2xl rounded-br-sm bg-gradient-to-r from-primary to-secondary px-3.5 py-2.5 text-[11px] text-background">
        Rate limits reset every 60 minutes on a rolling window -- here's how to check your current usage...
      </div>
      <div className="flex items-center gap-2 self-end text-[9px] text-muted-foreground">
        <span className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
          <span className="block h-full w-[92%] rounded-full bg-secondary" />
        </span>
        92% confidence
      </div>
    </div>
  );
}

function SuperAppMockup() {
  return (
    <div className="grid h-full grid-cols-3 grid-rows-2 gap-2.5">
      <div className="col-span-2 flex flex-col justify-between rounded-xl bg-white/[0.06] p-3">
        <span className="text-[10px] text-muted-foreground">Weather -- Chennai</span>
        <span className="font-display text-2xl font-bold text-white">31&deg;C</span>
      </div>
      <div className="row-span-2 flex flex-col gap-2 rounded-xl bg-white/[0.06] p-3">
        <span className="text-[10px] text-muted-foreground">News</span>
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-2 rounded-full bg-white/15" style={{ width: `${80 - i * 15}%` }} />
        ))}
      </div>
      <div className="col-span-2 flex items-center gap-2 rounded-xl bg-white/[0.06] p-3">
        <div className="h-8 w-6 rounded-sm bg-gradient-to-b from-primary/60 to-secondary/60" />
        <div className="flex-1">
          <div className="mb-1 h-2 w-20 rounded-full bg-white/15" />
          <div className="h-2 w-12 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  );
}

function PharmAssistMockup() {
  const meds = [
    { name: "Metformin", time: "8:00 AM", taken: true },
    { name: "Vitamin D3", time: "1:00 PM", taken: true },
    { name: "Atorvastatin", time: "9:00 PM", taken: false },
  ];
  return (
    <div className="flex h-full flex-col gap-2.5">
      <div className="mb-1 flex gap-1.5">
        {["M", "T", "W", "T", "F"].map((d, i) => (
          <span
            key={d + i}
            className={`flex h-6 w-6 items-center justify-center rounded-full text-[9px] ${
              i === 2 ? "bg-primary text-white" : "bg-white/5 text-muted-foreground"
            }`}
          >
            {d}
          </span>
        ))}
      </div>
      {meds.map((med) => (
        <div
          key={med.name}
          className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.04] px-3 py-2"
        >
          <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${med.taken ? "bg-success" : "bg-warning"}`} />
            <span className="text-[11px] text-white/80">{med.name}</span>
          </div>
          <span className="text-[9px] text-muted-foreground">{med.time}</span>
        </div>
      ))}
    </div>
  );
}
