import { FaTwitch, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSoundcloud} from 'react-icons/fa';

const Socials = () =>{
    return(
        <section>
        <div className="bg-gray-400 bg-opacity-10 p-10 h-auto 
                text-center text-blue-400 tracking-wider text-2xl md:text-4xl">
            <div>
                <h2 className="mb-8">Redes sociais</h2>
                <ul className="flex gap-9 justify-center text-black ">
                    <li>
                        <a className="hover:text-orange-700 transition ease-in-out delay-400"
                            href="https://twitter.com/spacechronix" target="_blank"><FaTwitter/></a>
                    </li>
                    <li>
                        <a className="hover:text-orange-700 transition ease-in-out delay-400"
                            href="https://www.facebook.com/spacechronix" target="_blank"> <FaFacebook/></a>
                    </li>
                    <li>
                        <a className="hover:text-orange-700 transition ease-in-out delay-400"
                            href="https://www.instagram.com/spacechronix/" target="_blank"><FaInstagram/></a>
                    </li>
                    <li>
                        <a className="hover:text-orange-700 transition ease-in-out delay-400"
                            href="https://www.youtube.com/@isbum/videos" target="_blank"><FaYoutube/></a>
                    </li>
                    <li>
                        <a className="hover:text-orange-700 transition ease-in-out delay-400"
                            href="https://www.twitch.tv/spacechronix" target="_blank"><FaTwitch/></a>
                    </li>
                    <li>
                        <a className="hover:text-orange-700 transition ease-in-out delay-400"
                            href="https://www.soundcloud.com/spacechronix" target="_blank"><FaSoundcloud/></a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    )
}

export {Socials}