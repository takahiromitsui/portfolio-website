import Intro from "@/components/intro";

type Params = Promise<{ lng: string }>;

export default async function Home({ params }: { params: Params }) {
  const { lng } = await params;
  return (
    <main className="flex flex-col items-center px-4">
      <Intro params={{ lng }} />
      {/* 
      <SectionDivider />
      <About params={{ lng }} />
      <Projects params={{ lng }} />
      <Skills params={{ lng }} />
      <Experience params={{ lng }} /> */}
    </main>
  );
}
