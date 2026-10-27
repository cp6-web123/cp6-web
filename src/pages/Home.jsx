import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <section className="bg-gray-900 text-white text-center py-24 px-6">
            <h1 className="text-4xl md:text-6xl font-bold">
                Dirija o carro dos seus <span className="text-amber-400">sonhos</span>
            </h1>
            <p className="mt-4 text-gray-300">
                Locação de carros importados com conforto, luxo e performance.
            </p>
            <Link
                to="/carros"
                className="inline-block mt-8 bg-amber-400 text-black font-bold px-8 py-3 rounded-lg hover:bg-amber-300"
            >
                Ver carros
            </Link>
        </section>
    )
}