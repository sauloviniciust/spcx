const Footer = () => {
    return(
        <footer>
		<section className="bg-gradient-to-b from-black to-amber-900 shadow-inner h-auto text-azul-200">

			<div className="grid lg:grid-cols-3 lg:text-2xl place-items-center text-center font-lighter text-xl  ">
				<div className="flex justify-center w-56">
					<img  src="devsaulo.png" alt="sauloviniciust dev logo" />
				</div>

				<p className="mb-6 sm:mx-20 lg:mx-0">
					Site desenvolvido por Saulo Vinicius, desenvolvedor e estudante de
					desenvolvimento Fullstack na Coderhouse, inteiramente feito e editado com React, Vite e Tailwindcss.
				</p>

				<div>
					<div>
						<ul>
							<li className="text-orange-500 font-bold mb-2">Fullstack Developer</li>
							<li><i className="mb-2 fa-solid fa-location-dot"></i> Minas Gerais, MG</li>
							<li> <a href="wa.link/fovx6s" target="_blank" className="mb-2 hover:text-red-500 "> +55 31 9 8539-2710 </a></li>
							<li> <a href="mailto:sauloviniciust@gmail.com" target="_blank" className="hover:text-red-500">sauloviniciust@gmail.com </a> </li>

							<div>
								<ul className="flex justify-center gap-9 text-2xl mb-3 mt-4">
									<li>
										<a href="https://github.com/sauloviniciust" target="_blank"><i
												className="fa-brands fa-github hover:text-red-500"></i></a>
									</li>
									<li>
										<a href="https://www.linkedin.com/in/saulo-vinicius-b05b38271"
											target="_blank"><i
												className=" fa-brands fa-linkedin-in hover:text-red-500"></i></a>
									</li>
									<li>
										<a href="https://www.instagram.com/sauloviniciust" target="_blank"><i
												className=" fa-brands fa-instagram hover:text-red-500"></i></a>
									</li>

									<li><a href="mailto:sauloviniciust@gmail.com" target="_blank"><i
												className="fa-brands fa-google hover:text-red-500"></i></a>
									</li>

									<li><a href="wa.link/fovx6s" target="_blank"><i
												className=" fa-brands fa-whatsapp hover:text-red-500"></i></a>
									</li>
								</ul>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<section className="flex p-4 text-center font-lighter text-lg">
			<div className="mr-auto">
				<small>SPACECHRONIX &copy;2014-2023 Psytrance MG | BR
				</small>
			</div>
			<div>
				<small>Website created by Sauloviniciust &copy;2023 Copyright</small>
			</div>
		</section>
	</footer>
    )
}
export {Footer}