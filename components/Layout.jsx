import Head from "next/head";
import NavBar from './NavBar/NavBar'
import Futter from './Footer/Footer'
const Layaut = ({ children }) => (
<>
<Head>
    <title>Real Estate</title>
</Head>
<div className="bg-white">
    <header className="sticky top-0 z-30 ">
        <NavBar></NavBar>
    </header>
    <main className="mb-5">
        { children }
    </main>
    <footer className="mt-16">
        <div className="h-20">

        </div>
        <Futter/>
    </footer>
</div>
</>
);
 export default Layaut;