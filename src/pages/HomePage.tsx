// import volo1 from '../assets/volonteer1.jpg'
// import volo2 from '../assets/volonteer2.jpg'


// export default function HomeContent() {
//     return (
//         <main className="flex-1">
//             {/* Герой секция */}
//             <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
//                 <div className="max-w-7xl mx-auto px-4 text-center">
//                     <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//                         Волонтеры{' '}
//                         <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
//                             Коммунарки
//                         </span>
//                     </h1>
//                     <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//                         Мы помогаем людям в трудной жизненной ситуации через сбор посылок,
//                         организацию мероприятий и спортивные активности.
//                     </p>
//                 </div>
//             </section>

//             {/* Секция "О нас" с фотографиями */}
//             <section className="py-20 bg-white">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                         {/* Текстовое описание */}
//                         <div>
//                             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                                 О нашей организации
//                             </h2>
//                             <div className="space-y-4 text-lg text-gray-600">
//                                 <p>
//                                     <strong>Волонтеры Коммунарки</strong> — это сообщество людей, объединенных желанием помогать нашим бойцам.
//                                     Наша организация была основана в 2024 году и с тех пор мы активно развиваем волонтерское движение в нашем городе.
//                                 </p>
//                                 <p>
//                                     Мы верим, что даже маленькое действие может изменить или спасти чью-то жизнь.
//                                     Каждую неделю мы собираемся вместе, чтобы сделать наш мир добрее и помочь тем, кто в этом нуждается.
//                                 </p>
//                                 <p>
//                                     Наша миссия — создавать сообщество, где каждый может найти поддержку и проявить заботу о других.
//                                     Мы открыты для всех, кто готов делиться своим временем, теплом и вниманием.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Фотографии */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
//                                 <div
//                                     className="w-full h-full bg-cover bg-center"
//                                     style={{ backgroundImage: `url(${volo1})` }}
//                                 ></div>
//                             </div>
//                             <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
//                                 <div
//                                     className="w-full h-full bg-cover bg-center"
//                                     style={{ backgroundImage: `url(${volo2})` }}
//                                 ></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Секция активностей */}
//             <section className="py-20 bg-gray-50">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <h2 className="text-3xl font-bold text-center mb-12">Чем мы занимаемся</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         <div className="bg-white rounded-xl p-6 text-center shadow-sm">
//                             <div className="text-4xl mb-4">📦</div>
//                             <h3 className="text-xl font-semibold mb-2">Сбор посылок</h3>
//                             <p className="text-gray-600">
//                                 Регулярно собираем продуктовые наборы, одежду и предметы первой необходимости для нуждающихся семей
//                             </p>
//                         </div>
//                         <div className="bg-white rounded-xl p-6 text-center shadow-sm">
//                             <div className="text-4xl mb-4">🏃‍♂️</div>
//                             <h3 className="text-xl font-semibold mb-2">Спортивные мероприятия</h3>
//                             <p className="text-gray-600">
//                                 Проводим совместные тренировки, забеги и спортивные игры для поддержания здоровья
//                             </p>
//                         </div>
//                         <div className="bg-white rounded-xl p-6 text-center shadow-sm">
//                             <div className="text-4xl mb-4">👥</div>
//                             <h3 className="text-xl font-semibold mb-2">Социальные акции</h3>
//                             <p className="text-gray-600">
//                                 Организуем помощь пожилым людям и детям, проводим праздничные мероприятия
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* CTA секция */}
//             <section className="bg-gradient-to-r from-blue-600 to-green-600 py-20">
//                 <div className="max-w-4xl mx-auto px-4 text-center">
//                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                         Готовы помочь?
//                     </h2>
//                     <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//                         Присоединяйтесь к нашей дружной команде волонтеров. Вместе мы сможем сделать этот мир добрее и лучше для всех.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                         <a
//                             href="https://t.me/SukhomlinovVadim"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
//                         >
//                             Присоединиться в Telegram
//                         </a>
//                         <a
//                             href="/contact"
//                             className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-4 px-8 rounded-lg text-lg transition-colors"
//                         >
//                             Связаться с нами
//                         </a>
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// }

// import volo1 from '../assets/volonteer1.jpg'
// import volo2 from '../assets/volonteer2.jpg'
import svo from '../assets/svo.jpg'
import med from '../assets/med.jpg'

export default function HomeContent() {
    return (
        <main className="flex-1">
            {/* Герой секция */}
            <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Волонтеры{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                            Коммунарки
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Помогаем участникам СВО и раненым в госпиталях через сбор посылок,
                        организацию мероприятий и поддержку семей военнослужащих.
                    </p>
                </div>
            </section>

            {/* Секция "О нас" с фотографиями */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Текстовое описание */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                О нашей организации
                            </h2>
                            <div className="space-y-4 text-lg text-gray-600">
                                <p>
                                    <strong>Волонтеры Коммунарки</strong> — это сообщество людей, объединенных желанием помогать нашим бойцам на фронте и раненым в госпиталях.
                                    Наша организация была основана в 2024 году и с тех пор мы активно развиваем волонтерское движение в нашем городе.
                                </p>
                                <p>
                                    Основные направления нашей работы — поддержка участников <strong>СВО</strong> и помощь <strong>госпиталям</strong>.
                                    Мы собираем необходимые вещи, лекарства, средства гигиены и передаем их тем, кто защищает нашу страну.
                                </p>
                                <p>
                                    Мы верим, что даже маленькое действие может поддержать и спасти чью-то жизнь.
                                    Каждая собранная посылка — это важный вклад в общее дело помощи нашим защитникам.
                                </p>
                            </div>
                        </div>

                        {/* Фотографии */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: `url(${svo})` }}
                                ></div>
                            </div>
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: `url(${med})` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Секция активностей */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Основные направления помощи</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                            <div className="text-4xl mb-4">🎖️</div>
                            <h3 className="text-xl font-semibold mb-2">Помощь участникам СВО</h3>
                            <p className="text-gray-600">
                                Собираем и отправляем посылки с необходимым снаряжением, средствами связи, теплыми вещами и продуктами
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                            <div className="text-4xl mb-4">🏥</div>
                            <h3 className="text-xl font-semibold mb-2">Поддержка госпиталей</h3>
                            <p className="text-gray-600">
                                Обеспечиваем медицинские учреждения лекарствами, перевязочными материалами и оборудованием
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                            <div className="text-4xl mb-4">❤️</div>
                            <h3 className="text-xl font-semibold mb-2">Забота о раненых</h3>
                            <p className="text-gray-600">
                                Организуем досуг, психологическую поддержку и помощь в реабилитации бойцов в госпиталях
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Дополнительные активности */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Также мы помогаем</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4">Семьям военнослужащих</h3>
                            <p className="text-gray-600">
                                Поддерживаем семьи участников СВО: помогаем с продуктами, решаем бытовые вопросы,
                                оказываем психологическую поддержку
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4">Волонтерские мероприятия</h3>
                            <p className="text-gray-600">
                                Проводим сборы средств, организуем мастер-классы по сбору посылок,
                                координируем работу добровольцев
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA секция */}
            <section className="bg-gradient-to-r from-blue-600 to-green-600 py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Хотите помочь нашим защитникам?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Присоединяйтесь к нашей команде волонтеров. Любая помощь важна для поддержки участников СВО и раненых в госпиталях.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://t.me/SukhomlinovVadim"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
                        >
                            Присоединиться в Telegram
                        </a>
                        <a
                            href="/contact"
                            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-4 px-8 rounded-lg text-lg transition-colors"
                        >
                            Узнать как помочь
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}