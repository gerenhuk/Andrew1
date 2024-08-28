// Додаємо стилі через JavaScript
const styles = `
.blog__grid {
    display: grid;
    gap: 50px 20px;
    grid-template-columns: repeat(3, 1fr);
    margin: 50px auto;
    width: 1256px;
}

.news__img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 16px;
}

.news__name {
    margin-top: 20px;
    font-size: 24px;
    font-weight: 600;
}

.news__text {
    margin: 14px 0;
}

.autor__block {
    display: flex;
    gap: 20px;
    align-items: center;
}

.autor__img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
}

.block__section__2 {
    display: none;
}

.more__btn {
    padding: 20px 60px;
    border-radius: 12px;
    background: #000;
    color: #fff;
    cursor: pointer;
    width: 300px;
    font-size: 20px;
    margin: 50px auto;
    display: block;
}

.more__btn__container {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
`;

// Створюємо тег <style> і додаємо його до <head>
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// Масив із даними для 18 новин
const newsData = [
    {
        img: 'https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Migrating to Linear 101',
        text: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
        authorImg: 'https://images.unsplash.com/photo-1724086574420-b6fb1b69f0e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorName: 'Jonathan Wills 19 jan 2022'
    },
    {
        img: 'https://images.unsplash.com/photo-1572373677199-4b851c5d9b6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Introduction to Agile Methodology',
        text: 'Understand the core principles of Agile and how it enhances project management.',
        authorImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorName: 'Sarah Connor 10 feb 2022'
    },
    {
        img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Migrating to Linear 101',
        text: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
        authorImg: 'https://images.unsplash.com/photo-1724086574420-b6fb1b69f0e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorName: 'Jonathan Wills 19 jan 2022'
    },
    {
        img: 'https://images.unsplash.com/photo-1572373677199-4b851c5d9b6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Introduction to Agile Methodology',
        text: 'Understand the core principles of Agile and how it enhances project management.',
        authorImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorName: 'Sarah Connor 10 feb 2022'
    },
    {
        img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Migrating to Linear 101',
        text: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
        authorImg: 'https://images.unsplash.com/photo-1724086574420-b6fb1b69f0e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorName: 'Jonathan Wills 19 jan 2022'
    },
    {
        img: 'https://images.unsplash.com/photo-1572373677199-4b851c5d9b6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Introduction to Agile Methodology',
        text: 'Understand the core principles of Agile and how it enhances project management.',
        authorImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorName: 'Sarah Connor 10 feb 2022'
    },
    {
        img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Migrating to Linear 101',
        text: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
        authorImg: 'https://images.unsplash.com/photo-1724086574420-b6fb1b69f0e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorName: 'Jonathan Wills 19 jan 2022'
    },
    {
        img: 'https://images.unsplash.com/photo-1572373677199-4b851c5d9b6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Introduction to Agile Methodology',
        text: 'Understand the core principles of Agile and how it enhances project management.',
        authorImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorName: 'Sarah Connor 10 feb 2022'
    },
    {
        img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Migrating to Linear 101',
        text: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
        authorImg: 'https://images.unsplash.com/photo-1724086574420-b6fb1b69f0e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorName: 'Jonathan Wills 19 jan 2022'
    },
    {
        img: 'https://images.unsplash.com/photo-1572373677199-4b851c5d9b6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Introduction to Agile Methodology',
        text: 'Understand the core principles of Agile and how it enhances project management.',
        authorImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorName: 'Sarah Connor 10 feb 2022'
    },
    {
        img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Migrating to Linear 101',
        text: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
        authorImg: 'https://images.unsplash.com/photo-1724086574420-b6fb1b69f0e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorName: 'Jonathan Wills 19 jan 2022'
    },
    {
        img: 'https://images.unsplash.com/photo-1572373677199-4b851c5d9b6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Introduction to Agile Methodology',
        text: 'Understand the core principles of Agile and how it enhances project management.',
        authorImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorName: 'Sarah Connor 10 feb 2022'
    },
    {
        img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Migrating to Linear 101',
        text: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
        authorImg: 'https://images.unsplash.com/photo-1724086574420-b6fb1b69f0e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorName: 'Jonathan Wills 19 jan 2022'
    },
    {
        img: 'https://images.unsplash.com/photo-1572373677199-4b851c5d9b6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Introduction to Agile Methodology',
        text: 'Understand the core principles of Agile and how it enhances project management.',
        authorImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorName: 'Sarah Connor 10 feb 2022'
    },
    {
        img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Migrating to Linear 101',
        text: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
        authorImg: 'https://images.unsplash.com/photo-1724086574420-b6fb1b69f0e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorName: 'Jonathan Wills 19 jan 2022'
    },
    {
        img: 'https://images.unsplash.com/photo-1572373677199-4b851c5d9b6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Introduction to Agile Methodology',
        text: 'Understand the core principles of Agile and how it enhances project management.',
        authorImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorName: 'Sarah Connor 10 feb 2022'
    },
    {
        img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Migrating to Linear 101',
        text: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
        authorImg: 'https://images.unsplash.com/photo-1724086574420-b6fb1b69f0e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorName: 'Jonathan Wills 19 jan 2022'
    },
    {
        img: 'https://images.unsplash.com/photo-1572373677199-4b851c5d9b6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Introduction to Agile Methodology',
        text: 'Understand the core principles of Agile and how it enhances project management.',
        authorImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorName: 'Sarah Connor 10 feb 2022'
    },
];

