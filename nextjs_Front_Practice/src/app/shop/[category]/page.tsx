
const CategoryPage = ({ params }: { params: { category: string } }) => {
  const { category } = params;
  return (
    <div>
      <h1>Category Page for: {category}</h1>

    </div>
  )
}

export default CategoryPage