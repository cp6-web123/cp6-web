export default function Card({ nome, marca, preco, imagem }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img src={imagem} alt={nome} className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-gray-500">{marca}</p>
                <h3 className="text-lg font-bold">{nome}</h3>
                <p className="text-amber-600 font-semibold mt-2">R$ {preco} / dia</p>
                <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-amber-500 hover:text-black transition">
                    Alugar
                </button>
            </div>
        </div>
    )
}