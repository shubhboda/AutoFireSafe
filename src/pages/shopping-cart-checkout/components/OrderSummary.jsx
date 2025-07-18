import React from 'react';
import Icon from '../../../components/AppIcon';

const OrderSummary = ({ cartItems, shippingCost = 0, taxRate = 0.08 }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax + shippingCost;
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const summaryItems = [
    { label: `Subtotal (${totalItems} items)`, value: subtotal, isSubtotal: true },
    { label: 'Shipping', value: shippingCost, isShipping: true },
    { label: 'Tax', value: tax, isTax: true },
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
      <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Icon name="Receipt" size={20} />
        Order Summary
      </h2>

      <div className="space-y-3">
        {summaryItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {item.label}
            </span>
            <span className="text-sm font-medium text-foreground font-mono">
              {item.isShipping && item.value === 0 ? (
                <span className="text-success">FREE</span>
              ) : (
                `$${item.value.toFixed(2)}`
              )}
            </span>
          </div>
        ))}

        <hr className="border-border my-4" />

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-foreground">
            Total
          </span>
          <span className="text-xl font-bold text-foreground font-mono">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Savings Badge */}
      {shippingCost === 0 && subtotal > 100 && (
        <div className="mt-4 p-3 bg-success/10 border border-success/20 rounded-md">
          <div className="flex items-center gap-2">
            <Icon name="Gift" size={16} className="text-success" />
            <span className="text-sm font-medium text-success">
              You saved $25.00 on shipping!
            </span>
          </div>
        </div>
      )}

      {/* Security Badge */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Icon name="Shield" size={14} className="text-success" />
          <span>Secure 256-bit SSL encryption</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;