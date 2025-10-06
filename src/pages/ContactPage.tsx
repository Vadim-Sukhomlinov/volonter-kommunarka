'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        type: 'volunteer'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Здесь будет логика отправки формы
        console.log('Форма отправлена:', formData);
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        setFormData({ name: '', email: '', phone: '', message: '', type: 'volunteer' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            value: 'help@volonter.ru',
            description: 'Пишите нам по любым вопросам'
        },
        {
            icon: '📞',
            title: 'Телефон',
            value: '+7 (999) 123-45-67',
            description: 'Ежедневно с 9:00 до 21:00'
        },
        {
            icon: '📍',
            title: 'Адрес',
            value: 'г. Москва, ул. Добрых дел, 1',
            description: 'Приходите к нам в гости'
        },
        {
            icon: '🕒',
            title: 'Время работы',
            value: 'Пн-Пт: 9:00-21:00',
            description: 'Суббота: 10:00-18:00'
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">

            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Свяжитесь с нами
                        </h1>
                        <p className="text-xl text-gray-600">
                            Есть вопросы или хотите присоединиться к нашей команде?
                            Мы всегда рады новым волонтерам и партнерам!
                        </p>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto py-20 px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Контактная информация */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Наши контакты
                            </h2>
                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="text-2xl">{item.icon}</div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 text-lg">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-900 font-medium">{item.value}</p>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Социальные сети */}
                            <div className="mt-8">
                                <h3 className="font-semibold text-gray-900 text-lg mb-4">
                                    Мы в социальных сетях
                                </h3>
                                <div className="flex space-x-4">
                                    {['ВКонтакте', 'Телеграм', 'Инстаграм', 'YouTube'].map((social) => (
                                        <button
                                            key={social}
                                            className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
                                        >
                                            {social}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Форма обратной связи */}
                        <div className="card p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Напишите нам
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                                        Цель обращения
                                    </label>
                                    <select
                                        id="type"
                                        name="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="volunteer">Стать волонтером</option>
                                        <option value="help">Нужна помощь</option>
                                        <option value="partnership">Партнерство</option>
                                        <option value="other">Другое</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Ваше имя *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Иван Иванов"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="ivan@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Телефон
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="+7 (999) 123-45-67"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Сообщение *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Расскажите, чем мы можем вам помочь..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full btn-primary"
                                >
                                    Отправить сообщение
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}