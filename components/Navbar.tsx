export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold">Manuel Hinojosa</span>
        <div className="space-x-6">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
