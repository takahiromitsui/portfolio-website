import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Posts from "@/components/posts";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

type Params = Promise<{ lng: string }>;

export default async function Home({ params }: { params: Params }) {
  const { lng } = await params;
  return (
    <main className="flex flex-col items-center px-4">
      <Intro params={{ lng }} />
      <SectionDivider />
      <About params={{ lng }} />
      <Experience params={{ lng }} />
      <Projects params={{ lng }} />
      <Posts params={{ lng }} />
      <Skills params={{ lng }} />
    </main>
  );
}
