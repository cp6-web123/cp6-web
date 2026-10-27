import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-amber-400">
                Import Rent
            </Link>
            <div className="flex gap-6">
                <Link to="/" className="hover:text-amber-400">Home</Link>
                <Link to="/carros" className="hover:text-amber-400">Carros</Link>
            </div>
        </nav>
    )
}





//2//