import { useSearchParams, Link } from "react-router";
import { products } from "../data/products";


function ProductsPage() {

    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search") ?? "";
    const category = searchParams.get("category") ?? "all";

    const filteredProducts = products.filter((product) => {

        const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "all" || product.category === category;
    
        return matchesSearch && matchesCategory;
    })
    
    function updateSearch(value: string) {

        setSearchParams((previous) => {

            if (value) {

                previous.set("search", value)

            } else {

                previous.delete("search")
            }
        
            return previous
        })
    }

    function updateCategory(value: string) {

        setSearchParams((previous) => {

            if (value === "all") {

                previous.delete("category");

            } else {

                previous.set("category", value);
            }
        
            return previous;
        })
    }


    return (

        <section className="page">
            
            <h1>Our Products</h1>
    
            <div className="filters">

                <input
                    type="search"
                    placeholder="Search products..."
                    value={search}
                    onChange={(event) => updateSearch(event.target.value)}
                />
        
                <select value={category} onChange={(event) => updateCategory(event.target.value)}>
                    <option value="all">All Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="books">Books</option>
                </select>
            </div>
    
            <p>Showing {filteredProducts.length} products</p>
    
            <div className="product-list">

                {filteredProducts.map((product) => (

                    <article className="product" key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Category: {product.category}</p>
                        <p>Price: ${product.price}</p>
            
                        <Link to={`/products/${product.id}`}>View Details</Link>
                    </article>
                ))}
        
                {filteredProducts.length === 0 && (

                    <p>No products found.</p>
                )}
            </div>
        </section>
    )
}

export default ProductsPage;