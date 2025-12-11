document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            name: 'FireX Gaming Headphones Pro',
            price: '₹1,499',
            description: 'RGB lighting, deep bass, comfortable cushions, premium build.',
            image: 'images/headphones.jpg',
            images: [
                'images/headphones.jpg',
                'images/headphones-2.jpg',
                'images/headphones-3.jpg',
                'images/headphones-4.jpg'
            ],
            category: 'electronics'
        },
        {
            id: 2,
            name: 'RedVolt 20000mAh Max Powerbank',
            price: '₹999',
            description: 'Fast charging, dual USB + Type-C, Matte red-black finish.',
            image: 'images/powerbank.jpg',
            category: 'accessories'
        },
        {
            id: 3,
            name: 'BlackShadow Premium Hoodie',
            price: '₹799',
            description: 'Cotton blend, winter-friendly, premium fit.',
            image: 'images/hoodie.jpg',
            category: 'apparel'
        },
        {
            id: 4,
            name: 'Sharpy RGB Gaming Mouse',
            price: '₹599',
            description: 'Adjustable DPI, breathing LED effects, ultra-smooth sensor.',
            image: 'images/mouse.jpg',
            category: 'electronics'
        },
        {
            id: 5,
            name: 'ZenX Smart Fitness Band',
            price: '₹1,199',
            description: 'Heart rate monitor, step counter, sleep tracker, red accent UI.',
            image: 'images/fitness-band.jpg',
            category: 'electronics'
        },
        {
            id: 6,
            name: 'Sharpy Flame Bluetooth Earbuds',
            price: '₹899',
            description: 'Deep bass, water-resistant, red-black charging case.',
            image: 'images/earbuds.jpg',
            category: 'electronics'
        }
    ];

    const productDetailsContainer = document.getElementById('product-details-container');
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    const product = products.find(p => p.id === productId);

    if (product) {
        productDetailsContainer.innerHTML = `
            <div class="product-gallery">
                <img src="${product.image}" alt="${product.name}" id="main-product-image">
                <div class="thumbnail-images">
                    ${product.images ? product.images.map(img => `<img src="${img}" alt="thumbnail">`).join('') : ''}
                </div>
            </div>
            <div class="product-info">
                <h1>${product.name}</h1>
                <p>${product.description}</p>
                <p class="product-price">${product.price}</p>
                <div class="product-actions">
                    <button class="cta-button add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                    <button class="cta-button buy-now-btn">Buy Now</button>
                    <button class="wishlist-btn">❤️</button>
                </div>
            </div>
        `;

        const mainImage = document.getElementById('main-product-image');
        const thumbnails = document.querySelectorAll('.thumbnail-images img');
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                mainImage.src = thumb.src;
            });
        });
    } else {
        productDetailsContainer.innerHTML = '<p>Product not found.</p>';
    }
});
