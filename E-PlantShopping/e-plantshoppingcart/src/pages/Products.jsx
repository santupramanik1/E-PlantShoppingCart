import Layout from "../components/Layout";
import {useAppContext} from "../context/AppContext";

const plants = [
    {
        name: "Snake Plant",
        price: "$15",
        description: "Produces oxygen at night, improving air quality.",
        image: "https://images.pexels.com/photos/5831012/pexels-photo-5831012.jpeg",
    },
    {
        name: "Spider Plant",
        price: "$12",
        description: "Filters formaldehyde and xylene from the air.",
        image: "https://images.pexels.com/photos/6508563/pexels-photo-6508563.jpeg",
    },
    {
        name: "Peace Lily",
        price: "$18",
        description: "Removes mold spores and purifies the air.",
        image: "https://images.pexels.com/photos/4750333/pexels-photo-4750333.jpeg",
    },
    {
        name: "Boston Fern",
        price: "$14",
        description: "Adds humidity and freshness to your room.",
        image: "https://images.pexels.com/photos/1684004/pexels-photo-1684004.jpeg",
    },
    {
        name: "Rubber Plant",
        price: "$16",
        description: "Improves air quality and adds elegance to your home.",
        image: "https://images.pexels.com/photos/6216246/pexels-photo-6216246.jpeg",
    },
    {
        name: "Aloe Vera",
        price: "$10",
        description: "Known for its healing and air-purifying qualities.",
        image: "https://images.pexels.com/photos/6508827/pexels-photo-6508827.jpeg",
    },
];

export const Products = () => {
    const {addToCart} = useAppContext();
    return (
        <Layout>
            <div className="min-h-screen p-8">
                <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Air Purifying Plants</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plants.map((plant, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300"
                        >
                            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                SALE
                            </div>
                            <h2 className="text-lg font-semibold text-center mb-2">{plant.name}</h2>
                            <img
                                src={plant.image}
                                alt={plant.name}
                                className="w-full h-48 object-cover rounded-md mb-3"
                            />
                            <p className="text-red-600 font-bold text-center mb-1">{plant.price}</p>
                            <p className="text-center text-gray-600 text-sm mb-4">{plant.description}</p>
                            <div className="flex justify-center">
                                <button
                                    onClick={() => addToCart(plant)}
                                    className="bg-green-600 cursor-pointer hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};
