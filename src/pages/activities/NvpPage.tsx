// import { useState } from 'react';
// import promo from '../../assets/video/nvp/promo.mp4'
// import tactic1 from '../../assets/video/nvp/tactic.mp4'
// import tactic2 from '../../assets/video/nvp/tactic2.mp4'
// import competition from '../../assets/video/nvp/competition.mp4'

// interface Video {
//     id: number;
//     title: string;
//     description: string;
//     videoUrl: string;
// }

// const sportsVideos: Video[] = [
//     {
//         id: 1,
//         title: "Мы",
//         description: "На сборах",
//         videoUrl: `${promo}`
//     },
//     {
//         id: 2,
//         title: "Помощь",
//         description: "Виды доврачебной помощи",
//         videoUrl: `${tactic1}`
//     },
//     {
//         id: 3,
//         title: "Тактика",
//         description: "Движения, пары, позиции",
//         videoUrl: `${tactic2}`
//     },
//     {
//         id: 4,
//         title: "Соревнования",
//         description: "Соревнования по НВП",
//         videoUrl: `${competition}`
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
//                     <h1 className="text-4xl font-bold text-center mb-2">НВП</h1>
//                     <p className="text-lg text-gray-600 text-center mb-12">Мероприятия</p>

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
import nvp_tactic2 from '../../assets/video/nvp/tactic2.mp4'
import nvp_tactic3 from '../../assets/video/nvp/competition.mp4'
import nvp_tactic4 from '../../assets/video/nvp/promo.mp4'


import nvp_med from '../../assets/video/nvp/med2.mp4'
import nvp_med1 from '../../assets/video/nvp/tactic.mp4'


interface Video {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
    duration?: string;
}

interface VideoCategory {
    id: string;
    title: string;
    description: string;
    icon: string;
    videos: Video[];
}

const nvpCategories: VideoCategory[] = [
    {
        id: 'firearms',
        title: 'Огневая подготовка',
        description: 'Основы безопасного обращения с оружием, стрельба из различных положений',
        icon: '🎯',
        videos: [
            {
                id: 1,
                title: 'Безопасность при обращении с оружием',
                description: 'Основные правила безопасности, хранение и переноска оружия',
                videoUrl: `${nvp_tactic3}`,
            },
            {
                id: 2,
                title: 'Стрельба из положения стоя',
                description: 'Правильная стойка, прицеливание, дыхание при стрельбе',
                videoUrl: `${nvp_tactic2}`,
            },
            {
                id: 3,
                title: 'Стрельба с колена и лежа',
                description: 'Стабильные положения для точной стрельбы на дальние дистанции',
                videoUrl: `${nvp_tactic2}`,
            },
            {
                id: 4,
                title: 'Разборка-сборка АК-74',
                description: 'Порядок неполной разборки и сборки автомата Калашникова',
                videoUrl: `${nvp_tactic3}`,
            }
        ]
    },
    {
        id: 'tactics',
        title: 'Тактические маневры',
        description: 'Передвижение на поле боя, взаимодействие в группе, тактика малых подразделений',
        icon: '⚔️',
        videos: [
            {
                id: 5,
                title: 'Передвижение перебежками',
                description: 'Техника быстрого и безопасного перемещения под огнем',
                videoUrl: `${nvp_tactic4}`,
            },
            {
                id: 6,
                title: 'Взаимодействие в паре',
                description: 'Согласованные действия, прикрытие и перемещение в двойке',
                videoUrl: `${nvp_tactic4}`,
            },
            {
                id: 7,
                title: 'Действия в группе 4 человека',
                description: 'Тактика отделения, распределение ролей и зон ответственности',
                videoUrl: `${nvp_tactic4}`,
            },
            {
                id: 8,
                title: 'Штурмовые действия',
                description: 'Захват зданий и помещений, очистка комнат',
                videoUrl: `${nvp_tactic4}`,
            }
        ]
    },
    {
        id: 'first-aid',
        title: 'Доврачебная помощь',
        description: 'Первая медицинская помощь на поле боя, остановка кровотечений, транспортировка',
        icon: '🩹',
        videos: [
            {
                id: 9,
                title: 'Остановка артериального кровотечения',
                description: 'Наложение жгута, пальцевое прижатие, временные решения',
                videoUrl: `${nvp_med}`,
            },
            {
                id: 10,
                title: 'Первая помощь при огнестрельных ранениях',
                description: 'Обработка входных и выходных отверстий, пневмоторакс',
                videoUrl: `${nvp_med1}`,
            },
            {
                id: 11,
                title: 'Транспортировка раненых',
                description: 'Способы переноски пострадавших в различных условиях',
                videoUrl: `${nvp_med1}`,
            },
            {
                id: 12,
                title: 'Медицинская аптечка и ее применение',
                description: 'Состав аптечки, порядок использования перевязочных материалов',
                videoUrl: `${nvp_med}`,
            }
        ]
    }
];

export default function NvpPage() {
    const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    const openModal = (video: Video) => {
        setCurrentVideo(video);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentVideo(null);
    };

    const toggleCategory = (categoryId: string) => {
        setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 py-8">
                <div className="max-w-6xl mx-auto px-4">

                    {/* Заголовок страницы */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Начальная военная подготовка</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Комплексная подготовка по основным военным дисциплинам.
                            Обучение проводят опытные инструкторы с боевым опытом.
                        </p>
                    </div>

                    {/* Сетка категорий */}
                    <div className="space-y-6">
                        {nvpCategories.map((category) => (
                            <div key={category.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">

                                {/* Заголовок категории */}
                                <div
                                    className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 cursor-pointer hover:from-blue-50 hover:to-blue-100 transition-all"
                                    onClick={() => toggleCategory(category.id)}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <span className="text-3xl">{category.icon}</span>
                                            <div>
                                                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                                                <p className="text-gray-600 mt-1">{category.description}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border">
                                                {category.videos.length} видео
                                            </span>
                                            <svg
                                                className={`w-6 h-6 text-gray-500 transition-transform ${expandedCategory === category.id ? 'rotate-180' : ''
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Видео категории (раскрывающийся контент) */}
                                {expandedCategory === category.id && (
                                    <div className="p-6 border-t border-gray-200">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {category.videos.map((video) => (
                                                <div
                                                    key={video.id}
                                                    className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-200"
                                                    onClick={() => openModal(video)}
                                                >
                                                    {/* Миниатюра видео */}
                                                    <div className="relative aspect-video bg-gray-900">
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
                                                        {video.duration && (
                                                            <span className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                                                                {video.duration}
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Описание видео */}
                                                    <div className="p-4">
                                                        <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                                                            {video.title}
                                                        </h3>
                                                        <p className="text-gray-600 text-sm leading-relaxed">
                                                            {video.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Дополнительная информация */}
                    <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold mb-4 text-center">Важная информация</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                <div className="text-2xl mb-2">🕒</div>
                                <h3 className="font-semibold mb-2">Расписание занятий</h3>
                                <p className="text-gray-600 text-sm">Суббота 10:00-14:00</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                <div className="text-2xl mb-2">📍</div>
                                <h3 className="font-semibold mb-2">Место проведения</h3>
                                <p className="text-gray-600 text-sm">Тир "Патриот", ул. Защитников, 15</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                <div className="text-2xl mb-2">📞</div>
                                <h3 className="font-semibold mb-2">Контакты</h3>
                                <p className="text-gray-600 text-sm">+7 (999) 123-45-67</p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            {/* Модальное окно для просмотра видео */}
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
                            {currentVideo.duration && (
                                <p className="mt-2 text-gray-500">Длительность: {currentVideo.duration}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}