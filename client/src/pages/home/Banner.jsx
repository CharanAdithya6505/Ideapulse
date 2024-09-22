import author2 from '/images/author2.png'

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-2 px-2 lg:p-0">
    <a 
      className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block" 
      style={{ height: '24em' }}
      href="/blogs/7"
    >
      <div className="absolute left-0 bottom-0 w-full h-full z-10"
        style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}></div>
      <img src="https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1325174870.jpg?w=430&h=230&crop=1" className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" alt="First Example" />
      <div className="p-4 absolute bottom-0 left-0 z-20">
        <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">AI</span>
        <h2 className="md:text-4xl text-3xl font-semibold text-gray-100 leading-tight">
        Rabbit is building an AI model that understands how software works
        </h2>
        <div className="flex mt-3">
          <img src="https://randomuser.me/api/portraits/men/97.jpg" className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
          <div>
            <p className="font-semibold text-gray-200 text-sm"> Kyle Wiggers </p>
            <p className="font-semibold text-gray-400 text-xs"> 14 Aug </p>
          </div>
        </div>
      </div>
    </a>

    <a className="w-full md:w-1/3 relative rounded" 
      style={{ height: '24em' }}
      href="/blogs/10"
    >
      <div className="absolute left-0 top-0 w-full h-full z-10"
        style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}></div>
      <img src="https://techcrunch.com/wp-content/uploads/2022/05/GettyImages-1238043769.jpg?w=430&h=230&crop=1" className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" alt="Second Example" />
      <div className="p-4 absolute bottom-0 left-0 z-20">
        <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Startups</span>
        <h2 className="text-3xl font-semibold text-gray-100 leading-tight">Resy and Eater co-founder raises $24M for Blackbird, a restaurant loyalty platform</h2>
        <div className="flex mt-3">
          <img src={author2} className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
          <div>
            <p className="font-semibold text-gray-200 text-sm"> Kyle  </p>
            <p className="font-semibold text-gray-400 text-xs"> 15 Aug </p>
          </div>
        </div>
      </div>
    </a>
  </div>
  )
}
export default Banner

