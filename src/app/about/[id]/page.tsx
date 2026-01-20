
const AboutDetails = async ({ params }: { params: Promise<{ id: string }> }) => {

  const { id } = await params
  return (
    <div>AboutDetails
      <p>onek gulo data dekhate ba onek gulo data niye kaj korar jonno async await use korte hoy</p>
      {id}</div>
  )
}

export default AboutDetails