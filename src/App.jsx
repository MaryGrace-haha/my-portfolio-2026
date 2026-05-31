function App() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="max-w-6xl mx-auto flex justify-between py-8 px-8 text-sm text-gray-400">
        <span className="text-white font-bold text-lg">Mary Grace Gallito</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-orange-500">Home</a>
          <a href="#" className="hover:text-orange-500">About</a>
          <a href="#" className="hover:text-orange-500">Projects</a>
          <a href="#" className="hover:text-orange-500">Contacts</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto py-20 px-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-6">Hello<span className="text-orange-300">.</span></h1>
          <p className="text-5xl text-gray-500 mb-2">I'm Mary Grace</p>
          
          <div className="flex gap-6 mt-8">
            <button className="bg-orange-500 px-6 py-2 rounded hover:bg-orange-600 transition">Got a project?</button>
            <button className="border border-gray-600 px-6 py-2 rounded hover:border-orange-500 transition">My resume</button>
          </div>
        </div>
        
        <div className="w-80 h-80 border-2 border-orange-500 rounded-full flex items-center justify-center overflow-hidden">
          <img src="/formalpic.jpg" alt="MaryGrace Gallito" className="object-cover w-full h-full" />
        </div>
      </section>

      {/* Skills */}
      <div className="max-w-6xl mx-auto px-8 flex justify-between text-gray-500 border-b border-gray-800 pb-10 mb-20">
        {["C#", "Java", "JavaScript", "Android Studio", "React"].map(skill => <span key={skill}>{skill}</span>)}
      </div>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-8 grid grid-cols-2 gap-20 mb-20">
        <div className="space-y-8 text-gray-400">
          <h2 className="text-2xl font-bold text-white mb-4">Expertise</h2>
          <p>• Mobile Development (Android Studio)</p>
          <p>• Web Development (React & JS)</p>
          <p>• Computer Vision AI Integration</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">About me</h2>
          <p className="text-gray-400 mb-10">
            I am a passionate IT student from STI College. I focus on building smart solutions, 
            like my current capstone project involving AI Visualizers for the beauty industry.
          </p>
          <div className="flex gap-12">
            <div><p className="text-3xl font-bold text-orange-500">3+</p><p className="text-sm">Major Projects</p></div>
            <div><p className="text-3xl font-bold text-orange-500">100%</p><p className="text-sm">Dedication</p></div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section className="max-w-6xl mx-auto px-8 pb-20">
        <h2 className="text-4xl font-bold mb-12">My Works</h2>
        <div className="grid grid-cols-3 gap-8">

          <div className="bg-gray-800 p-6 rounded-lg hover:border border-orange-500 transition">
            <h3 className="font-bold text-lg mb-2">Boba Branding Design</h3>
            <p className="text-sm text-gray-400">Creative design concepts for "Lovesick Boba" using K-pop inspired themes.</p>
          </div>
          
           <div className="bg-gray-800 p-6 rounded-lg hover:border border-orange-500 transition">
            <h3 className="font-bold text-lg mb-2">Salon Management System</h3>
            <p className="text-sm text-gray-400">Capstone project with AI Computer Vision visualizer for hairstyle recommendations.</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg hover:border border-orange-500 transition">
            <h3 className="font-bold text-lg mb-2">Guessing Game App</h3>
            <p className="text-sm text-gray-400">Mobile application logic built with Android Studio and Java/XML.</p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;