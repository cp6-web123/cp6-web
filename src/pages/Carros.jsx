import Card from '../components/Card'

const carros = [
    { id: 1, nome: '911 Carrera', marca: 'Porsche', preco: 2500, imagem: 'https://placehold.co/600x400?text=Porsche+911' },
    { id: 2, nome: 'Huracán', marca: 'Lamborghini', preco: 4500, imagem: 'https://placehold.co/600x400?text=Lamborghini' },
    { id: 3, nome: 'M4 Competition', marca: 'BMW', preco: 1800, imagem: 'https://placehold.co/600x400?text=BMW+M4' },
    { id: 4, nome: 'C63 AMG', marca: 'Mercedes-Benz', preco: 2000, imagem: 'https://placehold.co/600x400?text=Mercedes+C63' },
    { id: 5, nome: 'R8 V10', marca: 'Audi', preco: 3000, imagem: 'https://placehold.co/600x400?text=Audi+R8' },
    { id: 6, nome: 'F8 Tributo', marca: 'Ferrari', preco: 5500, imagem: 'https://placehold.co/600x400?text=Ferrari+F8' },
]

export default function Carros() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-10">
            <h2 className="text-3xl font-bold mb-8">Nossos Carros</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {carros.map((carro) => (
                    <Card key={carro.id} {...carro} />
                ))}
            </div>
        </section>
    )
}