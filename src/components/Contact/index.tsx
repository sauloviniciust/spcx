const Contact = () => {
    return (
        <section class="rounded-3xl container mx-auto " id="contato">
			<article class="bg-black shadow-2xl border-red-500 border-4 rounded-3xl">
				<div class="p-6 shadow-2xl">
					<h3 class="text-5xl font-bold text-red-700 mb-10">CONTATO</h3>
					<p class="text-dourado-300 text-2xl mb-10">
						Entre em contato para orçamentos, feedbacks, colaborações, etc...
						Responderei assim que possível.
					</p>
				</div>
				<div class="p-6 bg-vermelho-200 bg-opacity-80 w-6/12 max-h-full rounded-b-2xl h-fit z-10">
					<form class="space-y-4 text-dourado-100" action="https://formspree.io/f/xzbqjkjp" method="POST">
						<div  class="text-xl">
							<div>
								<label for="full-name" class="block">Nome:</label>
								<input type="text" name="full-name" placeholder="Digite seu nome completo..." required
									class="w-full focus:outline-none px-4 mb-4 mt-2 py-2 bg-black rounded-lg" />
							</div>
							<div>
								<label for="email" class="block ">Email:</label>
								<input id="email" type="email" name="email" placeholder="Digite seu email..." required
									class="w-full focus:outline-none px-4 mb-4 mt-2 py-2 rounded-lg bg-black " />
							</div>
						</div>
						<div  class="text-xl">
							<label for="subject" class="block">Assunto:</label>
							<input type="text" name="subject" placeholder="Digite o assunto da mensagem..." required
								class="w-full text-xl focus:outline-none font-lighter px-4 mb-4 mt-2 py-2 rounded-lg bg-black " />
						</div>
						<div class="text-xl">
							<label for="message" class="block ">Sua Mensagem:</label>
							<textarea name="message" rows="10" placeholder="Deixe sua mensagem aqui..." required
								class="w-full focus:outline-none px-4 mb-4 mt-2 py-2 rounded-lg bg-black "></textarea>
						</div>
						<div class="flex justify-center ">
							<button type="submit" class=" bg-black font-ligther text-vermelho-100 text-3xl p-12 py-2 px-4 rounded-3xl
						hover:bg-vermelho-300  hover:text-dourado-300 hover:shadow-2xl ">Submit</button>
						</div>
					</form>
				</div>
			</article>
		</section>

    )
}

export {Contact}