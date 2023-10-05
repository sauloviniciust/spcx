

const Header = () => {
return(
	<header>
		<div className="relative mb-20 bg-cover bg-center hidden md:block">
			<div className="">
				<img className=" animate-pulse transform scale-50 hover:scale-75"
					src="logo personalizado sf black.png" alt="spacechronix Logo" />
			</div>
		</div>
		<section className="md:hidden scale-105">
			<div>
			</div>
		</section>
	</header>
)
}

export {Header}