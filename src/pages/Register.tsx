import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Users, Building2 } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Register for UPOS</h1>
          <p className="text-xl text-muted-foreground">Choose your account type</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 space-y-6 hover:shadow-xl transition-shadow cursor-pointer" onClick={() => navigate('/register/devotee')}>
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-semibold">Register as Devotee</h2>
              <p className="text-muted-foreground">
                Access temple services, book darshans, and manage your pilgrimage journey
              </p>
            </div>
            <Button className="w-full" size="lg">
              Continue as Devotee
            </Button>
          </Card>

          <Card className="p-8 space-y-6 hover:shadow-xl transition-shadow cursor-pointer" onClick={() => navigate('/register/temple')}>
            <div className="w-20 h-20 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
              <Building2 className="w-10 h-10 text-accent" />
            </div>
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-semibold">Register as Temple</h2>
              <p className="text-muted-foreground">
                Manage your temple operations, offerings, and connect with devotees
              </p>
            </div>
            <Button className="w-full" size="lg" variant="secondary">
              Continue as Temple
            </Button>
          </Card>
        </div>

        <div className="text-center">
          <Button variant="ghost" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
