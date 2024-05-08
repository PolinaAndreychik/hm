
Feature: Oz.by tests

    Scenario: I should see selected filters on the page
        Given I navigate to "oz.by"
        When I move to left menu title "Дом, сад, зоотовары" and click on specific product "Пледы"
        And I select default filters "Однотонный"
        And I select default filters "Полуторный"
        And I select city "Минск"
        And I select street "Победителей"
        And I apply filters
        When I arrange products by expensive first
        Then I should see selected filters Однотонный and Полуторный

    Scenario: I should see page url changing to default one after clearing filters
        Given I navigate to "oz.by"
        When I move to left menu title "Сладости, напитки" and click on specific product "Конфеты"
        And I select default filters "Ореховый"
        And I select city "Гомель"
        And I select street "Все магазины в Гомеле"
        And I apply filters
        When I arrange products by rating
        Then I should see current url "id_store=17%3B42&v4=5&sort=rating_desc"
        And I clear filters
        Then I should see default url "https://oz.by/candies/"

    Scenario:I should see that product contains selected filters
        Given I navigate to "oz.by"
        When I go to catalog Товары для творчества
        And I select product from navigation list Комиксы
        And I select product from head navigation Бестселлеры
        And I select default filters "2023"
        And I select default filters "Азбука"
        And I apply filters
        When I go to product page Человек-бензопила. Книга 9
        Then I should see filters 2023 and Азбука on product page

    Scenario: I should see transition field containing selected catalog pages
        Given I navigate to "oz.by"
        When I go to catalog Косметика
        And I select product from head navigation Парфюмерия
        And I select product from navigation list Женские духи
        Then I should see catalog transitions Женские духи and Парфюмерия

    Scenario: I should see no products
        Given I navigate to "oz.by"
        When I go to catalog Сувениры
        And I select product from head navigation Бижутерия
        And I select product from head navigation Браслеты
        And I select default filters "Натуральный камень"
        And I select default filters "OKPODOLINS"
        And I select default filters "Стекло"
        When I apply filters
        Then I should find no products Ничего не найдено
