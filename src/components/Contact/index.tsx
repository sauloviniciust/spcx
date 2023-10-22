const Contact = () => {
    return (
        <section className="rounded-3xl container mx-auto" id="contato">
			<article className="bg-black shadow-2xl border-red-500 border-4 rounded-3xl">
				<div className="p-6 shadow-2xl">
					<h3 className="text-3xl sm:text-5xl font-bold text-red-700 mb-10">CONTATO</h3>
					<p className="text-orange-300 text-xl sm:text-2xl mb-10">
						Entre em contato para orçamentos, feedbacks, colaborações, etc...
						Responderei assim que possível.
					</p>
				</div>
				<div className="p-6 bg-red-700 bg-opacity-80 max-h-full rounded-b-2xl h-fit z-10">
					<form className="space-y-4 text-orange-100" action="https://formspree.io/f/xzbqjkjp" method="POST">
						<div className="text-xl">
							<div>
								<label htmlFor="full-name" className="block">Nome:</label>
								<input type="text" name="full-name" placeholder="Digite seu nome completo..." required
									className="w-full focus:outline-none px-4 mb-4 mt-2 py-2 bg-black rounded-lg" />
							</div>
							<div>
								<label htmlFor="email" className="block ">Email:</label>
								<input id="email" type="email" name="email" placeholder="Digite seu email..." required
									className="w-full focus:outline-none px-4 mb-4 mt-2 py-2 rounded-lg bg-black " />
							</div>
						</div>
						<div  className="text-xl">
							<label htmlFor="subject" className="block">Assunto:</label>
							<input type="text" name="subject" placeholder="Digite o assunto da mensagem..." required
								className="w-full text-xl focus:outline-none font-lighter px-4 mb-4 mt-2 py-2 rounded-lg bg-black " />
						</div>
						<div className="text-xl">
							<label htmlFor="message"className="block ">Sua Mensagem:</label>
							<textarea name="message"placeholder="Deixe sua mensagem aqui..." required
								className="w-full focus:outline-none px-4 mb-4 mt-2 py-2 rounded-lg bg-black "></textarea>
						</div>
						<div className="flex justify-center">
							<button type="submit" className="bg-black font-ligther text-red-100 text-xl sm:text-3xl p-12 py-2 px-4 rounded-3xl
						hover:bg-red-700 hover:text-orange-300 hover:shadow-2xl ">Submit</button>
						</div>
					</form>
				</div>
			</article>
		</section>

    )
}

export {Contact}