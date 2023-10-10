import { Card } from "./components/Card";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Menu } from "./components/Menu";
import { Socials } from "./components/Socials";
import { Support } from "./components/Support";

export default function App() {

  return (
    <>
      <Menu/>
      <Header/>
      <Main/>
      <Socials/>
      <Card/>
      <Support/>
      <Contact/>
      <Footer/>
    </>
  )
}


