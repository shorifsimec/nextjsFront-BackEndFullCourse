
const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const { category } = await params;
  console.log("🚀 ~ CategoryPage ~ category:", category)
  return (
    <div>
      <h1>Category Page for: {category}</h1>
    </div>
  )
}

export default CategoryPage