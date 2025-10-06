import { Link } from 'react-router-dom'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const navigation = [
        { name: 'Главная', href: '/' },
        { name: 'Мероприятия', href: '/activities' },
        { name: 'О нас', href: '/about' },
        { name: 'Контакты', href: '/contact' },
    ]

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
                                <img
                                    src="/volonter-kommunarka/1.jpg"
                                    alt="Эмблема Волонтеры Коммунарки"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <span className="text-xl font-bold text-white">Волонтеры Коммунарки</span>
                                <p className="text-sm text-gray-400">помогаем вместе</p>
                            </div>
                        </div>
                        <p className="text-gray-300 mb-6 max-w-md text-lg">
                            Мы объединяем людей для помощи тем, кто в ней нуждается.
                            Вместе мы создаем добро и меняем жизни к лучшему.
                        </p>
                        <div className="flex space-x-4">
                            {['📘', '📷', '🐦', '📹'].map((icon, index) => (
                                <button
                                    key={index}
                                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-all duration-200 hover:scale-110 text-lg"
                                >
                                    {icon}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-white">Навигация</h3>
                        <ul className="space-y-3">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-white">Контакты</h3>
                        <ul className="space-y-3 text-gray-300 text-lg">
                            <li className="flex items-center space-x-3">
                                <span>📧</span>
                                <span>help@volonter.ru</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>📞</span>
                                <span>+7 (999) 123-45-67</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>📍</span>
                                <span>г. Москва, ул. Добрых дел, 1</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-lg">
                        © {currentYear} Волонтеры Коммунарки. Все права защищены.
                    </p>
                    <p className="text-gray-400 text-lg mt-2 md:mt-0">
                        Сделано с ❤️ для тех, кто в нужде
                    </p>
                </div>
            </div>
        </footer>
    )
}