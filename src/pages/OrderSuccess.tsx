import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="max-w-lg mx-auto text-center">
          {/* Success Animation */}
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center animate-fade-in">
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
            <div className="absolute inset-0 w-24 h-24 mx-auto bg-green-500/20 rounded-full animate-ping" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Order Placed Successfully!
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Thank you for your order. We'll send you a confirmation message with order details shortly.
          </p>

          {/* Order Info Card */}
          <div className="bg-card rounded-2xl border border-border p-6 mb-8 text-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">What's Next?</p>
                <p className="text-sm text-muted-foreground">Order ID: #GNS{Date.now().toString().slice(-8)}</p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">
                  1
                </div>
                <p className="text-muted-foreground">
                  You'll receive an SMS & email confirmation with order details
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">
                  2
                </div>
                <p className="text-muted-foreground">
                  Your package will be prepared and shipped within 2-3 business days
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">
                  3
                </div>
                <p className="text-muted-foreground">
                  Track your delivery with the tracking link sent via SMS
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/schools')}
            >
              Continue Shopping
            </Button>
            <Button
              size="lg"
              onClick={() => navigate('/')}
            >
              Go to Homepage
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderSuccess;
