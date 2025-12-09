import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout showFooter={false}>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center px-4">
          <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigate(-1)} variant="outline">
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
            <Button onClick={() => navigate('/')}>
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
