import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4 text-center">
      <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
        <CheckCircle className="w-12 h-12 text-green-500" />
      </div>
      <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        Thank you for your purchase. You will receive an email shortly with your Creative Cloud redemption code and activation instructions.
      </p>
      <Link 
        href="/"
        className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
