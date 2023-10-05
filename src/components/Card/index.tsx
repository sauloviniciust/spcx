


const Card = () => {
    return(

        <>
        <section className="bg-opacity-90 bg-gradient-to-b from-black  to-azul-300" id="conheça">
			<div className=" w-10/12 mx-auto grid grid-cols-2  md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3  ">
			<article className="scale-75 md:scale-90 lg:scale-90 xl:scale-90 transition ease-in-out delay-100 text-center rounded-3xl
				 bg-black shadow-2xl z-10 transform  hover:scale-105 hover:bg-black">
					<div>
						<img className="rounded-t-3xl" src="livelunar.jpg"
							alt="spacechronix live na lunar" />
					</div>
					<div className="p-5">
						<div className="-mb-7">
							<img className="w-60 relative bottom-24 m-auto" src="soundcloud-logo.png "
								alt="soundcloud Logo" />
						</div>
						<p className="text-xl text-white font-medium mt-5 mr-6 mb-8">
							Live 100% autoral, com sound designs complexos que se completam e preenchem todo ambiente
							com conversas elaboradas e psicodelicas
						</p>
						<a className="" href="https://soundcloud.com/spacechronix" target="_blank"><button className="border-2 rounded-3xl  font-medium border-orange-600 text-xl text-orange-500  w-28 h-12 mb-6 
								transition ease-in-out delay-150 hover:text-black hover:bg-orange-600">Ouça</button></a>
					</div>
				</article>

				<article className="scale-75 md:scale-90 lg:scale-90 xl:scale-90 transition ease-in-out delay-100 text-center rounded-3xl
				 bg-black shadow-2xl z-10 transform  hover:scale-105 hover:bg-black">
					<div>
						<img className="rounded-t-3xl" src="djing.jpg" alt="spacechronix tocando" />
					</div>
					<div className="p-5">
						<div className="-mb-7">
							<img className="w-60 relative bottom-24 m-auto"
								src="YouTube_Logo_(2013-2017).svg.png" alt="youtube Logo"/>
						</div>
						<p className="text-xl text-white font-medium  mt-5 mr-6 mb-8">
							Confira videos de diversas apresentações gravados durante toda a carreira e evolução do
							projeto.
						</p>
						<a href="https://www.youtube.com/@isbum/videos" target="_blank"><button className="border-2 font-medium rounded-3xl border-red-600 text-xl text-red-600  w-28 h-12 mb-6 
								transition ease-in-out delay-150 hover:text-black hover:bg-red-600">Assista</button></a>
					</div>
				</article>

				<article className="scale-75 md:scale-90 lg:scale-90 xl:scale-90 transition ease-in-out delay-100 text-center rounded-3xl
				 bg-black shadow-2xl z-10 transform  hover:scale-105 hover:bg-black">
					<div>
						<img className="rounded-t-3xl" src="koanmountain.jpg"
							alt="koan tocando na psychedelic mountain em Sao Tomé" />
					</div>
					<div className="p-5">
						<div className="-mb-7">
							<img className="w-60 relative bottom-24 m-auto" src="KOAN LOGO1.png"
								alt="koan Logo"/>
						</div>
						<p className="text-xl text-white  font-medium mt-5 mr-6 mb-8">
							Koan é o projeto paralelo de Saulo Vinicius, com influencias de forest, com bases densas e
							atmosferas pesadas.
						</p>
						<a href="https://soundcloud.com/koanlive" target="_blank"><button className="border-2 font-medium rounded-3xl border-lime-600 text-xl text-lime-600  w-28 h-12 mb-6 
								transition ease-in-out delay-150 hover:text-black hover:bg-lime-600">Conheça</button></a>
					</div>
				</article>


			</div>
		</section>
        </>
    )
}

export { Card }