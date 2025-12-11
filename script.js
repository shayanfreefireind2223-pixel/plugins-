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

    function renderProducts(productsToRender, container) {
        container.innerHTML = '';
        productsToRender.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <a href="product.html?id=${product.id}" class="product-link">
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-card-content">
                    <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
                    <p>${product.description}</p>
                    <p class="product-price">${product.price}</p>
                    <div class="product-card-buttons">
                        <button class="cta-button add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                        <button class="cta-button buy-now-btn">Buy Now</button>
                    </div>
                </div>
            `;
            container.appendChild(productCard);
        });
    }
    
    const productGrid = document.querySelector('.product-grid:not(.recommended-grid)');
    if (productGrid) {
        renderProducts(products, productGrid);
    }

    const recommendedGrid = document.querySelector('.recommended-grid');
    if (recommendedGrid) {
        // Simple recommendation logic: shuffle and take a few
        const recommendedProducts = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);
        renderProducts(recommendedProducts, recommendedGrid);
    }
    
    // Cart functionality
    document.body.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(event.target.dataset.id);
            const productToAdd = products.find(p => p.id === productId);
            
            if (productToAdd) {
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                cart.push(productToAdd);
                localStorage.setItem('cart', JSON.stringify(cart));
                alert(`${productToAdd.name} has been added to your cart.`);
            }
        }
    });

    // Login status and header update
    function updateHeader() {
        const loggedIn = localStorage.getItem('loggedIn') === 'true';
        const navUl = document.querySelector('nav ul');
        const loginLink = navUl.querySelector('a[href="login.html"]');
        
        if (loggedIn) {
            if (loginLink) {
                loginLink.parentElement.remove();
            }

            if (!navUl.querySelector('.profile-icon')) {
                const profileLi = document.createElement('li');
                profileLi.innerHTML = `<a href="#" class="profile-icon">👤</a>`;
                navUl.appendChild(profileLi);

                const logoutLi = document.createElement('li');
                logoutLi.innerHTML = `<a href="#" id="logout-btn">Logout</a>`;
                navUl.appendChild(logoutLi);

                document.getElementById('logout-btn').addEventListener('click', (e) => {
                    e.preventDefault();
                    localStorage.removeItem('loggedIn');
                    window.location.reload();
                });
            }
        }
    }

    updateHeader();
});
