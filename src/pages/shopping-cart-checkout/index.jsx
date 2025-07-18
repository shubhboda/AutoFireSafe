import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import BreadcrumbNavigation from '../../components/ui/BreadcrumbNavigation';
import CartItem from './components/CartItem';
import OrderSummary from './components/OrderSummary';
import CheckoutForm from './components/CheckoutForm';
import EmptyCart from './components/EmptyCart';
import CheckoutProgress from './components/CheckoutProgress';
import SecurityBadges from './components/SecurityBadges';

const ShoppingCartCheckout = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);

  // Mock cart data
  useEffect(() => {
    const mockCartItems = [
      {
        id: 1,
        name: 'Fire Extinguisher - ABC Type 5lb',
        description: 'Multi-purpose dry chemical fire extinguisher suitable for Class A, B, and C fires',
        price: 89.99,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        specifications: ['5 lb capacity', 'UL Listed', '6-year warranty'],
        inStock: true
      },
      {
        id: 2,
        name: 'Photoelectric Smoke Detector',
        description: 'Advanced photoelectric smoke detection with 10-year sealed battery',
        price: 24.99,
        quantity: 4,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        specifications: ['10-year battery', 'Photoelectric sensor', 'Test button'],
        inStock: true
      },
      {
        id: 3,
        name: 'Emergency Exit Sign - LED',
        description: 'Energy-efficient LED emergency exit sign with battery backup',
        price: 34.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
        specifications: ['LED technology', '90-minute backup', 'Wall/ceiling mount'],
        inStock: false
      },
      {
        id: 4,
        name: 'Fire Blanket - Emergency Response',
        description: 'High-quality fire blanket for kitchen and workshop emergency use',
        price: 19.99,
        quantity: 1,
        image: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?w=400&h=300&fit=crop',
        specifications: ['40" x 40" size', 'Fiberglass material', 'Easy-pull tabs'],
        inStock: true
      }
    ];
    setCartItems(mockCartItems);
  }, []);

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const handleContinueShopping = () => {
    navigate('/product-detail');
  };

  const handleProceedToCheckout = () => {
    setShowCheckout(true);
    setCheckoutStep(2);
  };

  const handleCheckoutSubmit = async (formData) => {
    setIsProcessing(true);
    
    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock successful order
      const orderNumber = `FS-${Date.now()}`;
      
      // Clear cart
      setCartItems([]);
      
      // Navigate to success page (or show success message)
      alert(`Order ${orderNumber} placed successfully! You will receive a confirmation email shortly.`);
      navigate('/user-account-dashboard');
      
    } catch (error) {
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const customBreadcrumbs = [
    { label: 'Home', path: '/homepage' },
    { label: 'Products', path: '/product-detail' },
    { label: 'Shopping Cart', path: '/shopping-cart-checkout' }
  ];

  // Show empty cart if no items
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-6">
          <BreadcrumbNavigation customBreadcrumbs={customBreadcrumbs} />
          <EmptyCart />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <BreadcrumbNavigation customBreadcrumbs={customBreadcrumbs} />
        
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {showCheckout ? 'Checkout' : 'Shopping Cart'}
          </h1>
          <p className="text-muted-foreground">
            {showCheckout 
              ? 'Complete your order with secure payment processing'
              : `${cartItems.length} item${cartItems.length !== 1 ? 's' : ''} in your cart`
            }
          </p>
        </div>

        {/* Checkout Progress */}
        <CheckoutProgress currentStep={checkoutStep} />

        {!showCheckout ? (
          /* Cart View */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-foreground">
                  Cart Items
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleContinueShopping}
                  iconName="ArrowLeft"
                  iconPosition="left"
                >
                  Continue Shopping
                </Button>
              </div>

              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemoveItem}
                />
              ))}

              {/* Cart Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="outline"
                  onClick={handleContinueShopping}
                  iconName="ArrowLeft"
                  iconPosition="left"
                  className="flex-1"
                >
                  Continue Shopping
                </Button>
                <Button
                  variant="default"
                  onClick={handleProceedToCheckout}
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="flex-1"
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="space-y-6">
              <OrderSummary cartItems={cartItems} />
              <SecurityBadges />
            </div>
          </div>
        ) : (
          /* Checkout View */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setShowCheckout(false);
                    setCheckoutStep(1);
                  }}
                  iconName="ArrowLeft"
                  iconPosition="left"
                >
                  Back to Cart
                </Button>
                <h2 className="text-xl font-semibold text-foreground">
                  Checkout Information
                </h2>
              </div>

              <CheckoutForm
                onSubmit={handleCheckoutSubmit}
                isProcessing={isProcessing}
              />
            </div>

            {/* Order Summary & Security */}
            <div className="space-y-6">
              <OrderSummary cartItems={cartItems} />
              <SecurityBadges />
              
              {/* Order Items Summary */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Icon name="Package" size={16} />
                  Order Items ({cartItems.length})
                </h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-sm">
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-foreground truncate">
                          {item.name}
                        </div>
                        <div className="text-muted-foreground">
                          Qty: {item.quantity}
                        </div>
                      </div>
                      <div className="font-mono text-foreground">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-12 bg-muted rounded-lg p-6">
          <div className="text-center">
            <Icon name="HelpCircle" size={24} className="text-primary mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Need Help with Your Order?
            </h3>
            <p className="text-muted-foreground mb-4">
              Our fire safety experts are available to assist you with product selection and ordering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" iconName="Phone" iconPosition="left">
                Call (555) 123-4567
              </Button>
              <Button variant="outline" iconName="MessageCircle" iconPosition="left">
                Live Chat Support
              </Button>
              <Button variant="outline" iconName="Mail" iconPosition="left">
                Email Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartCheckout;