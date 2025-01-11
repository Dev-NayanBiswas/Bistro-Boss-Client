function CommonCard({cardData}) {
    const {price,name,image,recipe} = cardData || {}
  return (
    <>

        <section className="flex lg:flex-row flex-col gap-2">
            <figure className="lg:h-[98px] bg-gray-800 h-20 lg:w-30 w-[100px] overflow-hidden rounded-ee-full rounded-tr-full rounded-bl-full">
                <img src={image} alt="image" className="object-cover w-full h-full object-center"/>
            </figure>
            <article className="flex flex-col justify-center items-start">
                <div className="flex md:flex-row flex-col md:justify-between justify-start md:items-center items-start gap-2 w-full pr-2">
                <h4 className="mr-1 text-2xl font-semibold font-cin whitespace-nowrap">{name}<span className="text-xs tracking-wider">----------------</span></h4>
                <div className="md:inline-block">
                <p className="text-xl font-semibold text-yellow-400/65 italic whitespace-nowrap">$ {price}</p>
                </div>
                </div>
                <p>{recipe}</p>
            </article>
        </section>

    </>
  )
}

export default CommonCard