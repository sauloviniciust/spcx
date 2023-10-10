const Footer = () => {
    return(
        <footer>
		<section className="bg-gradient-to-b from-black  to-amber-900 shadow-inner h-auto text-azul-200">

			<div className="grid lg:grid-cols-3 lg:text-2xl place-items-center text-center font-lighter text-xl ">
				<div className="flex justify-center">
					<img  src="devsaulo.png" alt="sauloviniciust dev logo" />
				</div>

				<p className="mb-6">
					Site desenvolvido por Saulo Vinicius, desenvolvedor e estudante de
					desenvolvimento Fullstack na Coderhouse. Inteiramente feito e editado com Html e Tailwindcss.
				</p>

				<div>
					<div>
						<ul>
							<li >Sauloviniciust</li>
							<li className="text-dourado-300 font-bold mb-2">Frontend Developer</li>
							<li><i className="mb-2 fa-solid fa-location-dot"></i> Minas Gerais, MG</li>
							<li><i className="mb-2 fa-brands fa-whatsapp"></i> +55 31 9 8539-2710</li>
							<li className="mb-3 ">sauloviniciust@gmail.com</li>

							<div>
								<ul className="flex justify-center gap-9 text-2xl mb-3">
									<li>
										<a href="https://github.com/sauloviniciust" target="_blank"><i
												className="fa-brands fa-github hover:text-laranja"></i></a>
									</li>
									<li>
										<a href="https://www.linkedin.com/in/saulo-vinicius-b05b38271"
											target="_blank"><i
												className=" fa-brands fa-linkedin-in hover:text-laranja"></i></a>
									</li>
									<li>
										<a href="https://www.instagram.com/sauloviniciust" target="_blank"><i
												className=" fa-brands fa-instagram hover:text-laranja"></i></a>
									</li>

									<li><a href="mailto:sauloviniciust@gmail.com" target="_blank"><i
												className="fa-brands fa-google hover:text-laranja"></i></a>
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