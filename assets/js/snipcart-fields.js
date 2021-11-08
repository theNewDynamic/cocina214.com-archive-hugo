Snipcart.execute('bind', 'app.ready', function() {
    Snipcart.execute('registerLocale', 'en', {
        my_cart_content:
        "Cart",
        billing_address:
        "Billing",
        shipping_method:
        "Shipping",
        payment_method:
        "Payment",
        confirm_order:
        "Confirm"
    });
});
