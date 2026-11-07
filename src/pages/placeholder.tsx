export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex justify-center border-b border-primary px-8">
      <title>{`Project Automata | ${title}`}</title>
      <div className="grid w-full max-w-7xl grid-cols-1 gap-6 border-x border-primary md:grid-cols-[3fr_2fr]">
        <div className="min-w-0 px-6 py-20">
          <h1 className="font-['Bitter',serif] text-8xl">{title}</h1>
          <h2 className="mt-8 font-['Bitter',serif] text-3xl">Coming soon</h2>
          <p className="mt-8">This page is currently being prepared.</p>
        </div>
        <div className="min-w-0 border-l border-primary px-6 py-20"></div>
      </div>
    </div>
  )
}
