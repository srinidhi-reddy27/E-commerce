// src/pages/CategoryPage.js
import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { getProductsByCategory, getCategories } from '../data/products';
import ProductCard from '../components/ProductCard'; // Assuming ProductCard is already enhanced
import './CategoryPage.css'; // We will update this CSS file

function CategoryPage() {
    // Extract category name from URL params
    let { categoryName } = useParams();
    // Decode if necessary (browser usually handles this, but good practice)
    // categoryName = decodeURIComponent(categoryName);

    // Fetch products and categories
    const products = getProductsByCategory(categoryName);
    const allCategories = getCategories();

    // Format display name (simple capitalization)
    const displayCategoryName = categoryName
        ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
        : "Category"; // Fallback title

    return (
        <div className="category-page-enhanced">
            {/* Sidebar Navigation */}
            <aside className="category-sidebar-enhanced">
                <h3 className="sidebar-title">Categories</h3>
                <nav> {/* Use nav element for semantics */}
                    <ul className="sidebar-list">
                        {allCategories.map(cat => (
                            <li key={cat}>
                                <NavLink
                                    // Use toLocaleLowerCase for better language support if needed
                                    to={`/category/${cat.toLowerCase()}`}
                                    // className expects a function in react-router-dom v6+
                                    className={({ isActive }) =>
                                        `sidebar-link ${isActive ? 'active-category' : ''}`
                                    }
                                >
                                    {cat}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Main Product Grid Content */}
            <main className="product-grid-container-enhanced">
                <h2 className="category-main-title">{displayCategoryName}</h2>
                {products.length > 0 ? (
                    <div className="product-grid-enhanced">
                        {products.map(product => (
                            // Pass product data to the ProductCard component
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    // Enhanced message for no products
                    <div className="category-no-products">
                        <p>😕 Oops!</p>
                        <p>No products found in the "{displayCategoryName}" category.</p>
                        <NavLink to="/" className="button secondary-button">
                            Explore Other Categories
                        </NavLink>
                    </div>
                )}
            </main>
        </div>
    );
}

export default CategoryPage;