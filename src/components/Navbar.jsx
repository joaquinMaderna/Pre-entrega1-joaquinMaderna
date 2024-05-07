import { CartWidget } from "./CartWidget"
import { PiTumblrLogoBold } from "react-icons/pi";

const Navbar = () => {
    return (
        <>
            <header className="z-30 my-5 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-2 md:rounded-3xl lg:max-w-screen-lg">
                <div className="px-4">
                    <div className="flex items-center justify-between">

                        <div className="flex shrink-0">
                            <a aria-current="page" className="flex items-center" href="/">
                                <PiTumblrLogoBold className="h-7 w-auto" />
                                <span className="ml-3 text-xl font-bold text-gray-900">TechStore</span>
                            </a>
                        </div>

                        <div className="flex items-center justify-end gap-3">
                            <a className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-ltext-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex">
                                <CartWidget />
                            </a>
                            <a className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-l font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex">
                                Inicio
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar