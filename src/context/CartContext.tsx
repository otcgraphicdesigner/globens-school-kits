import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { Bundle, CartItem, Cart, Ward } from '@/types';
import { toast } from '@/hooks/use-toast';

interface CartContextType {
  cart: Cart;
  items: CartItem[];
  addToCart: (bundle: Bundle, ward: Ward) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (bundle: Bundle, ward: Ward) => {
    setItems(prev => {
      const existingItem = prev.find(
        item => item.bundleId === bundle.id && item.wardId === ward.id
      );

      if (existingItem) {
        toast({
          title: "Already in cart",
          description: `${bundle.name} for ${ward.name} is already in your cart`,
        });
        return prev;
      }

      toast({
        title: "Added to cart",
        description: `${bundle.name} added for ${ward.name}`,
      });

      return [
        ...prev,
        {
          id: `${bundle.id}-${ward.id}-${Date.now()}`,
          bundleId: bundle.id,
          bundle,
          wardId: ward.id,
          ward,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (itemId: string) => {
    setItems(prev => prev.filter(item => item.id !== itemId));
    toast({
      title: "Removed from cart",
      description: "Item has been removed",
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(itemId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const cart = useMemo(() => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.bundle.price * item.quantity,
      0
    );
    const discount = items.reduce(
      (sum, item) => sum + (item.bundle.mrp - item.bundle.price) * item.quantity,
      0
    );
    const tax = 0; // Simplified - would calculate GST
    const shipping = subtotal > 500 ? 0 : 49;
    const total = subtotal + tax + shipping;

    return {
      items,
      subtotal,
      discount,
      tax,
      shipping,
      total,
    };
  }, [items]);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
