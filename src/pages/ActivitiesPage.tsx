import { Link } from "react-router-dom";


const activitySections = [
    {
        id: 1,
        title: "Спорт",
        description: "Бокс, бег и другие спортивные активности",
        imageUrl: "img/sports/sports.jpg",
        href: "/activities/sports"
    },
    {
        id: 2,
        title: "НВП",
        description: "Начальная военная подготовка",
        imageUrl: "nvp.jpg",
        href: "/activities/nvp"
    },
    {
        id: 3,
        title: "Отчеты о помощи",
        description: "Видеоотчеты о нашей работе",
        imageUrl: "1.jpg",
        href: "/activities/reports"
    }
];

export default function ActivitiesPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 py-8">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-12">Наши Мероприятия</h1>
                    {/* Сетка карточек разделов */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activitySections.map((section) => (
                            <Link key={section.id} to={section.href}>
                                {/* Контейнер карточки */}
                                <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col border border-gray-100 hover:-translate-y-1">

                                    {/* Контейнер для изображения с обрезкой */}
                                    <div className="flex-shrink-0 overflow-hidden">
                                        <img
                                            src={section.imageUrl}
                                            alt={section.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Описание раздела */}
                                    <div className="p-6 flex-grow">
                                        <h2 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                                            {section.title}
                                        </h2>
                                        <p className="text-gray-600 leading-relaxed">
                                            {section.description}
                                        </p>
                                    </div>

                                    {/* Индикатор кликабельной области (опционально) */}
                                    <div className="px-6 pb-4 mt-auto">
                                        <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
                                            Смотреть видео
                                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );
}
