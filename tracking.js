document.addEventListener('DOMContentLoaded', () => {
    const trackOrderBtn = document.getElementById('track-order-btn');
    const orderStatusContainer = document.querySelector('.order-status');

    trackOrderBtn.addEventListener('click', () => {
        const orderId = document.getElementById('order-id').value;
        if (orderId) {
            // Simulate API call and display tracking info
            orderStatusContainer.innerHTML = `
                <div class="status-animation">
                    <div class="status-point placed"><span>Order Placed</span></div>
                    <div class="status-line"></div>
                    <div class="status-point shipped"><span>Shipped</span></div>
                    <div class="status-line"></div>
                    <div class="status-point out-for-delivery"><span>Out for Delivery</span></div>
                    <div class="status-line"></div>
                    <div class="status-point delivered"><span>Delivered</span></div>
                </div>
            `;
            // Animate the status
            setTimeout(() => document.querySelector('.placed').classList.add('active'), 500);
            setTimeout(() => document.querySelector('.shipped').classList.add('active'), 1500);
            setTimeout(() => document.querySelector('.out-for-delivery').classList.add('active'), 2500);
            setTimeout(() => document.querySelector('.delivered').classList.add('active'), 3500);
        } else {
            orderStatusContainer.innerHTML = '<p>Please enter a valid Order ID.</p>';
        }
    });
});
