import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-600">Syeda Shakeela</h1>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/skills" className="hover:text-blue-500">Skills</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
