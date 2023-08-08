describe('Оформление заказа', function () {

  it('Перехожу с главной страницы на карточку товара и дохожу до этапа оформления заказа', function () {
    cy.visit('https://huntingpony.com/'); // перехожу на сайт
    cy.intercept('POST','https://huntingpony.com/front_api/deliveries/calculate.json').as('next');
    cy.get('[href="/collection/odezhda"] > .banner-list__item-title').click(); // переходим в раздел с одеждой
    cy.wait('@next');
    cy.intercept('GET','https://huntingpony.com/cart_items.json').as('next2');
    cy.get('[data-product-id="378247921"] > .product-preview__content > .product-preview__area-title > .product-preview__title > a').click(); // переходим в первый товар
    cy.wait('@next2');
    cy.intercept('POST','https://huntingpony.com/front_api/cart.json').as('next5');
    cy.get('.add-cart-counter__btn').click(); // добавляем в корзину
    cy.wait('@next5');
    cy.intercept('POST','https://huntingpony.com/front_api/cart.json').as('next6');
    cy.get('[data-add-cart-counter-plus=""]').click(); // увеличиваем количество на один до 2 штук
    cy.wait('@next6');
    cy.intercept('GET','https://huntingpony.com/front_api/cart.json?lang=').as('next3');
    cy.get('.header__cart > .icon').click(); // переходим в корзину
    cy.wait('@next3');
    cy.intercept('GET','https://huntingpony.com/front_api/cart.json?lang=').as('next4');
    cy.get('.cart-controls > .button').click(); // нажимаем кнопку оформить заказ
    cy.wait('@next4');
    cy.contains('Оформление заказа').should('be.visible'); // проверяем что оказались в разделе заполнения полей оформления заказа
  })

  /*it('Для проверки работы кнопки добавления в корзину (иногда может не работать)', function () {
    cy.visit('https://huntingpony.com/product/dozhdevik-poni-parasoli'); // перехожу на сайт
    cy.get('.add-cart-counter__btn').click(); // добавляем в корзину
  })*/
})
