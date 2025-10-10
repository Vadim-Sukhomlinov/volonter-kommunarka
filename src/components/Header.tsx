import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import img from '../assets/1.jpg'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    const navigation = [
        { name: 'Главная', href: '/' },
        { name: 'Деятельность', href: '/activities' },
        { name: 'О нас', href: '/about' },
        { name: 'Контакты', href: '/contact' },
    ]

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Логотип */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
                                <img
                                    src={img}
                                    alt="Эмблема Волонтеры Коммунарки"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                                    Волонтеры Коммунарки
                                </span>
                                <p className="text-xs text-gray-500 -mt-1">помогаем вместе</p>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`font-medium transition-all duration-200 hover:text-blue-600 ${location.pathname === item.href
                                    ? 'text-blue-600 font-semibold'
                                    : 'text-gray-700'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            to="/contact"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
                        >
                            Присоединиться
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                            <span className={`w-6 h-0.5 bg-gray-600 rounded transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                                }`}></span>
                            <span className={`w-6 h-0.5 bg-gray-600 rounded transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                                }`}></span>
                            <span className={`w-6 h-0.5 bg-gray-600 rounded transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                                }`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`font-medium px-3 py-2 rounded-lg transition-all ${location.pathname === item.href
                                        ? 'text-blue-600 bg-blue-50 font-semibold'
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Присоединиться
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}