// import Footer from "../components/Footer";
// import Header from "../components/Header";

export default function About() {
    const team = [
        {
            name: 'Анна Петрова',
            role: 'Основатель организации',
            description: 'Основала "Волонтеры Коммунарки" в 2018 году. С тех пор активно развивает волонтерское движение в нашем городе.',
            image: '👩‍💼'
        },
        {
            name: 'Иван Сидоров',
            role: 'Координатор мероприятий',
            description: 'Организует спортивные и благотворительные мероприятия. Отвечает за логистику и безопасность.',
            image: '👨‍💻'
        },
        {
            name: 'Мария Козлова',
            role: 'Координатор по сбору помощи',
            description: 'Координирует сбор и распределение гуманитарной помощи. Отвечает за склад и доставку.',
            image: '👩‍🔧'
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

    return (
        <div className="min-h-screen flex flex-col">
            {/* <Header /> */}

            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            О нашей организации
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            "Волонтеры Коммунарки" - это сообщество людей, объединенных желанием помогать другим.
                            Мы верим, что даже маленькое доброе дело может изменить чью-то жизнь к лучшему.
                        </p>
                    </div>
                </section>

                {/* Наша история */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            Наша история
                        </h2>
                        <div className="prose prose-lg text-gray-600 mx-auto">
                            <p className="text-lg mb-6">
                                Организация "Волонтеры Коммунарки" была основана в 2018 году группой друзей,
                                которые решили объединить свои усилия для помощи нуждающимся.
                            </p>
                            <p className="text-lg mb-6">
                                Начиная с небольших акций по сбору вещей, мы выросли в полноценную
                                волонтерскую организацию, которая регулярно проводит мероприятия,
                                собирает гуманитарную помощь и объединяет сотни людей.
                            </p>
                            <p className="text-lg">
                                За годы работы мы помогли тысячам людей, провели десятки мероприятий
                                и создали дружное сообщество волонтеров, готовых прийти на помощь.
                            </p>
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
                                <div key={index} className="card p-6 text-center">
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {team.map((member, index) => (
                                <div key={index} className="card p-6 text-center">
                                    <div className="text-6xl mb-4">{member.image}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-blue-600 font-medium mb-3">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-600">
                                        {member.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* <Footer /> */}
        </div>
    );
}