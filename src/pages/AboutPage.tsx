
// export default function About() {
//     const team = [
//         {
//             name: 'Анна Петрова',
//             role: 'Основатель организации',
//             description: 'Основала "Волонтеры Коммунарки" в 2018 году. С тех пор активно развивает волонтерское движение в нашем городе.',
//             image: '👩‍💼'
//         },
//         {
//             name: 'Иван Сидоров',
//             role: 'Координатор мероприятий',
//             description: 'Организует спортивные и благотворительные мероприятия. Отвечает за логистику и безопасность.',
//             image: '👨‍💻'
//         },
//         {
//             name: 'Мария Козлова',
//             role: 'Координатор по сбору помощи',
//             description: 'Координирует сбор и распределение гуманитарной помощи. Отвечает за склад и доставку.',
//             image: '👩‍🔧'
//         }
//     ];

//     const values = [
//         {
//             icon: '🤝',
//             title: 'Взаимопомощь',
//             description: 'Мы верим, что вместе мы можем достичь большего. Поддерживаем друг друга в добрых делах.'
//         },
//         {
//             icon: '❤️',
//             title: 'Сострадание',
//             description: 'Сердце нашей работы - искреннее желание помочь тем, кто оказался в трудной ситуации.'
//         },
//         {
//             icon: '🌱',
//             title: 'Развитие',
//             description: 'Мы постоянно растем и развиваемся, находим новые способы помощи и привлекаем больше людей.'
//         },
//         {
//             icon: '🔒',
//             title: 'Прозрачность',
//             description: 'Все собранные средства и помощь распределяются открыто. Мы отчитываемся за каждую копейку.'
//         }
//     ];

//     return (
//         <div className="min-h-screen flex flex-col">
//             {/* <Header /> */}

//             <main className="flex-1">
//                 {/* Hero Section */}
//                 <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
//                     <div className="max-w-4xl mx-auto text-center px-4">
//                         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                             О нашей организации
//                         </h1>
//                         <p className="text-xl text-gray-600 leading-relaxed">
//                             "Волонтеры Коммунарки" - это сообщество людей, объединенных желанием помогать другим.
//                             Мы верим, что даже маленькое доброе дело может изменить чью-то жизнь к лучшему.
//                         </p>
//                     </div>
//                 </section>

