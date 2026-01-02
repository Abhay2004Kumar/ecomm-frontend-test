import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-bold tracking-tight">
          Welcome to Our Store
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover amazing products at great prices. Shop the latest collections
          and enjoy a seamless shopping experience.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/products">
            <Button size="lg">Shop Now</Button>
          </Link>
          <Link href="/admin">
            <Button variant="outline" size="lg">Admin Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
