// 'use client';
// import { useState } from 'react';

// import fight1 from '../../assets/video/sports/fight.mp4'
// import fight2 from '../../assets/video/sports/fight2.mp4'
// import fight3 from '../../assets/video/sports/fight3.mp4'
// import fight4 from '../../assets/video/sports/run.mp4'

// interface Video {
//     id: number;
//     title: string;
//     description: string;
//     videoUrl: string;
// }

// const sportsVideos: Video[] = [
//     {
//         id: 1,
//         title: "Тренировка по боксу для начинающих",
//         description: "Основы стойки, передвижений и прямых ударов.",
//         videoUrl: `${fight1}`
//     },
//     {
//         id: 2,
//         title: "Спаринги",
//         description: "Отработка в парах",
//         videoUrl: `${fight2}`
//     },
//     {
//         id: 3,
//         title: "Спаринги - 2",
//         description: "Отработка в парах- 2",
//         videoUrl: `${fight3}`
//     },
//     {
//         id: 4,
//         title: "Пробежка",
//         description: "Бег по пересеченной местности",
//         videoUrl: `${fight4}`
//     }
// ];

// export default function SportsPage() {
//     // 2. Указываем, что состояние может быть объектом Video или null
//     const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     // 3. Типизируем параметр функции
//     const openModal = (video: Video) => {
//         setCurrentVideo(video);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setCurrentVideo(null);
//     };

//     return (
//         <div className="min-h-screen flex flex-col">
//             <main className="flex-1 py-8">
//                 <div className="max-w-6xl mx-auto px-4">
//                     <h1 className="text-4xl font-bold text-center mb-2">Спорт</h1>
//                     <p className="text-lg text-gray-600 text-center mb-12">Бокс, бег и другие спортивные активности</p>

//                     {/* Сетка видео - 2 в строку */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         {sportsVideos.map((video) => (
//                             <div
//                                 key={video.id}
//                                 className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
//                                 onClick={() => openModal(video)}
//                             >
//                                 {/* Миниатюра видео */}
//                                 <div className="relative aspect-video bg-gray-900">
//                                     <video
//                                         className="w-full h-full object-cover"
//                                         src={video.videoUrl}
//                                         muted
//                                     />
//                                     {/* Иконка воспроизведения поверх видео */}
//                                     <div className="absolute inset-0 flex items-center justify-center">
//                                         <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
//                                             <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//                                                 <path d="M8 5v14l11-7z" />
//                                             </svg>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* Описание видео */}
//                                 <div className="p-4">
//                                     <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
//                                     <p className="text-gray-600">{video.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </main>

//             {/* Модальное окно для просмотра видео */}
//             {isModalOpen && currentVideo && (
//                 <div
//                     className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50 p-4"
//                     onClick={closeModal}
//                 >
//                     <div
//                         className="bg-white rounded-lg max-w-6xl w-full max-h-[100vh] overflow-hidden"
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         {/* Заголовок модального окна */}
//                         <div className="flex justify-between items-center p-4 border-b">
//                             <h3 className="text-xl font-semibold">{currentVideo.title}</h3>
//                             <button
//                                 onClick={closeModal}
//                                 className="text-gray-500 hover:text-gray-700 text-2xl"
//                             >
//                                 ×
//                             </button>
//                         </div>

//                         {/* Видеоплеер в модальном окне */}
//                         <div className="p-4">
//                             <video
//                                 className="w-full aspect-video rounded bg-black"
//                                 controls
//                                 autoPlay
//                                 src={currentVideo.videoUrl}
//                             >
//                                 Ваш браузер не поддерживает элемент <code>video</code>.
//                             </video>
//                             <p className="mt-4 text-gray-700">{currentVideo.description}</p>
//                         </div>
//                     </div>
//                 </div>
//             )}

//         </div>
//     );
// }


'use client';
import { useState } from 'react';

import fight1 from '../../assets/video/sports/fight.mp4'
import fight2 from '../../assets/video/sports/fight2.mp4'
import fight3 from '../../assets/video/sports/fight3.mp4'
import fight4 from '../../assets/video/sports/run.mp4'

import img_run1 from '../../assets/img/sports/forest_runjpg.jpg'
import img_run2 from '../../assets/img/sports/team-forest.jpg'
import img_fight from '../../assets/img/sports/uppercot.jpg'


interface Video {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
    category?: string;
}

interface TrainingSchedule {
    day: string;
    time: string;
    location: string;
    type: string;
    instructor: string;
}

const trainingSchedule: TrainingSchedule[] = [
    {
        day: "Вторник",
        time: "20:00-21:30",
        location: "Стадион школы №2070",
        type: "Бокс (Любая подготовка)",
        instructor: "Евгений"
    },
    {
        day: "Четверг",
        time: "20:00-21:30",
        location: "Стадион школы №2070",
        type: "Бокс (Любая подготовка)",
        instructor: "Евгений"
    },
    {
        day: "Суббота",
        time: "9:00-10:30",
        location: "Храм",
        type: "Бег (все уровни)",
        instructor: "Евгений"
    },
    {
        day: "Воскресенье",
        time: "9:00-10:30",
        location: "Храм",
        type: "Бег (все уровни)",
        instructor: "Евгений"
    }
];

