import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const SavedItems = ({ savedItems, onAddToCart, onRemoveFromSaved }) => {
  const [selectedItems, setSelectedItems] = useState(new Set());

  const toggleItemSelection = (itemId) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(itemId)) {
      newSelected.delete(itemId);
    } else {
      newSelected.add(itemId);
    }
    setSelectedItems(newSelected);
  };

  const handleBulkAddToCart = () => {
    const itemsToAdd = savedItems.filter(item => selectedItems.has(item.id));
    itemsToAdd.forEach(item => onAddToCart(item.id));
    setSelectedItems(new Set());
  };

  const handleBulkRemove = () => {
    selectedItems.forEach(itemId => onRemoveFromSaved(itemId));
    setSelectedItems(new Set());
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-soft">
      <div className="p-6 border-b border-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-lg font-semibold text-foreground">Saved Items</h2>
          {selectedItems.size > 0 && (
            <div className="flex gap-2">
              <Button
                variant="default"
                size="sm"
                iconName="ShoppingCart"
                iconPosition="left"
                onClick={handleBulkAddToCart}
              >
                Add to Cart ({selectedItems.size})
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="Trash2"
                iconPosition="left"
                onClick={handleBulkRemove}
              >
                Remove ({selectedItems.size})
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6">
        {savedItems.length === 0 ? (
          <div className="text-center py-8">
            <Icon name="Heart" size={48} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">No saved items yet</p>
            <Button variant="outline" iconName="Search" iconPosition="left">
              Browse Products
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedItems.map((item) => (
              <div key={item.id} className="border border-border rounded-lg p-4 hover:shadow-soft transition-smooth">
                <div className="flex items-start justify-between mb-3">
                  <button
                    onClick={() => toggleItemSelection(item.id)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-smooth ${
                      selectedItems.has(item.id)
                        ? 'bg-primary border-primary text-primary-foreground'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {selectedItems.has(item.id) && <Icon name="Check" size={12} />}
                  </button>
                  <button
                    onClick={() => onRemoveFromSaved(item.id)}
                    className="text-muted-foreground hover:text-destructive transition-smooth"
                  >
                    <Icon name="X" size={16} />
                  </button>
                </div>
                
                <div className="aspect-square bg-muted rounded-lg mb-3 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="mb-3">
                  <h3 className="font-medium text-foreground mb-1">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-foreground font-mono">
                      ${item.price.toFixed(2)}
                    </span>
                    {item.originalPrice && item.originalPrice > item.price && (
                      <span className="text-sm text-muted-foreground line-through font-mono">
                        ${item.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className={i < Math.floor(item.rating) ? 'text-warning fill-current' : 'text-muted-foreground'}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">
                      ({item.reviews})
                    </span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.inStock ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'
                  }`}>
                    {item.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                
                <Button
                  variant="default"
                  size="sm"
                  fullWidth
                  iconName="ShoppingCart"
                  iconPosition="left"
                  disabled={!item.inStock}
                  onClick={() => onAddToCart(item.id)}
                >
                  Add to Cart
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedItems;