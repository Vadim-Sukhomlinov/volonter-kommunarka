'use client';

import { useState } from 'react';

// 1. Создаем интерфейс для объекта видео
interface Video {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
}

const sportsVideos: Video[] = [
    {
        id: 1,
        title: "Тренировка по боксу для начинающих",
        description: "Основы стойки, передвижений и прямых ударов.",
        videoUrl: "/video/sports/fight.mp4"
    },
    {
        id: 2,
        title: "Спаринги",
        description: "Отработка в парах",
        videoUrl: "/video/sports/fight2.mp4"
    },
    {
        id: 3,
        title: "Спаринги - 2",
        description: "Отработка в парах- 2",
        videoUrl: "/video/sports/fight3.mp4"
    },
    {
        id: 4,
        title: "Пробежка",
        description: "Бег по пересеченной местности",
        videoUrl: "/video/sports/run.mp4"
    }
];

export default function SportsPage() {
    // 2. Указываем, что состояние может быть объектом Video или null
    const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 3. Типизируем параметр функции
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
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-2">Спорт</h1>
                    <p className="text-lg text-gray-600 text-center mb-12">Бокс, бег и другие спортивные активности</p>

                    {/* Сетка видео - 2 в строку */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {sportsVideos.map((video) => (
                            <div
                                key={video.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                                onClick={() => openModal(video)}
                            >
                                {/* Миниатюра видео */}
                                <div className="relative aspect-video bg-gray-900">
                                    <video
                                        className="w-full h-full object-cover"
                                        src={video.videoUrl}
                                        muted
                                    />
                                    {/* Иконка воспроизведения поверх видео */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                {/* Описание видео */}
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
                                    <p className="text-gray-600">{video.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Модальное окно для просмотра видео */}
            {isModalOpen && currentVideo && (
                <div
                    className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-lg max-w-6xl w-full max-h-[100vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Заголовок модального окна */}
                        <div className="flex justify-between items-center p-4 border-b">
                            <h3 className="text-xl font-semibold">{currentVideo.title}</h3>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700 text-2xl"
                            >
                                ×
                            </button>
                        </div>

                        {/* Видеоплеер в модальном окне */}
                        <div className="p-4">
                            <video
                                className="w-full aspect-video rounded bg-black"
                                controls
                                autoPlay
                                src={currentVideo.videoUrl}
                            >
                                Ваш браузер не поддерживает элемент <code>video</code>.
                            </video>
                            <p className="mt-4 text-gray-700">{currentVideo.description}</p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}