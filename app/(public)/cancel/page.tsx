import Link from "next/link";
import { XCircle } from "lucide-react";

export default function CancelPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4 text-center">
      <div className="w-24 h-24 rounded-full bg-red-500/20 flex items-center justify-center mb-6">
        <XCircle className="w-12 h-12 text-red-500" />
      </div>
      <h1 className="text-4xl font-bold mb-4">Payment Cancelled</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        Your payment was cancelled and you have not been charged. If you encountered an error, please try again.
      </p>
      <Link 
        href="/"
        className="px-8 py-3 bg-foreground text-background rounded-full font-bold hover:bg-foreground/80 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
