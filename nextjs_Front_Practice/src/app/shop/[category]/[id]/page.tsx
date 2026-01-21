
// const ProductDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
const ProductDetails = async ({ params }: { params: { category: string, id: string } }) => {
  const { category, id } = await params;
  return (
    <div>
      <p>Product Details</p>
      <p>Product Category <span className="capitalize">{category}</span></p>
      <p><span className="capitalize">{category} Item:</span>{id}</p>
    </div>
  )
}

export default ProductDetails