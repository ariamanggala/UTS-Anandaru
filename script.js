$(window).on('load', function () {
    /--------- Page Loader ---------/
    setTimeout(function () {
        $("#loading").fadeOut(300);
    }, 3100);
});
      const product = [
            { id: 7, name: "mushroom", price: 50.00, image: "7.jpg" },
            { id: 6, name: "onion", price: 50.00, image: "6.jpg" },
            { id: 3, name: "cherry", price: 50.00, image: "3.jpg" },
            { id: 5, name: "pineapple", price: 50.00, image: "5.jpg" },
            { id: 2, name: "cabbage", price: 50.00, image: "2.jpg" },
            { id: 4, name: "salad", price: 50.00, image: "4.jpg" },
            { id: 8, name: "pepper", price: 50.00, image: "8.jpg" },
            { id: 1, name: "tomato", price: 50.00, image: "9.jpeg" },
        ];

        function redirectToCheckout(product) {
            const queryString = `?name_product=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}`;
            const checkoutURL = `checkout.html${queryString}`;
            window.location.href = checkoutURL;
        }

        function createProductCard(product) {
            const card = document.createElement('div');
            card.className = 'product-box';
            const productMedia = `
                <div class="product-media">
                    <a href="#" id="productLink${product.id}">
                        <img class="prod-img" alt="" src="./assets/img/${product.image}" />
                        <img class="shape" alt="" src="assets/img/icons/shap-small.png" />
                        <div class="prod-icons"></div>
                    </a>
                </div>`;
            const productCaption = `
                <div class="product-caption">
                    <h3 class="product-title">
                        <a href="#" id="productNameLink${product.id}">
                            <span class="light-font">${product.name}</span>
                            <strong>${product.name}</strong>
                        </a>
                    </h3>
                    <div class="price">
                        <strong class="clr-txt">$${product.price.toFixed(2)}</strong>
                        <del class="light-font">$65.00</del>
                    </div>
                </div>`;
            card.innerHTML = productMedia + productCaption;

            // Tambahkan event listener untuk setiap link produk
            const productLink = document.getElementById(`productLink${product.id}`);
            const productNameLink = document.getElementById(`productNameLink${product.id}`);

            productLink.addEventListener('click', (event) => {
                event.preventDefault();
                redirectToCheckout(product);
            });

            productNameLink.addEventListener('click', (event) => {
                event.preventDefault();
                redirectToCheckout(product);
            });

            return card;
        }

        function renderProducts() {
            const productList = document.getElementById('item');
            
            // Pastikan elemen dengan ID 'item' sudah ada di halaman HTML
            if (!productList) {
                console.error("Element with ID 'item' not found.");
                return;
            }

            productList.innerHTML = '';

            let itemDiv = document.createElement('div');
            itemDiv.className = 'product-list';
            product.forEach((product, index) => {
                const card = createProductCard(product);
                itemDiv.appendChild(card);

                if ((index + 1) % 2 === 0) {
                    productList.appendChild(itemDiv);
                    itemDiv = document.createElement('div');
                    itemDiv.className = 'product-list';
                }
            });
        }

        renderProducts();
    