const sportsVideos: Video[] = [
    {
        id: 1,
        title: "Тренировка по боксу для начинающих",
        description: "Основы стойки, передвижений и прямых ударов.",
        videoUrl: `${fight1}`,
        category: "Бокс"
    },
    {
        id: 2,
        title: "Техника спаррингов",
        description: "Отработка комбинаций в парах, работа на дистанции",
        videoUrl: `${fight2}`,
        category: "Бокс"
    },
    {
        id: 3,
        title: "Техника спаррингов",
        description: "Основы стойки, передвижений и прямых ударов.",
        videoUrl: `${fight3}`,
        category: "Бокс"
    },
    {
        id: 4,
        title: "Растяжка и ОФП",
        description: "По пересеченной местности",
        videoUrl: `${fight4}`,
        category: "Бег"
    }
];

const photoCategories = [
    {
        title: "Тренировки по боксу",
        count: 24,
        coverImage: `${img_fight}`
    },
    {
        title: "Беговые занятия",
        count: 18,
        coverImage: `${img_run1}`
    },
    {
        title: "Бег в лесу",
        count: 12,
        coverImage: `${img_run2}`
    }
];

export default function SportsPage() {
    const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string>("Все");

    const categories = ["Все", "Бокс", "Бег", "ОФП"];
    const filteredVideos = activeCategory === "Все"
        ? sportsVideos
        : sportsVideos.filter(video => video.category === activeCategory);

    const openModal = (video: Video) => {
        setCurrentVideo(video);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentVideo(null);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 py-8">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Заголовок */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Спортивные мероприятия</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Присоединяйтесь к нашим тренировкам! Все занятия бесплатные и проводятся опытными инструкторами
                        </p>
                    </div>

                    {/* Секция расписания */}
                    <section className="mb-16">
                        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
                            <h2 className="text-3xl font-bold mb-8 text-center">Расписание тренировок</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {trainingSchedule.map((training, index) => (
                                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                                        <div className="text-center mb-4">
                                            <h3 className="text-xl font-bold text-blue-600 mb-2">{training.day}</h3>
                                            <p className="text-2xl font-bold text-gray-900">{training.time}</p>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-start space-x-2">
                                                <span className="text-green-600 mt-1">📍</span>
                                                <span className="text-gray-700">{training.location}</span>
                                            </div>
                                            <div className="flex items-start space-x-2">
                                                <span className="text-blue-600 mt-1">🥊</span>
                                                <span className="text-gray-700">{training.type}</span>
                                            </div>
                                            <div className="flex items-start space-x-2">
                                                <span className="text-purple-600 mt-1">👤</span>
                                                <span className="text-gray-700">{training.instructor}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Секция видео с фильтрами */}
                    <section className="mb-16">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                            <h2 className="text-3xl font-bold mb-4 md:mb-0">Видео с тренировок</h2>
                            <div className="flex flex-wrap gap-2">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`px-4 py-2 rounded-full font-medium transition-all ${activeCategory === category
                                            ? 'bg-blue-600 text-white shadow-lg'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredVideos.map((video) => (
                                <div
                                    key={video.id}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-gray-100"
                                    onClick={() => openModal(video)}
                                >
                                    <div className="relative aspect-video bg-gray-900 overflow-hidden">
                                        <video
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            src={video.videoUrl}
                                            muted
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                            <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                        {video.category && (
                                            <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                {video.category}
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                                            {video.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">{video.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Секция фотогалереи */}
                    <section>
                        <h2 className="text-3xl font-bold mb-8">Фотогалерея</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {photoCategories.map((category, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                                    <div className="aspect-video bg-gray-200 relative overflow-hidden">
                                        <div
                                            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                                            style={{ backgroundImage: `url(${category.coverImage})` }}
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                            <div className="text-center text-white">
                                                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                                                <p className="text-lg">{category.count} фото</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 text-center">
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                                            Смотреть фото
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </main>

            {/* Модальное окно для видео */}
            {isModalOpen && currentVideo && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center p-6 border-b">
                            <h3 className="text-2xl font-semibold">{currentVideo.title}</h3>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700 text-3xl"
                            >
                                ×
                            </button>
                        </div>
                        <div className="p-6">
                            <video
                                className="w-full aspect-video rounded-lg bg-black"
                                controls
                                autoPlay
                                src={currentVideo.videoUrl}
                            >
                                Ваш браузер не поддерживает элемент video.
                            </video>
                            <p className="mt-4 text-gray-700 text-lg">{currentVideo.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}