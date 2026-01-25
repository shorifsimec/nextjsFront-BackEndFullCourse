
const ProductDetailsShop = async ({ params }: { params: Promise<{ slug: string[] }> }) => {

  const { slug } = await params
  console.log("🚀 ~ ProductDetailsShop ~ slug:", slug)

  // url get korar jonno
  // http://localhost:3000/shop/dress/women/t-shirt/summer/1

  // if (slug?.length === 2) {
  //   return <p>Viewing product for category {slug[0]} and product {slug[1]}</p>
  // } else if (slug?.length === 1) {
  //   return <p>View Category is : {slug[0]}</p>
  // }


  return (
    <div>
      {/* if function use na korle map kora jete pare */}
      {/* <p>ProductDetailsShop {slug?.join(", ")}</p> */}
      <p>ProductDetailsShop map :  {slug?.length > 0 && slug?.map((item: string, index: number) => <span key={index}>{item}</span>)}</p>

      <p>amader src / app / shop a jodi page.tsx file toiri na kori tahole shop url a gele 404 not found dekhabe eta jate na ashe tar jonno [[]] doubel third breaket dite hobe. jemon: [[...slug]]</p>
    </div>
  )
}

export default ProductDetailsShop