// Функція для створення одного елементу новини
function createNewsItem(news) {
    const article = document.createElement('article');
    article.className = 'news';

    const newsImg = document.createElement('img');
    newsImg.src = news.img;
    newsImg.alt = '';
    newsImg.className = 'news__img';

    article.appendChild(newsImg);

    const newsTextBlock = document.createElement('div');
    newsTextBlock.className = 'news__text__block';

    const newsName = document.createElement('p');
    newsName.className = 'news__name';
    newsName.textContent = news.name;

    const newsText = document.createElement('p');
    newsText.className = 'news__text';
    newsText.textContent = news.text;

    newsTextBlock.appendChild(newsName);
    newsTextBlock.appendChild(newsText);

    const autorBlock = document.createElement('div');
    autorBlock.className = 'autor__block';

    const autorImg = document.createElement('img');
    autorImg.src = news.authorImg;
    autorImg.alt = '';
    autorImg.className = 'autor__img';

    const autorName = document.createElement('p');
    autorName.className = 'autor__name';
    autorName.textContent = news.authorName;

    autorBlock.appendChild(autorImg);
    autorBlock.appendChild(autorName);

    newsTextBlock.appendChild(autorBlock);
    article.appendChild(newsTextBlock);

    return article;
}

// Контейнер для новин
const newsContainer = document.createElement('div');
newsContainer.className = 'blog__grid';

// Створюємо та додаємо перші 9 новин
let visibleNewsCount = 9;
newsData.slice(0, visibleNewsCount).forEach(news => {
    const newsItem = createNewsItem(news);
    newsContainer.appendChild(newsItem);
});

// Додаємо контейнер з новинами до body або іншого контейнера на сторінці
document.body.appendChild(newsContainer);

// Додаємо контейнер для кнопки
const moreBtnContainer = document.createElement('div');
moreBtnContainer.className = 'more__btn__container';

// Додаємо кнопку "Показати більше"
const moreBtn = document.createElement('button');
moreBtn.className = 'more__btn';
moreBtn.textContent = 'Show More News';
moreBtnContainer.appendChild(moreBtn);

// Додаємо контейнер з кнопкою до body або іншого контейнера на сторінці
document.body.appendChild(moreBtnContainer);

// Обробник кліку на кнопку "Показати більше"
moreBtn.addEventListener('click', () => {
    // Додаємо решту 9 новин
    newsData.slice(visibleNewsCount, visibleNewsCount + 9).forEach(news => {
        const newsItem = createNewsItem(news);
        newsContainer.appendChild(newsItem);
    });

    // Після показу всіх новин, ховаємо кнопку
    visibleNewsCount += 9;
    if (visibleNewsCount >= newsData.length) {
        moreBtn.style.display = 'none';
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const footerContainer = document.getElementById('footer-container');

    const footer = document.createElement('footer');
    footer.style.backgroundColor = 'red';
    footer.style.padding = '20px';
    footer.style.textAlign = 'center';
    footer.style.fontFamily = 'Arial, sans-serif';

    const logo = document.createElement('h2');
    logo.textContent = 'Untitled UI';
    footer.appendChild(logo);

    const nav = document.createElement('nav');
    const links = ['Overview', 'Features', 'Pricing', 'Careers', 'Help', 'Privacy'];
    links.forEach(linkText => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = linkText;
        link.style.color = 'black';
        link.style.textDecoration = 'none';
        link.style.margin = '0 10px';
        link.style.fontSize = '16px';
        link.addEventListener('mouseover', () => link.style.textDecoration = 'underline');
        link.addEventListener('mouseout', () => link.style.textDecoration = 'none');
        nav.appendChild(link);
    });
    footer.appendChild(nav);

    const emailDiv = document.createElement('div');
    emailDiv.style.marginTop = '20px';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Enter your email';
    emailInput.style.padding = '10px';
    emailInput.style.width = '200px';
    emailInput.style.border = '1px solid #ccc';
    emailInput.style.borderRadius = '4px';
    emailDiv.appendChild(emailInput);

    const subscribeButton = document.createElement('button');
    subscribeButton.textContent = 'Subscribe';
    subscribeButton.style.padding = '10px';
    subscribeButton.style.backgroundColor = 'purple';
    subscribeButton.style.color = 'white';
    subscribeButton.style.border = 'none';
    subscribeButton.style.borderRadius = '4px';
    subscribeButton.style.cursor = 'pointer';
    subscribeButton.addEventListener('mouseover', () => subscribeButton.style.backgroundColor = 'darkviolet');
    subscribeButton.addEventListener('mouseout', () => subscribeButton.style.backgroundColor = 'purple');
    emailDiv.appendChild(subscribeButton);

    footer.appendChild(emailDiv);

    const copyright = document.createElement('div');
    copyright.style.marginTop = '20px';
    const copyrightText = document.createElement('p');
    copyrightText.textContent = '© 2017 Untitled UI. All rights reserved.';
    copyrightText.style.margin = '0';
    copyrightText.style.fontSize = '14px';
    copyrightText.style.color = '#777';
    copyright.appendChild(copyrightText);

    footer.appendChild(copyright);

    footerContainer.appendChild(footer);
});
