const Card = () => {
    return(

        <section className="shadow-2xl hover:shadow-white shadow-black 
		border-t-2 border-slate-900 border-opacity-90 bg-gradient-to-b 
		from-slate-900 to-blue-900" id="conheça">

			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 sm:mx-5 sm:gap-5">
			<article className="scale-75 md:scale-90 lg:scale-90 xl:scale-90 transition ease-in-out delay-100 text-center rounded-3xl
				 bg-black shadow-2xl z-10 transform hover:scale-105 hover:bg-black">
					
						<img className="rounded-t-3xl" src="livelunar.jpg"
							alt="spacechronix live na lunar" />
					
					<div>
						
							<img className="w-20 sm:w-40 lg:relative mb-4 bottom-24 mx-auto" src="soundcloud-logo.png "
								alt="soundcloud Logo" />
						
						<p className="sm:text-base lg:text-lg xl:text-xl  text-white font-medium mb-8 mx-5">
							Live 100% autoral, com sound designs complexos que se completam e preenchem todo ambiente
							com conversas elaboradas e psicodelicas
						</p>
						<a href="https://soundcloud.com/spacechronix" target="_blank"><button className="border-2 rounded-3xl  font-medium border-orange-600 sm:text-base lg:text-lg xl:text-xl text-orange-500  w-28 h-12 mb-6 
								transition ease-in-out delay-150 hover:text-black hover:bg-orange-600">Ouça</button></a>
					</div>
				</article>

				<article className="scale-75 md:scale-90 lg:scale-90 xl:scale-90 transition ease-in-out delay-100 text-center rounded-3xl
				 bg-black shadow-2xl z-10 transform  hover:scale-105 hover:bg-black">
					
						<img className="rounded-t-3xl" src="djing.jpg" alt="spacechronix tocando" />
					
					<div>
						<div>
							<img className="w-20 sm:w-40 lg:relative   my-3 bottom-24 m-auto"
								src="YouTube_Logo_(2013-2017).svg.png" alt="youtube Logo"/>
						</div>
						<p className="sm:text-base lg:text-lg xl:text-xl text-white font-medium mb-8 mx-5">
							Confira videos de diversas apresentações gravados durante toda a carreira e evolução do
							projeto.
						</p>
						<a href="https://www.youtube.com/@isbum/videos" target="_blank"><button className="border-2 font-medium rounded-3xl border-red-600 sm:text-base lg:text-lg xl:text-xl text-red-600 w-28 h-12
								transition ease-in-out delay-150 hover:text-black hover:bg-red-600">Assista</button></a>
					</div>
				</article>

				<article className="scale-75 md:scale-90 lg:scale-90 xl:scale-90 transition ease-in-out delay-100 text-center rounded-3xl
				 bg-black shadow-2xl z-10 transform  hover:scale-105 hover:bg-black">
					
						<img className="rounded-t-3xl" src="koanmountain.jpg"
							alt="koan tocando na psychedelic mountain em Sao Tomé" />
					
					<div>
						<div>
							<img className="w-20 sm:w-40 lg:relative   my-3 bottom-24 m-auto" src="KOAN LOGO1.png"
								alt="koan Logo"/>
						</div>
						<p className="sm:text-base lg:text-lg xl:text-xl text-white  font-medium mb-8 mx-5">
							Koan é o projeto paralelo de Saulo Vinicius, com influencias de forest, com bases densas e
							atmosferas pesadas.
						</p>
						<a href="https://soundcloud.com/koanlive" target="_blank"><button className="border-2 font-medium rounded-3xl border-lime-600 sm:text-base lg:text-lg xl:text-xl text-lime-600  w-28 h-12 mb-6 
								transition ease-in-out delay-150 hover:text-black hover:bg-lime-600">Conheça</button></a>
					</div>
				</article>


			</div>
		</section>
     
    )
}

export { Card }