//                 {/* Наша история */}
//                 <section className="py-20 bg-white">
//                     <div className="max-w-4xl mx-auto px-4">
//                         <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//                             Наша история
//                         </h2>
//                         <div className="prose prose-lg text-gray-600 mx-auto">
//                             <p className="text-lg mb-6">
//                                 Организация "Волонтеры Коммунарки" была основана в 2018 году группой друзей,
//                                 которые решили объединить свои усилия для помощи нуждающимся.
//                             </p>
//                             <p className="text-lg mb-6">
//                                 Начиная с небольших акций по сбору вещей, мы выросли в полноценную
//                                 волонтерскую организацию, которая регулярно проводит мероприятия,
//                                 собирает гуманитарную помощь и объединяет сотни людей.
//                             </p>
//                             <p className="text-lg">
//                                 За годы работы мы помогли тысячам людей, провели десятки мероприятий
//                                 и создали дружное сообщество волонтеров, готовых прийти на помощь.
//                             </p>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Наши ценности */}
//                 <section className="py-20 bg-gray-50">
//                     <div className="max-w-6xl mx-auto px-4">
//                         <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
//                             Наши ценности
//                         </h2>
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                             {values.map((value, index) => (
//                                 <div key={index} className="card p-6 text-center">
//                                     <div className="text-4xl mb-4">{value.icon}</div>
//                                     <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                                         {value.title}
//                                     </h3>
//                                     <p className="text-gray-600">
//                                         {value.description}
//                                     </p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Команда */}
//                 <section className="py-20 bg-white">
//                     <div className="max-w-6xl mx-auto px-4">
//                         <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
//                             Наша команда
//                         </h2>
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                             {team.map((member, index) => (
//                                 <div key={index} className="card p-6 text-center">
//                                     <div className="text-6xl mb-4">{member.image}</div>
//                                     <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                                         {member.name}
//                                     </h3>
//                                     <p className="text-blue-600 font-medium mb-3">
//                                         {member.role}
//                                     </p>
//                                     <p className="text-gray-600">
//                                         {member.description}
//                                     </p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//             </main>

//             {/* <Footer /> */}
//         </div>
//     );
// }

'use client';
import { useState } from 'react';
import nine_may from '../assets/video/about/9_may.mp4'
import all_sports from '../assets/video/about/all_sports.mp4'
import auto from '../assets/video/about/auto.mp4'
import vizit from '../assets/video/about/vizit_hram.mp4'

interface MediaItem {
    id: number;
    type: 'video' | 'photo';
    title: string;
    description: string;
    url: string;
    date: string;
    category: string;
}

export default function About() {
    const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const team = [
        {
            name: 'Анна Петрова',
            role: 'Основатель организации',
            description: 'Основала "Волонтеры Коммунарки" в 2018 году. С тех пор активно развивает волонтерское движение в нашем городе.',
            image: '👩‍💼',
            experience: '6 лет в волонтерстве'
        },
        {
            name: 'Иван Сидоров',
            role: 'Координатор мероприятий',
            description: 'Организует спортивные и благотворительные мероприятия. Отвечает за логистику и безопасность.',
            image: '👨‍💻',
            experience: '4 года в организации мероприятий'
        },
        {
            name: 'Мария Козлова',
            role: 'Координатор по сбору помощи',
            description: 'Координирует сбор и распределение гуманитарной помощи. Отвечает за склад и доставку.',
            image: '👩‍🔧',
            experience: '5 лет в социальной работе'
        },
        {
            name: 'Алексей Новиков',
            role: 'Инструктор НВП',
            description: 'Проводит занятия по начальной военной подготовке. Имеет боевой опыт.',
            image: '🎖️',
            experience: '8 лет военной службы'
        },
        {
            name: 'Ольга Васнецова',
            role: 'Спортивный инструктор',
            description: 'Ведущий тренер по боксу и ОФП. Кандидат в мастера спорта по боксу.',
            image: '🥊',
            experience: '10 лет тренерской работы'
        },
        {
            name: 'Дмитрий Орлов',
            role: 'Волонтер-медик',
            description: 'Оказывает первую медицинскую помощь, проводит обучающие семинары.',
            image: '🩺',
            experience: '7 лет медицинской практики'
        }
    ];

    const values = [
        {
            icon: '🤝',
            title: 'Взаимопомощь',
            description: 'Мы верим, что вместе мы можем достичь большего. Поддерживаем друг друга в добрых делах.'
        },
        {
            icon: '❤️',
            title: 'Сострадание',
            description: 'Сердце нашей работы - искреннее желание помочь тем, кто оказался в трудной ситуации.'
        },
        {
            icon: '🌱',
            title: 'Развитие',
            description: 'Мы постоянно растем и развиваемся, находим новые способы помощи и привлекаем больше людей.'
        },
        {
            icon: '🔒',
            title: 'Прозрачность',
            description: 'Все собранные средства и помощь распределяются открыто. Мы отчитываемся за каждую копейку.'
        }
    ];

    const milestones = [
        { year: '2018', event: 'Основание организации. Первая акция по сбору вещей' },
        { year: '2019', event: 'Открытие спортивной секции. Проведение первых соревнований' },
        { year: '2020', event: 'Организация регулярных поставок помощи нуждающимся семьям' },
        { year: '2021', event: 'Запуск программы НВП. Привлечение профессиональных инструкторов' },
        { year: '2022', event: 'Расширение до 100+ постоянных волонтеров' },
        { year: '2023', event: 'Проведение масштабного благотворительного фестиваля' },
        { year: '2024', event: 'Открытие собственного тренировочного центра' }
    ];

    const mediaGallery: MediaItem[] = [
        {
            id: 1,
            type: 'video',
            title: 'Возложение цветов',
            description: 'Возложение цветов на Мемориале Великой Отечественной войны',
            url: `${nine_may}`,
            date: 'Март 2018',
            category: 'Встречи'
        },
        {
            id: 2,
            type: 'photo',
            title: 'Сбор гуманитарной помощи',
            description: 'Акция по сбору вещей для многодетных семей',
            url: '/img/about/help-collection.jpg',
            date: 'Июнь 2019',
            category: 'Акции'
        },
        {
            id: 3,
            type: 'video',
            title: 'Автопробег',
            description: 'Ежегодный Автопробег в поддержку ...',
            url: `${auto}`,
            date: 'Сентябрь 2020',
            category: 'Спорт'
        },
        {
            id: 4,
            type: 'photo',
            title: 'Занятия по НВП',
            description: 'Практические занятия по тактической медицине',
            url: '/img/about/nvp-training.jpg',
            date: 'Апрель 2021',
            category: 'НВП'
        },
        {
            id: 5,
            type: 'video',
            title: 'Храм ВС РФ',
            description: 'Посещение Храма ВС РФ',
            url: `${vizit}`,
            date: 'Май 2022',
            category: 'Спорт'
        },
        {
            id: 6,
            type: 'photo',
            title: 'Вручение подарков',
            description: 'Новогодняя акция для детей из малообеспеченных семей',
            url: '/img/about/gifts-delivery.jpg',
            date: 'Декабрь 2023',
            category: 'Акции'
        },
        {
            id: 7,
            type: 'video',
            title: 'Тренировка',
            description: 'Регулярные занятия с профессиональным тренером',
            url: `${all_sports}`,
            date: 'Февраль 2024',
            category: 'Спорт'
        },
        {
            id: 8,
            type: 'photo',
            title: 'Совещание команды',
            description: 'Планирование новых проектов и мероприятий',
            url: '/img/about/team-meeting.jpg',
            date: 'Январь 2024',
            category: 'Встречи'
        }
    ];

    const openMediaModal = (media: MediaItem) => {
        setSelectedMedia(media);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMedia(null);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            О нашей организации
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            "Волонтеры Коммунарки" - это большая семья единомышленников, объединенных желанием
                            делать мир лучше. От маленькой инициативной группы до крупного сообщества - вот наш путь.
                        </p>
                    </div>
                </section>

                {/* Подробная история */}
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                            Как все начиналось
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">С чего все началось</h3>
                                <div className="space-y-4 text-gray-600 text-lg">
                                    <p>
                                        В 2018 году группа друзей во главе с Анной Петровой решила, что пора
                                        перестать ждать изменений и начать действовать. Первой акцией стал
                                        сбор теплых вещей для бездомных перед наступлением зимы.
                                    </p>
                                    <p>
                                        Мы не ожидали такого отклика - за неделю собрали более 200 кг одежды!
                                        Это показало, что в нашем городе много людей, готовых помогать,
                                        но не знающих, с чего начать.
                                    </p>
                                    <p>
                                        Так родилась идея "Волонтеров Коммунарки" - создать платформу,
                                        где каждый может найти возможность для добрых дел.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-100 rounded-2xl p-8">
                                <h4 className="text-xl font-bold mb-6 text-center">Наши достижения</h4>
                                <div className="space-y-4">
                                    {milestones.map((milestone, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                                                {milestone.year}
                                            </div>
                                            <p className="text-gray-700 pt-1">{milestone.event}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Наша философия</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 text-lg">
                                <div>
                                    <p className="mb-4">
                                        Мы убеждены, что настоящие изменения начинаются с малого.
                                        Каждая улыбка ребенка, получившего подарок, каждая благодарность
                                        пожилого человека - это кирпичики в фундаменте лучшего общества.
                                    </p>
                                    <p>
                                        Наш подход - не просто разовая помощь, а создание устойчивых
                                        программ поддержки и развитие сообщества.
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-4">
                                        Спорт и военная подготовка - неотъемлемая часть нашей работы.
                                        Они учат дисциплине, взаимовыручке и готовности прийти на помощь
                                        в любой ситуации.
                                    </p>
                                    <p>
                                        Мы растим не просто волонтеров, а сильных, уверенных в себе
                                        людей, способных изменить мир вокруг себя.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Наши ценности */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                            Наши ценности
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                    <div className="text-4xl mb-4">{value.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Команда */}
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                            Наша команда
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {team.map((member, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                    <div className="text-6xl mb-4">{member.image}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-blue-600 font-medium mb-2">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-500 text-sm mb-3">
                                        {member.experience}
                                    </p>
                                    <p className="text-gray-600">
                                        {member.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Медиа-галерея */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                            Наша жизнь в фото и видео
                        </h2>

                        {/* Фильтры по категориям */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {['Все', 'Встречи', 'Акции', 'Спорт', 'НВП'].map(category => (
                                <button
                                    key={category}
                                    className="px-6 py-2 rounded-full bg-white border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors"
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Сетка медиа */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {mediaGallery.map((media) => (
                                <div
                                    key={media.id}
                                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                                    onClick={() => openMediaModal(media)}
                                >
                                    {media.type === 'video' ? (
                                        <div className="relative aspect-video bg-gray-900">
                                            <video
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                src={media.url}
                                                muted
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                                                <div className="w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-xs">
                                                ВИДЕО
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative aspect-video bg-gray-200">
                                            <div
                                                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                                                style={{ backgroundImage: `url(${media.url})` }}
                                            />
                                            <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                                                ФОТО
                                            </div>
                                        </div>
                                    )}

                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                {media.title}
                                            </h3>
                                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                                {media.category}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-2">{media.description}</p>
                                        <p className="text-xs text-gray-400">{media.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Модальное окно для медиа */}
            {isModalOpen && selectedMedia && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center p-6 border-b">
                            <div>
                                <h3 className="text-2xl font-semibold">{selectedMedia.title}</h3>
                                <p className="text-gray-600 mt-1">{selectedMedia.description}</p>
                            </div>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700 text-3xl"
                            >
                                ×
                            </button>
                        </div>

                        <div className="p-6">
                            {selectedMedia.type === 'video' ? (
                                <video
                                    className="w-full aspect-video rounded-lg bg-black"
                                    controls
                                    autoPlay
                                    src={selectedMedia.url}
                                >
                                    Ваш браузер не поддерживает элемент video.
                                </video>
                            ) : (
                                <img
                                    src={selectedMedia.url}
                                    alt={selectedMedia.title}
                                    className="w-full h-auto rounded-lg"
                                />
                            )}
                            <div className="mt-4 flex justify-between items-center text-gray-500">
                                <span>{selectedMedia.date}</span>
                                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                                    {selectedMedia.category}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}