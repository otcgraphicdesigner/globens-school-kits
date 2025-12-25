import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, ArrowRight, Package } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Cart = () => {
  const { cart, items, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container py-16 md:py-24">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Your cart is empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Start shopping by selecting your school and adding bundles to your cart.
            </p>
            <Button onClick={() => navigate('/schools')} size="lg">
              Browse Schools
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Continue Shopping
            </button>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Shopping Cart
            </h1>
          </div>
          <Button variant="ghost" onClick={clearCart} className="text-destructive hover:text-destructive">
            Clear Cart
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div 
                key={item.id} 
                className="bg-card rounded-2xl border border-border p-4 md:p-6"
              >
                <div className="flex gap-4">
                  {/* Bundle Icon */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Package className="w-8 h-8 text-primary" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {item.package.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          For: <span className="text-foreground">{item.ward.name}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.package.textbooks.length + item.package.notebooks.length + item.package.stationery.length} items included
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-destructive shrink-0"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Price & Quantity */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">
                          ₹{item.package.price * item.quantity}
                        </p>
                        {item.package.mrp > item.package.price && (
                          <p className="text-sm text-muted-foreground line-through">
                            ₹{item.package.mrp * item.quantity}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl border border-border p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Order Summary
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">₹{cart.subtotal}</span>
                </div>
                {cart.discount > 0 && (
                  <div className="flex justify-between text-sm text-success">
                    <span>Bundle Discount</span>
                    <span>-₹{cart.discount}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">
                    {cart.shipping === 0 ? (
                      <span className="text-success">FREE</span>
                    ) : (
                      `₹${cart.shipping}`
                    )}
                  </span>
                </div>
                {cart.shipping > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Free shipping on orders above ₹500
                  </p>
                )}
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between items-center mb-6">
                <span className="font-semibold text-foreground">Total</span>
                <span className="text-2xl font-bold text-foreground">₹{cart.total}</span>
              </div>

              <Button 
                variant="gold" 
                size="lg" 
                className="w-full"
                onClick={() => navigate('/checkout')}
              >
                Proceed to Checkout
                <ArrowRight className="h-4 w-4" />
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Secure checkout powered by Razorpay
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
