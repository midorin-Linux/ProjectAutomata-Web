export function About() {
  return (
    <div className="flex justify-center border-b border-primary px-8">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-6 border-x border-primary md:grid-cols-[3fr_2fr]">
        <div className="min-w-0 px-6 py-20">
          <h1 className="font-['Bitter',serif] text-8xl">About us</h1>
          <h2 className="mt-8 font-['Bitter',serif] text-3xl">
            Intelligence With No Boundaries
          </h2>
          <p className="mt-8">
            Project Automata is an integrated initiative dedicated to advancing
            AI through research, development, and real-world applications.
          </p>
        </div>
        <div className="min-w-0 border-l border-primary px-6 py-20">
          {/*<h2 className="font-['Bitter',serif] text-3xl">Our focus</h2>*/}
          {/*<p className="mt-8">*/}
          {/*  Research, development, and real-world applications of AI.*/}
          {/*</p>*/}
        </div>
      </div>
    </div>
  )
}
