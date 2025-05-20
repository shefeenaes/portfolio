"use client";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="relative bg-black text-white bg-fixed bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('/intro-1.jpg')`,
      }}
    >
      <div className="text-center">
        <div className="py-20 bg-gradient-to-b from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.66)] to-[rgba(0,0,0,0.4)] bg-fixed">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Check out my résumé!
            </h2>
            <div id="resume-button">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 border-2 border-gray-300 text-gray-300 font-light text-base tracking-wide transition-all duration-300 hover:text-white hover:bg-white/20 hover:px-8"
              >
                Grab A Copy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
