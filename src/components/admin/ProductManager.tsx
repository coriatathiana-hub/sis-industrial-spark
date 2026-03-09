import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { Package } from "lucide-react";

const ProductManager = () => {
  const [products, setProducts] = useLocalStorage<AdminProduct[]>("admin_products", []);
  const [categories] = useLocalStorage<Category[]>("admin_categories", []);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isGalleryDialogOpen, setIsGalleryDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<AdminProduct | null>(null);
  const [galleryProduct, setGalleryProduct] = useState<AdminProduct | null>(null);
  const [deleteProduct, setDeleteProduct] = useState<AdminProduct | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    subcategory: "",
  });

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === "all" || product.category === filterCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, filterCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast({
        title: "Error",
        description: "El nombre del producto es obligatorio",
        variant: "destructive",
      });
      return;
    }

    if (!formData.category) {
      toast({
        title: "Error",
        description: "Debes seleccionar una categoría",
        variant: "destructive",
      });
      return;
    }

    if (editingProduct) {
      setProducts(products.map(prod => 
        prod.id === editingProduct.id 
          ? { ...prod, ...formData, updatedAt: new Date().toISOString() }
          : prod
      ));
      toast({
        title: "Producto actualizado",
        description: "El producto se ha actualizado correctamente",
      });
    } else {
      const newProduct: AdminProduct = {
        id: `prod_${Date.now()}`,
        ...formData,
        images: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setProducts([...products, newProduct]);
      toast({
        title: "Producto creado",
        description: "El nuevo producto se ha creado correctamente",
      });
    }

    handleCloseDialog();
  };

  const handleEdit = (product: AdminProduct) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      category: product.category,
      subcategory: product.subcategory || "",
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (product: AdminProduct) => {
    setDeleteProduct(product);
  };

  const confirmDelete = () => {
    if (deleteProduct) {
      setProducts(products.filter(prod => prod.id !== deleteProduct.id));
      toast({
        title: "Producto eliminado",
        description: "El producto se ha eliminado correctamente",
      });
      setDeleteProduct(null);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingProduct(null);
    setFormData({ name: "", description: "", category: "", subcategory: "" });
  };

  const handleOpenDialog = () => {
    setEditingProduct(null);
    setFormData({ name: "", description: "", category: "", subcategory: "" });
    setIsDialogOpen(true);
  };

  const handleManageGallery = (product: AdminProduct) => {
    setGalleryProduct(product);
    setIsGalleryDialogOpen(true);
  };

  const handleUpdateImages = (images: string[]) => {
    if (galleryProduct) {
      setProducts(products.map(prod => 
        prod.id === galleryProduct.id 
          ? { ...prod, images, updatedAt: new Date().toISOString() }
          : prod
      ));
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Gestión de Productos</CardTitle>
                <CardDescription>Administra el catálogo de productos</CardDescription>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={handleOpenDialog} size="lg" className="gap-2">
                    <Plus className="h-5 w-5" />
                    <span className="hidden sm:inline">Nuevo Producto</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <form onSubmit={handleSubmit}>
                    <DialogHeader>
                      <DialogTitle>
                        {editingProduct ? "Editar Producto" : "Nuevo Producto"}
                      </DialogTitle>
                      <DialogDescription>
                        {editingProduct 
                          ? "Modifica los datos del producto"
                          : "Completa los datos para crear un nuevo producto"}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Nombre del Producto *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ej: Casco de Seguridad Blanco"
                          maxLength={200}
                          required
                        />
                      </div>
                      
                      <div className="grid gap-2">
                        <Label htmlFor="category">Categoría *</Label>
                        <Select 
                          value={formData.category} 
                          onValueChange={(value) => setFormData({ ...formData, category: value })}
                        >
                          <SelectTrigger id="category">
                            <SelectValue placeholder="Selecciona una categoría" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.length === 0 ? (
                              <SelectItem value="none" disabled>
                                No hay categorías disponibles
                              </SelectItem>
                            ) : (
                              categories.map((cat) => (
                                <SelectItem key={cat.id} value={cat.name}>
                                  {cat.name}
                                </SelectItem>
                              ))
                            )}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="subcategory">Subcategoría</Label>
                        <Input
                          id="subcategory"
                          value={formData.subcategory}
                          onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                          placeholder="Ej: Protección de Cabeza"
                          maxLength={100}
                        />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="description">Descripción Técnica *</Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          placeholder="Especificaciones técnicas del producto: talla, modelo, material, normativas ISO..."
                          maxLength={2000}
                          rows={5}
                          required
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="button" variant="outline" onClick={handleCloseDialog}>
                        Cancelar
                      </Button>
                      <Button type="submit">
                        {editingProduct ? "Actualizar" : "Crear"}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            {/* Search and Filters */}
            <div className="grid gap-3 sm:grid-cols-2">
              <Input
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-11"
              />
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Todas las categorías" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las categorías</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.name}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="mb-4 text-muted-foreground">
                No hay productos creados aún
              </p>
              <Button onClick={handleOpenDialog} variant="outline" className="gap-2">
                <Plus className="h-4 w-4" />
                Crear primer producto
              </Button>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">
              No se encontraron productos con los filtros aplicados
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Producto</TableHead>
                    <TableHead className="hidden md:table-cell">Categoría</TableHead>
                    <TableHead className="hidden lg:table-cell">Descripción</TableHead>
                    <TableHead className="text-center">Imágenes</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium max-w-[200px]">
                        <div className="truncate">{product.name}</div>
                        <div className="md:hidden text-xs text-muted-foreground mt-1">
                          {product.category}
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Badge variant="secondary">{product.category}</Badge>
                      </TableCell>
                      <TableCell className="hidden lg:table-cell max-w-xs">
                        <div className="truncate text-sm text-muted-foreground">
                          {product.description}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleManageGallery(product)}
                          className="gap-2"
                        >
                          <ImageIcon className="h-4 w-4" />
                          <span>{product.images.length}</span>
                        </Button>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(product)}
                            aria-label="Editar producto"
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(product)}
                            aria-label="Eliminar producto"
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Gallery Dialog */}
      <Dialog open={isGalleryDialogOpen} onOpenChange={setIsGalleryDialogOpen}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Galería de Imágenes</DialogTitle>
            <DialogDescription>
              Gestiona las imágenes del producto: {galleryProduct?.name}
            </DialogDescription>
          </DialogHeader>
          {galleryProduct && (
            <ImageGalleryManager
              images={galleryProduct.images}
              onUpdateImages={handleUpdateImages}
            />
          )}
          <DialogFooter>
            <Button onClick={() => setIsGalleryDialogOpen(false)}>
              Cerrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deleteProduct} onOpenChange={() => setDeleteProduct(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar producto?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. El producto "{deleteProduct?.name}" y todas sus imágenes serán eliminados permanentemente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ProductManager;
