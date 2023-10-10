const Main = () => {

    return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-9" id="caminhada">
			<div>
				<img src="IMG_2295.JPG" alt="spacechronix tocando na roots" />
			</div>
			<div className="font-lighter text-green-600">
				<h3 className="text-2xl md:text-5xl text-center">Spacechronix/Koan</h3>
				<p className="text-xl  md:text-2xl p-5">
					Saulo Vinicius, baterista vindo de uma família de músicos sempre foi incentivado a se envolver com o
					meio musical, passando por diversos instrumentos e estilos, encontrou seu lugar no Psytrance.
					Iniciou sua jornada de estudos em 2014, sempre agregando suas experiências pessoais e conhecimento
					teórico musical às suas canções de forma harmoniosa, criando sensações insanas e texturas bem
					trabalhadas, tem uma pegada muito agressiva e característica do som psicodélico, dentro de cada
					performance tenta mesclar a história de sua música ao sentimento e energia do momento e a todo o
					público criando uma total harmonia de som, alma e
					corpo.
				</p>
				<div className="animate-bounce md:text-5xl text-2xl font-lighter hover:text-vermelho-100 text-center mb-10">
					<a href="https://soundcloud.com/dark-sonik/podcast-01-another-psyde-records-live-spacechronix"
						target="_blank">Ouça!</a>
				</div>
			</div>

		</section>
        )
}

export {Main}