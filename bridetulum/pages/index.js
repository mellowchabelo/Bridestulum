// Proyecto: bridestulum.com
// Estructura base en Next.js + TailwindCSS
// Objetivo: sitio minimalista, elegante, con foco en novias que planean boda en Tulum

export default function BrideTulum() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-inter">
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">Tulum Wedding Photography</h1>
        <p className="text-lg md:text-xl max-w-xl mb-6">
          Timeless, natural, and emotional photography for destination weddings in Tulum. Captured with intention by Diptych Studio.
        </p>
        <a href="#gallery" className="bg-black text-white px-6 py-3 rounded-2xl text-sm tracking-wide hover:opacity-80 transition">
          Explore Our Portfolio
        </a>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-6 bg-neutral-100">
        <h2 className="text-3xl font-semibold text-center mb-10">Tulum Wedding Inspiration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="https://diptychstudio.com/wp-content/uploads/2022/09/be-tulum-bridal-photoshoot-1.jpg" alt="Bride at Be Tulum Hotel" className="rounded-2xl object-cover w-full h-64" />
          <img src="https://diptychstudio.com/wp-content/uploads/2022/09/be-tulum-bridal-photoshoot-2.jpg" alt="Wedding ceremony at Be Tulum Hotel" className="rounded-2xl object-cover w-full h-64" />
          <img src="https://diptychstudio.com/wp-content/uploads/2022/09/be-tulum-bridal-photoshoot-3.jpg" alt="Couple at Be Tulum Hotel" className="rounded-2xl object-cover w-full h-64" />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Let’s Talk About Your Wedding</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Name" className="border p-3 rounded-lg" />
          <input type="email" placeholder="Email" className="border p-3 rounded-lg" />
          <input type="text" placeholder="Wedding Date" className="border p-3 rounded-lg" />
          <textarea placeholder="Tell us about your dream wedding..." className="border p-3 rounded-lg h-32" />
          <button type="submit" className="bg-black text-white py-3 px-6 rounded-2xl hover:opacity-80 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-sm text-neutral-500">
        © {new Date().getFullYear()} BrideTulum · Tulum Wedding Photographer · Diptych Studio
      </footer>
    </main>
  )
}
