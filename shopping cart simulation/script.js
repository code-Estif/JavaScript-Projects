// Initial price. This will be updated based on the user's choice.
        let pricePerItem = 12.99;
        
        document.addEventListener('DOMContentLoaded', () => {
            const quantityInput = document.getElementById('quantity');
            const flavorSelector = document.getElementById('flavorSelector');
            const productPriceDisplay = document.getElementById('productPrice');
            const addToCartBtn = document.getElementById('addToCartBtn');
            const buyNowBtn = document.getElementById('buyNowBtn');
            const modal = document.getElementById('messageModal');
            const modalMessage = document.getElementById('modalMessage');

            // Function to update quantity
            window.updateQuantity = function(delta) {
                let currentQuantity = parseInt(quantityInput.value);
                let newQuantity = currentQuantity + delta;
                if (newQuantity < 1) {
                    newQuantity = 1;
                }
                quantityInput.value = newQuantity;
            }

            // Function to update price when flavor changes
            flavorSelector.addEventListener('change', () => {
                const selectedOption = flavorSelector.options[flavorSelector.selectedIndex];
                const newPrice = parseFloat(selectedOption.getAttribute('data-price'));
                pricePerItem = newPrice;
                productPriceDisplay.textContent = `$${newPrice.toFixed(2)}`;
            });

            // Function to show the modal
            window.showModal = function(message) {
                modalMessage.textContent = message;
                modal.style.display = 'flex';
            }

            // Function to close the modal
            window.closeModal = function() {
                modal.style.display = 'none';
            }

            // Event listener for Add to Cart button
            addToCartBtn.addEventListener('click', () => {
                const quantity = quantityInput.value;
                const flavor = flavorSelector.value;
                showModal(`${quantity} ${flavor} pizza(s) added to cart!`);
            });

            // Event listener for Buy Now button
            buyNowBtn.addEventListener('click', () => {
                const quantity = quantityInput.value;
                const total = (quantity * pricePerItem).toFixed(2);
                const flavor = flavorSelector.value;
                showModal(`Buying ${quantity} ${flavor} pizza(s) for a total of $${total}.`);
            });
        });