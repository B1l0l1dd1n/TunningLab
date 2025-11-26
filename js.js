// Данные товаров для тюнинга двигателя
        const products = [
            {
                id: 1,
                name: "Турбокомпрессор Garrett G25-660",
                category: "Турбины и компрессоры",
                brand: "Garrett",
                price: 125000,
                originalPrice: 140000,
                image: "https://straightboostperformance.com/wp-content/uploads/2025/10/bee7bb3ad8c84314f44329db77e6dbbcL-4.jpg",
                description: "Высокопроизводительный турбокомпрессор для увеличения мощности двигателя. Обеспечивает быстрый отклик и стабильное давление наддува.",
                inStock: true,
                rating: 4.9,
                features: [
                    "Быстрый отклик с низких оборотов",
                    "Высокая надежность и долговечность",
                    "Подходит для двигателей 1.8-3.0 л",
                    "Максимальная мощность: до 500 л.с."
                ],
                improvements: [
                    "Прирост мощности: +40%",
                    "Увеличение крутящего момента: +35%",
                    "Улучшение отзывчивости педали газа",
                    "Более эффективное сгорание топлива"
                ],
                performance: {
                    power: "+40%",
                    torque: "+35%",
                    response: "Улучшен",
                    fuel: "+5%"
                }
            },
            {
                id: 2,
                name: "ЭБУ Standalone Haltech Elite 2500",
                category: "ЭБУ и чип-тюнинг",
                brand: "Haltech",
                price: 89000,
                image: "https://www.cimotorsports.com/cdn/shop/files/Haltech-Elite-2500-Adaptor-Harness-ECU-Kit-1757316036_600x.webp?v=1757316037",
                description: "Профессиональный standalone блок управления двигателем с широкими настройками для тюнинга.",
                inStock: true,
                rating: 4.8,
                features: [
                    "Полный контроль над всеми параметрами",
                    "Поддержка различных датчиков",
                    "Встроенная система регистрации данных",
                    "Простота настройки и калибровки"
                ],
                improvements: [
                    "Точная настройка впрыска и зажигания",
                    "Оптимизация работы на всех режимах",
                    "Улучшение экономичности",
                    "Поддержка дополнительного оборудования"
                ],
                performance: {
                    power: "+25%",
                    torque: "+20%",
                    response: "Значительно улучшен",
                    fuel: "-8%"
                }
            },
            {
                id: 3,
                name: "Комплект интеркулера Wagner Tuning",
                category: "Охлаждение",
                brand: "Wagner Tuning",
                price: 45000,
                originalPrice: 52000,
                image: "https://image.nengun.com/catalogue/1024x768/nengun-4951-108085-10-greddy-intercooler_kit-9caee9ff.jpg",
                description: "Высокопроизводительный интеркулер для эффективного охлаждения наддувочного воздуха.",
                inStock: true,
                rating: 4.7,
                features: [
                    "Увеличенная площадь охлаждения",
                    "Алюминиевые трубки повышенной прочности",
                    "Оптимальное распределение воздушного потока",
                    "Простая установка"
                ],
                improvements: [
                    "Снижение температуры наддувочного воздуха на 40°C",
                    "Увеличение плотности воздуха",
                    "Стабильная мощность на повторных разгонах",
                    "Защита от детонации"
                ],
                performance: {
                    power: "+8%",
                    torque: "+6%",
                    response: "Стабильный",
                    fuel: "Без изменений"
                }
            },
            {
                id: 4,
                name: "Топливные инжекторы Bosch 1000cc",
                category: "Топливные системы",
                brand: "Bosch",
                price: 32000,
                image: "https://straightboostperformance.com/wp-content/uploads/2025/10/1b24b7dbf837e2383a4f6be4b14c2cce-1.jpg",
                description: "Высокопроизводительные топливные инжекторы для мощных тюнинговых проектов.",
                inStock: true,
                rating: 4.6,
                features: [
                    "Производительность 1000 cc/min",
                    "Точное распыление топлива",
                    "Быстрый отклик",
                    "Совместимость с различными видами топлива"
                ],
                improvements: [
                    "Обеспечение топливом до 500 л.с.",
                    "Равномерное распределение топлива по цилиндрам",
                    "Улучшенное образование топливовоздушной смеси",
                    "Стабильная работа на высоких оборотах"
                ],
                performance: {
                    power: "+15%",
                    torque: "+12%",
                    response: "Улучшен",
                    fuel: "+3%"
                }
            },
            {
                id: 5,
                name: "Спортивный выпуск Akrapovic Slip-On",
                category: "Впуск и выпуск",
                brand: "Akrapovic",
                price: 78000,
                originalPrice: 85000,
                image: "https://autotuning-bmw.ru/static/1/vyihlopnaya-sistema-akrapovic-bmw-m4-f82-me-bmt7h-c-63fa2b1fe7be1010f157b03c1b0a42cb.jpg",
                description: "Качественная спортивная выпускная система с улучшенными характеристиками.",
                inStock: true,
                rating: 4.9,
                features: [
                    "Титановые компоненты",
                    "Уменьшенное противодавление",
                    "Агрессивный звук",
                    "Облегченная конструкция"
                ],
                improvements: [
                    "Улучшенное удаление выхлопных газов",
                    "Прирост мощности на высоких оборотах",
                    "Снижение массы выхлопной системы",
                    "Спортивный звук без потери комфорта"
                ],
                performance: {
                    power: "+5%",
                    torque: "+4%",
                    response: "Незначительно улучшен",
                    fuel: "Без изменений"
                }
            },
            {
                id: 6,
                name: "Компрессор Rotrex C38-91",
                category: "Турбины и компрессоры",
                brand: "Rotrex",
                price: 95000,
                image: "https://www.cimotorsports.com/cdn/shop/files/VMP-Performance-2024-Ford-Mustang-50L-Gen6-30L-Sup-1760141366_1024x1024@2x.webp?v=1760141367",
                description: "Нагнетатель центробежного типа с плавной характеристикой наддува.",
                inStock: false,
                rating: 4.7,
                features: [
                    "Плавная характеристика наддува",
                    "Высокий КПД",
                    "Надежная конструкция",
                    "Минимальная задержка отклика"
                ],
                improvements: [
                    "Линейное увеличение мощности",
                    "Мгновенный отклик на педаль газа",
                    "Работа без турбоямы",
                    "Стабильное давление наддува"
                ],
                performance: {
                    power: "+45%",
                    torque: "+38%",
                    response: "Мгновенный",
                    fuel: "+8%"
                }
            },
            {
                id: 7,
                name: "Комплект холодного впуска K&N",
                category: "Впуск и выпуск",
                brand: "K&N",
                price: 15000,
                originalPrice: 18000,
                image: "https://straightboostperformance.com/wp-content/uploads/2025/11/8686abe79399092f2e6dd1b4e36c6b5f.jpg",
                description: "Система холодного впуска для улучшения подачи воздуха в двигатель.",
                inStock: true,
                rating: 4.5,
                features: [
                    "Фильтр нулевого сопротивления",
                    "Термоизолированный корпус",
                    "Увеличенный диаметр патрубков",
                    "Прямой поток воздуха"
                ],
                improvements: [
                    "Улучшенное наполнение цилиндров",
                    "Снижение температуры впускного воздуха",
                    "Увеличение расхода воздуха",
                    "Спортивный звук впуска"
                ],
                performance: {
                    power: "+3%",
                    torque: "+2%",
                    response: "Незначительно улучшен",
                    fuel: "Без изменений"
                }
            },
            {
                id: 8,
                name: "Топливный насос Walbro 450",
                category: "Топливные системы",
                brand: "Walbro",
                price: 12000,
                image: "https://www.cimotorsports.com/cdn/shop/files/Walbro-450lph-E85-Compatible-Universal-Fuel-Pump-I-1763433574_1024x1024@2x.webp?v=1763433575",
                description: "Высокопроизводительный топливный насос для обеспечения стабильной подачи топлива.",
                inStock: true,
                rating: 4.6,
                features: [
                    "Производительность 450 л/ч",
                    "Стабильное давление",
                    "Тихая работа",
                    "Долгий срок службы"
                ],
                improvements: [
                    "Обеспечение топливом высокомощных систем",
                    "Стабильное давление в топливной рампе",
                    "Защита от обеднения смеси",
                    "Надежная работа при высоких нагрузках"
                ],
                performance: {
                    power: "+8%",
                    torque: "+6%",
                    response: "Стабильный",
                    fuel: "Без изменений"
                }
            }
        ];

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let filteredProducts = [...products];

        // Инициализация
        function init() {
            renderFilters();
            renderProducts();
            updateCartCount();
            
            // Добавляем анимации при скролле
            initScrollAnimations();
        }

        // Анимации при скролле
        function initScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Наблюдаем за карточками товаров
            document.querySelectorAll('.product-card').forEach(card => {
                observer.observe(card);
            });
        }

        // Рендер фильтров
        function renderFilters() {
            const categories = [...new Set(products.map(p => p.category))];
            const brands = [...new Set(products.map(p => p.brand))];

            const categoryFilters = document.getElementById('categoryFilters');
            categoryFilters.innerHTML = categories.map(cat => `
                <div class="filter-option">
                    <input type="checkbox" id="cat-${cat}" value="${cat}" class="category-filter">
                    <label for="cat-${cat}">${cat}</label>
                </div>
            `).join('');

            const brandFilters = document.getElementById('brandFilters');
            brandFilters.innerHTML = brands.map(brand => `
                <div class="filter-option">
                    <input type="checkbox" id="brand-${brand}" value="${brand}" class="brand-filter">
                    <label for="brand-${brand}">${brand}</label>
                </div>
            `).join('');
        }

        // Рендер товаров
        function renderProducts() {
            const grid = document.getElementById('productsGrid');
            
            if (filteredProducts.length === 0) {
                grid.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search"></i>
                        <h3>Товары не найдены</h3>
                        <p>Попробуйте изменить параметры фильтрации</p>
                    </div>
                `;
                return;
            }

            grid.innerHTML = filteredProducts.map(product => `
                <div class="product-card animate-fadeIn">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-category">${product.category}</div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-rating">
                        <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</span>
                        <span>${product.rating}</span>
                    </div>
                    <div class="product-price">
                        ${product.price.toLocaleString('ru-RU')} ₽
                        ${product.originalPrice ? `<span class="original-price">${product.originalPrice.toLocaleString('ru-RU')} ₽</span>` : ''}
                    </div>
                    <div class="stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                        <i class="fas ${product.inStock ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                        ${product.inStock ? 'В наличии' : 'Нет в наличии'}
                    </div>
                    
                    <div class="performance-info">
                        <h4><i class="fas fa-tachometer-alt"></i> Улучшение характеристик:</h4>
                        <ul class="performance-list">
                            <li>Мощность: ${product.performance.power}</li>
                            <li>Крутящий момент: ${product.performance.torque}</li>
                            <li>Отклик: ${product.performance.response}</li>
                        </ul>
                    </div>
                    
                    <button class="add-to-cart-btn" 
                            onclick="addToCart(${product.id})"
                            ${!product.inStock ? 'disabled' : ''}>
                        <i class="fas ${product.inStock ? 'fa-cart-plus' : 'fa-ban'}"></i>
                        ${product.inStock ? 'Добавить в корзину' : 'Недоступно'}
                    </button>
                </div>
            `).join('');
            
            // Инициализируем анимации для новых карточек
            initScrollAnimations();
        }

        // Применить фильтры
        function applyFilters() {
            const selectedCategories = Array.from(document.querySelectorAll('.category-filter:checked')).map(el => el.value);
            const selectedBrands = Array.from(document.querySelectorAll('.brand-filter:checked')).map(el => el.value);
            const priceMin = parseFloat(document.getElementById('priceMin').value) || 0;
            const priceMax = parseFloat(document.getElementById('priceMax').value) || Infinity;
            const inStockOnly = document.getElementById('inStockOnly').checked;

            filteredProducts = products.filter(product => {
                const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
                const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
                const priceMatch = product.price >= priceMin && product.price <= priceMax;
                const stockMatch = !inStockOnly || product.inStock;
                
                return categoryMatch && brandMatch && priceMatch && stockMatch;
            });

            renderProducts();
        }

        // Сортировка товаров
        function sortProducts() {
            const sortValue = document.getElementById('sortSelect').value;
            
            switch(sortValue) {
                case 'price-asc':
                    filteredProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price-desc':
                    filteredProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'rating':
                    filteredProducts.sort((a, b) => b.rating - a.rating);
                    break;
                case 'name':
                    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                default:
                    filteredProducts.sort((a, b) => a.id - b.id);
            }
            
            renderProducts();
        }

        // Открыть детали товара
        function openProductDetails(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            const detailsContainer = document.getElementById('productDetails');
            detailsContainer.innerHTML = `
                <div>
                    <img src="${product.image}" alt="${product.name}" class="product-details-image">
                </div>
                <div>
                    <h2>${product.name}</h2>
                    <div class="product-details-price">${product.price.toLocaleString('ru-RU')} ₽</div>
                    <p>${product.description}</p>
                    
                    <div class="performance-details">
                        <h3><i class="fas fa-chart-line"></i> Результаты установки</h3>
                        <div class="performance-grid">
                            <div class="performance-item">
                                <div class="performance-value">${product.performance.power}</div>
                                <div class="performance-label">Мощность</div>
                            </div>
                            <div class="performance-item">
                                <div class="performance-value">${product.performance.torque}</div>
                                <div class="performance-label">Крутящий момент</div>
                            </div>
                            <div class="performance-item">
                                <div class="performance-value">${product.performance.response}</div>
                                <div class="performance-label">Отклик</div>
                            </div>
                            <div class="performance-item">
                                <div class="performance-value">${product.performance.fuel}</div>
                                <div class="performance-label">Расход топлива</div>
                            </div>
                        </div>
                    </div>
                    
                    <h3>Особенности</h3>
                    <ul class="product-features">
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    
                    <h3>Что изменится после установки?</h3>
                    <ul class="product-features">
                        ${product.improvements.map(improvement => `<li>${improvement}</li>`).join('')}
                    </ul>
                    
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id}); closeModal('productModal')" ${!product.inStock ? 'disabled' : ''} style="margin-top: 2rem;">
                        <i class="fas ${product.inStock ? 'fa-cart-plus' : 'fa-ban'}"></i>
                        ${product.inStock ? 'Добавить в корзину' : 'Недоступно'}
                    </button>
                </div>
            `;
            
            document.getElementById('productModal').classList.add('active');
        }

        // Добавить в корзину
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (!product || !product.inStock) return;
            
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...product,
                    quantity: 1
                });
            }
            
            updateCart();
            showNotification(`"${product.name}" добавлен в корзину`);
        }

        // Обновить корзину
        function updateCart() {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            
            if (document.getElementById('cartModal').classList.contains('active')) {
                renderCart();
            }
        }

        // Обновить счетчик корзины
        function updateCartCount() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            document.getElementById('cartCount').textContent = totalItems;
        }

        // Открыть корзину
        function openCart() {
            renderCart();
            document.getElementById('cartModal').classList.add('active');
        }

        // Рендер корзины
        function renderCart() {
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');
            
            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="empty-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <h3>Корзина пуста</h3>
                        <p>Добавьте товары из каталога</p>
                    </div>
                `;
                cartTotal.textContent = '0 ₽';
                return;
            }
            
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${item.price.toLocaleString('ru-RU')} ₽</div>
                    </div>
                    <div class="quantity-control">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = `${total.toLocaleString('ru-RU')} ₽`;
        }

        // Обновить количество товара
        function updateQuantity(productId, newQuantity) {
            if (newQuantity < 1) {
                removeFromCart(productId);
                return;
            }
            
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity = newQuantity;
                updateCart();
            }
        }

        // Удалить из корзины
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCart();
            showNotification('Товар удален из корзины');
        }

        // Оформить заказ
        function checkout() {
            if (cart.length === 0) return;
            
            showNotification('Заказ оформлен! С вами свяжется менеджер.', 'success');
            cart = [];
            updateCart();
            closeModal('cartModal');
        }

        // Показать уведомление
        function showNotification(message, type = 'info') {
            const notification = document.getElementById('notification');
            notification.innerHTML = `
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
                ${message}
            `;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Закрыть модальное окно
        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
        }

        // Закрытие модальных окон по клику вне области
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.classList.remove('active');
            }
        }

        // Поиск товаров
        document.getElementById('searchInput').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            
            if (searchTerm.length < 2) {
                filteredProducts = [...products];
            } else {
                filteredProducts = products.filter(product => 
                    product.name.toLowerCase().includes(searchTerm) ||
                    product.description.toLowerCase().includes(searchTerm) ||
                    product.category.toLowerCase().includes(searchTerm) ||
                    product.brand.toLowerCase().includes(searchTerm)
                );
            }
            
            renderProducts();
        });

        // Инициализация при загрузке страницы
        document.addEventListener('DOMContentLoaded', init);