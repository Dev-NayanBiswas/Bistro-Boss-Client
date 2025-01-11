function Heading({headingData}){
    const {small, header} = headingData || {}
  return (
    <>
    <section className="text-center mx-auto w-full">
        <section className="my-10 mx-auto w-full">
                <p className="text-center text-[#D99904] lowercase font-normal tracking-wide italic font-cin">---{small}---</p>
                <div className="border-b-[2px] w-5/12 mx-auto border-opacity-45"/>
                <h1 className="text-center uppercase text-3xl font-semibold font-cin text-gray-600/45 my-3">{header}</h1>
                <div className="border-b-[2px] w-5/12 mx-auto border-opacity-45"/>
        </section>
    </section>
    </>
  )
}

export default Heading