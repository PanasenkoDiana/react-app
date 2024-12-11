import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PostList } from './PostList/PostList';
import { PostPage } from './PostPage/PostPage';
import { Main } from './Main/Main';

export function App() {
    const posts = [
        { 
            id: 1, 
            title: 'Маркетинг для начинающих', 
            description: 'Как начать свой бизнес и не потерять деньги. Маркетинг — это не просто реклама, это целая система, включающая в себя стратегию, целеориентированные действия, работу с целевой аудиторией и многое другое. Чтобы успешно вести маркетинговую деятельность, необходимо разобраться в основах и практических аспектах маркетинга, таких как анализ рынка, изучение потребностей клиентов и создание эффективных рекламных кампаний. В этой статье мы рассмотрим ключевые принципы маркетинга для начинающих и поделимся рекомендациями по разработке маркетинговой стратегии для вашего бизнеса.',
            category: 'Маркетинг', 
            author: 'Иван Иванов', 
            date: '10.12.2024',
        },
        { 
            id: 2, 
            title: 'Основы программирования на JavaScript', 
            description: 'Изучаем основы JS с примерами. JavaScript — это один из самых популярных языков программирования для разработки веб-приложений. В этой статье мы познакомим вас с базовыми концепциями JavaScript, такими как переменные, функции, циклы, условия и массивы. Пошагово разберем, как написать простую программу и продемонстрируем, как использовать основные функции и методы для обработки данных. Мы также коснемся того, как работает браузер и как можно взаимодействовать с веб-страницами, используя JavaScript.',
            category: 'Программирование', 
            author: 'Петр Петров', 
            date: '05.12.2024',
        },
        { 
            id: 3, 
            title: 'Котики в интернете', 
            description: 'Почему котики самые популярные в интернете. Котики — это настоящие звезды интернета. Почему же так много людей увлекаются видеороликами, изображениями и мемами с участием котиков? Исследования показывают, что это связано с их миловидностью, независимым характером и иногда неожиданными поступками, которые вызывают у зрителей улыбку. К тому же, котики часто становятся участниками вирусных мемов, что лишь увеличивает их популярность среди пользователей сети. В этой статье мы погрузимся в историю котиков в интернете и объясним, почему они стали культовыми персонажами онлайн-культуры.',
            category: 'Котики', 
            author: 'Мария Мариева', 
            date: '02.12.2024',
        },
        { 
            id: 4, 
            title: 'Фильмы 2024 года', 
            description: 'Что посмотреть в этом году. 2024 год принес много интересных и ожидаемых фильмов, которые обязательно стоит посмотреть. В этом списке собраны самые громкие премьеры года, от эпических фантастических саг до драм, основанных на реальных событиях. Мы расскажем о самых ожидаемых картинах, а также поделимся множеством рекомендаций для поклонников разных жанров, от экшн-фильмов до арт-хаусных произведений. Приготовьтесь к незабываемому кинематографическому опыту в этом году!',
            category: 'Фильмы', 
            author: 'Дмитрий Дмитриев', 
            date: '15.11.2024',
        },
        { 
            id: 5, 
            title: 'Рынок криптовалют в 2024 году', 
            description: 'Что ожидать от криптовалют в следующем году. Криптовалюты продолжают набирать популярность, но с каждым годом рынок становится все более волатильным и непредсказуемым. В этой статье мы рассмотрим, как изменятся цены на криптовалюты в 2024 году, какие технологии могут повлиять на рынок, и какие риски стоит учитывать при инвестициях. Мы также обсудим регулирование криптовалют и его влияние на будущее отрасли.',
            category: 'Маркетинг', 
            author: 'Алексей Алексей', 
            date: '12.11.2024',
        },
        { 
            id: 6, 
            title: 'Введение в машинное обучение', 
            description: 'Что такое машинное обучение и как его применять в реальной жизни. Машинное обучение — это подмножество искусственного интеллекта, которое позволяет системам улучшать свою работу на основе опыта. В этой статье мы разберемся, что такое машинное обучение, как оно работает и в каких областях оно применяется. Мы рассмотрим такие важные аспекты, как обучающие выборки, алгоритмы и модели, а также поделимся примерами реальных приложений машинного обучения.',
            category: 'Программирование', 
            author: 'Марина Марина', 
            date: '10.11.2024',
        },
        { 
            id: 7, 
            title: 'Как сделать лучший контент для соцсетей', 
            description: 'Советы по созданию привлекательных постов для социальных сетей. Социальные сети стали мощным инструментом для продвижения бизнеса, и успешное создание контента является ключевым элементом этого процесса. В этой статье мы расскажем, как разработать контент, который будет привлекать внимание, вызывать вовлеченность и поддерживать интерес к вашему бренду. Мы поделимся методами по созданию визуально привлекательных и информативных публикаций, которые помогут вам выделиться в потоке информации.',
            category: 'Маркетинг', 
            author: 'Сергей Сергеев', 
            date: '08.11.2024',
        },
        { 
            id: 8, 
            title: 'Фильмы для всей семьи', 
            description: '10 фильмов, которые стоит посмотреть всей семьей. В этой статье мы представим 10 фильмов, которые идеально подойдут для просмотра в кругу семьи. От классики кинематографа до современных произведений — каждый из этих фильмов способен принести радость зрителям любого возраста. Мы расскажем, почему эти фильмы являются отличным выбором для семейного вечера, и почему они получили признание зрителей и критиков.',
            category: 'Фильмы', 
            author: 'Ирина Ирина', 
            date: '03.11.2024',
        },
        { 
            id: 9, 
            title: 'Советы по фотографированию домашних животных', 
            description: 'Как сделать отличные фотографии ваших питомцев. Фотографирование домашних животных может быть настоящим искусством. Каждый питомец уникален, и чтобы запечатлеть его особенности и характер, нужно учитывать несколько ключевых моментов. В этой статье мы дадим советы по фотографированию кошек, собак и других животных. Мы расскажем, как настроить освещение, какие ракурсы использовать и как работать с питомцами, чтобы получить лучшие кадры.',
            category: 'Котики', 
            author: 'Екатерина Екатерина', 
            date: '20.10.2024',
        },
        { 
            id: 10, 
            title: 'Лучшие фильмы о науке', 
            description: 'Рейтинг научных фильмов, которые стоит посмотреть. Научные фильмы могут быть не только образовательными, но и весьма увлекательными. В этой статье мы составили список лучших фильмов, которые раскрывают захватывающие научные идеи, теории и эксперименты. Мы рассмотрим как документальные картины, так и научную фантастику, и объясним, что делает эти фильмы интересными и познавательными для зрителей.',
            category: 'Фильмы', 
            author: 'Алексей Сидоров', 
            date: '17.10.2024',
        },
        { 
            id: 11, 
            title: 'Тренды в социальных сетях 2025', 
            description: 'Как изменятся социальные сети в следующем году. Социальные сети продолжают развиваться с каждым годом, и 2025 год обещает быть годом значительных изменений. В статье мы обсудим, какие тренды ожидаются в социальной сети в следующем году, как будут развиваться платформы и какие новые возможности открываются для пользователей и бизнесов. Мы рассмотрим новшества в сфере алгоритмов, контента и взаимодействия с пользователями.',
            category: 'Маркетинг', 
            author: 'Алексей Иванов', 
            date: '01.10.2024',
        },
        { 
            id: 12, 
            title: 'Как создавать успешные онлайн-курсы', 
            description: 'Советы по созданию и продвижению онлайн-курсов. Онлайн-обучение стало одним из самых популярных способов получения знаний. В этой статье мы поделимся рекомендациями по созданию успешных онлайн-курсов, включая выбор темы, подготовку материалов, маркетинг и взаимодействие с учениками. Мы также расскажем о различных платформах для размещения курсов и о том, как привлекать студентов.',
            category: 'Образование', 
            author: 'Елена Васильева', 
            date: '12.09.2024',
        },
        { 
            id: 13, 
            title: 'Технологии будущего', 
            description: 'Как изменится мир с развитием технологий. Будущее уже наступает, и мы сталкиваемся с новыми технологическими достижениями, которые могут кардинально изменить нашу жизнь. В этой статье мы обсудим самые перспективные технологии будущего, такие как искусственный интеллект, квантовые вычисления, нейронауки и многое другое. Мы посмотрим, как эти технологии могут повлиять на образование, работу и повседневную жизнь.',
            category: 'Технологии', 
            author: 'Олег Петров', 
            date: '23.08.2024',
        },
        { 
            id: 14, 
            title: 'Как развивать личный бренд', 
            description: 'Советы по созданию и развитию личного бренда. Личный бренд стал неотъемлемой частью успеха в профессиональной жизни. В статье мы поделимся стратегиями и тактиками для создания сильного личного бренда, который поможет вам выделиться на рынке и привлечь внимание к вашим навыкам и достижениям. Мы обсудим, как строить репутацию, делиться ценным контентом и выстраивать связи с аудиторией.',
            category: 'Маркетинг', 
            author: 'Наталья Смирнова', 
            date: '15.08.2024',
        },
        { 
            id: 15, 
            title: 'Как построить успешную карьеру в IT', 
            description: 'Советы для карьерного роста в IT-индустрии. В этой статье мы рассмотрим, какие шаги нужно предпринять для того, чтобы начать и успешно развиваться в карьере в области информационных технологий. Мы поделимся стратегиями для поиска первой работы, повышения квалификации, создания профессионального портфолио и эффективного взаимодействия с коллегами и работодателями.',
            category: 'Программирование', 
            author: 'Игорь Николаев', 
            date: '01.08.2024',
        }
    ];

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="posts" element={<PostList posts={posts} />} />
                    <Route path="post/:id" element={<PostPage posts={posts} />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}