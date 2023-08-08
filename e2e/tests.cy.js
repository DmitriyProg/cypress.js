describe('Автотесты формы логина', function () {

  it('Ввожу верный логин и пароль', function () {
    cy.visit('https://login.qa.studio/'); // перехожу на сайт
    cy.get('#mail').type('german@dolnikov.ru'); // нахожу поле ввода логина и ввожу правильный логин
    cy.get('#pass').type('iLoveqastudio1'); // нахожу поле ввода пароля и ввожу правильный пароля
    cy.get('#loginButton').click(); // нажимаем на кнопку войти
    cy.contains('Авторизация прошла успешно').should('be.visible'); // проверяем чтобы сообщение об успешном входе было видимым
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем что есть крестик закрытия окошка
  })

  it('Проверка логики восстановления пароля', function () {
    cy.visit('https://login.qa.studio/'); // перехожу на сайт
    cy.get('#forgotEmailButton').click(); // нажимаем кнопку "Забыли пароль?"
    cy.get('#mailForgot').type('german@dolnikov.ru'); // нахожу поле ввода почты и ввожу её
    cy.get('#restoreEmailButton').click(); // нажимаем кнопку "Отправить код"
    cy.contains('Успешно отправили пароль на e-mail').should('be.visible'); // проверяем чтобы сообщение об успешной отправке письма для восстановления было видимым
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем что есть крестик закрытия окошка
  })

  it('Проверка true логин и false пароль', function () {
    cy.visit('https://login.qa.studio/'); // перехожу на сайт
    cy.get('#mail').type('german@dolnikov.ru'); // нахожу поле ввода логина и ввожу правильный логин
    cy.get('#pass').type('qwerty'); // нахожу поле ввода пароля и ввожу неправильный пароля
    cy.get('#loginButton').click(); // нажимаем на кнопку войти
    cy.contains('Такого логина или пароля нет').should('be.visible'); // проверяем чтобы сообщение об ошибке входа было видимым
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем что есть крестик закрытия окошка
  })

  it('Проверка false логин и true пароль', function () {
    cy.visit('https://login.qa.studio/'); // перехожу на сайт
    cy.get('#mail').type('good_luck@mail.ru'); // нахожу поле ввода логина и ввожу неправильный логин
    cy.get('#pass').type('iLoveqastudio1'); // нахожу поле ввода пароля и ввожу правильный пароля
    cy.get('#loginButton').click(); // нажимаем на кнопку войти
    cy.contains('Такого логина или пароля нет').should('be.visible'); // проверяем чтобы сообщение об ошибке входа было видимым
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем что есть крестик закрытия окошка
  })

  it('Проверка false логин без @ и true пароль', function () {
    cy.visit('https://login.qa.studio/'); // перехожу на сайт
    cy.get('#mail').type('Have_a_nice_day!'); // нахожу поле ввода логина и ввожу неправильный логин без @
    cy.get('#pass').type('iLoveqastudio1'); // нахожу поле ввода пароля и ввожу правильный пароля
    cy.get('#loginButton').click(); // нажимаем на кнопку войти
    cy.contains('Нужно исправить проблему валидации').should('be.visible'); // проверяем чтобы сообщение об ошибке входа было видимым    
  })

  it('Проверка регистро независимости поля логин, ввожу верный логин и пароль', function () {
    cy.visit('https://login.qa.studio/'); // перехожу на сайт
    cy.get('#mail').type('GerMan@Dolnikov.ru'); // нахожу поле ввода логина и ввожу правильный логин
    cy.get('#pass').type('iLoveqastudio1'); // нахожу поле ввода пароля и ввожу правильный пароля
    cy.get('#loginButton').click(); // нажимаем на кнопку войти
    cy.contains('Авторизация прошла успешно').should('be.visible'); // проверяем чтобы сообщение об успешном входе было видимым
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем что есть крестик закрытия окошка
  })

})