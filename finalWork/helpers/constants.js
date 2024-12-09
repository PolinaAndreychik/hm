const URL = {
  MAIN: `https://oz.by/`,
  FILTERED_CANDIES: `42&sort=rating_desc&v4=5`,
  DEFAULT_CANDIES: `https://oz.by/candies/`,
  LOGIN_PAGE: `https://oz.by/personal/login.phtml?back_uri=https%3A%2F%2Foz.by%2F`,
};
const PRICE = {
  CART: `35,13`,
  BLANKET_MIN_PRICE: '12',
  BLANKET_MAX_PRICE: '123',
  BRACELET_MIN_PRICE: `100`,
  MAX: ``
};
const LOGIN = {
  NON_EXISTING_EMAIL:'nonExisting@gmail.com' ,
  VALID_EMAIL: 'pandreychik@gmail.com',
  VALID_PASSWORD: `bX35Sn`,
  INVALID_EMAIL: `InvalidEmail`,
  NO_DATA: ``,
  NON_EXISTING_PASSWORD: `12345`,
  INVALID_PHONE_NUMBER: `442345`
};
const LEFT_NAV_MENU = {
  HOME: `Дом, сад, зоотовары`,
  INNER_BLANKET: `Пледы`,
  SWEETS: `Сладости, напитки`,
  INNER_CANDIES: `Конфеты`,
  ART: `Товары для творчества`,
  INNER_ENGRAVINGS: `Гравюры`,
  COSMETICS: `Косметика`,
  SOUVENIRS: `Сувениры`,
};
const CATALOG_NAVIGATION = {
  COMICS: `Комиксы`,
  BESTSELLERS: `Бестселлеры`,
  PERFUMERY: `Парфюмерия`,
  WOMEN_PERFUME: `Женские духи`,
  JEWELRY: `Бижутерия`,
  BRACELETS: `Браслеты`,
  CUPS: 'Кружки',
};
const COMICS = {
  PUBLISHER: `Азбука`,
};
const DATE = {
  _2023_DATE: `2023`,
  _2021_DATE: `2021`,
};
const SWEETS = {
  TASTE: `Ореховый`,
};
const BLANKET = {
  SIZE: 'Полуторный',
  DESIGN: 'Однотонный',
};
const PAYMENT = {
  ERIP: `Система Расчет`,
};
const ADDRESS = {
  CITY_BLANKET: `Минск`,
  STREET_BLANKET: `пр. Победителей, 3`,
  CITY_SWEETS: `Гомель`,
  STREET_SWEETS: `Все магазины в Гомеле`,
  NOT_ON_SALE: `Нет в продаже`,
  CITY_COMICS: `Брест`,
  STREET_COMICS: `Космонавтов, 40`,
  DELIVERY: `Сурганова, 21`
};
const BRACELETS = {
  MATERIAL: 'Натуральный камень',
  BRAND: `Wolves`,
  INSET: `Стекло`,
};
const MESSAGE = {
  NOTHING_WAS_FOUND: `Ничего не найдено`,
  CART_IS_EMPTY: `В корзине пусто`,
  TOTAL_PRODUCTS_NUMBER: `Итого 3 товара`,
  NOT_REGISTERED: 'не зарегистрирован',
  PROVIDE_CORRECT_EMAIL: 'Введите корректный адрес',
  PROVIDE_EMAIL: 'Введите адрес электронной почты',
  PROVIDE_PASSWORD:'Введите пароль',
  MUST_CONTAIN_SEVEN_DIGITS: 'должен содержать не менее 7 цифр',
  PROVIDE_CORRECT_PHONE_NUMBER: 'Введите корректный номер',
  ORDER_CANCELLED: `Аннулирован`
};
const PRODUCTS = {
  BOOK_ONE: 'Человек-бензопила. Книга 9',
  BOOK_TWO: `Сказать жизни "Да!`,
  BOOK_THREE: `дюна`,
  BOOK_THREE_TITLE: `император`,
  BOOK_THREE_TITLE_CAPITAL: `Император`,
  CUP_ONE:'Кружка "Сиба-ину',
  CUP_TWO: 'Подарочный набор "Суетолог',
  ENGRAVING_ONE: '"Idea',
  ENGRAVING_TWO: '"Единорог и котёнок',
  ENGRAVING_THREE: '"Британка',
  AUTHOR:`Харуки Мураками`,
  INVALID: `иаивмщукпмьбиу325`
};
const SMALL_CATALOG = {
  HOME: `home`,
  ENTERTAINMENT: `entertainment`,
  INNER_KITCHEN: 'Товары для кухни',
  FIRST_ROW: `one`,
  SECOND_ROW: `two`,
  POSITION_ONE: `1`,
  POSITION_TWO: `2`,
  POSITION_THREE: `3`,
  POSITION_FOUR: `4`,
  POSITION_FIVE: `5`,
};
const KEYBOARD = {
  ENTER: `Enter`
};

module.exports = {DATE, KEYBOARD, PAYMENT, LOGIN, PRICE, PRODUCTS, SMALL_CATALOG, MESSAGE, BRACELETS, BLANKET, COMICS, ADDRESS, URL, LEFT_NAV_MENU, SWEETS, CATALOG_NAVIGATION };
