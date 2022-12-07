const articleSettingsBody = $('#article-settings__body');
const article = $('.article');
let pageFontEmSize = 1;
const PAGE_FONT_SIZE_MIN = 0.5;
const PAGE_FONT_SIZE_MAX = 1.7;


// OPEN MENU

$('.article-settings__button').on('click', (e) => {
    e.preventDefault();
    articleSettingsBody.toggle();
})


// RANGE THEME

$('#article-settings-light-input').on('input', (e) => {
    const value = e.target.value;
    document.body.className = 'style-' + value
})


// SELECT FONT_FAMILY

$('.article-settings-font__item').on('click', (e) => {
    const font = e.target.dataset.type;

    article.removeClass('times')
    article.removeClass('playfair')
    article.removeClass('pt-sans')
    article.removeClass('arial')
    article.addClass(font)
})

// CHANGE FONT_SIZE
$('#article-settings-minus-font').on('click', () => {
    if (pageFontEmSize.toFixed(1) == PAGE_FONT_SIZE_MIN) return;
    pageFontEmSize -= 0.1;
    document.querySelector('html').style.fontSize = pageFontEmSize + 'em'
})

$('#article-settings-plus-font').on('click', () => {
    console.log(pageFontEmSize.toFixed(1), PAGE_FONT_SIZE_MAX, pageFontEmSize == PAGE_FONT_SIZE_MAX)
    if (pageFontEmSize.toFixed(1) == PAGE_FONT_SIZE_MAX) return;
    pageFontEmSize += 0.1;
    document.querySelector('html').style.fontSize = pageFontEmSize + 'em'
})