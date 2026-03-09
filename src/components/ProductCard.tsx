import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Package } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/producto/${product.id}`} className="block touch-target">
      <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
        <CardHeader className="space-y-3">
          <div className="flex aspect-square items-center justify-center rounded-md bg-muted">
            <Package className="h-16 w-16 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <CardTitle className="line-clamp-2 text-lg">{product.name}</CardTitle>
            <div className="flex flex-wrap gap-1">
              <Badge variant="secondary" className="text-xs">
                {product.subcategory}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {product.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
