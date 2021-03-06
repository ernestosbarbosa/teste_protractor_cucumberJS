'use strict'
// features/pages/calculadoraPage.js
const { element } = require('protractor')

class CalculadoraPage {
    constructor() {
        this.firstField = element(by.model('first')),
            this.secondField = element(by.model('second')),
            this.goButton = element(by.id('gobutton')),
            this.colResult = element(by.cssContainingText('.table', 'Result')),
            this.result = element(by.binding('latest')),
            this.table = element(by.css('.table th')),
            this.sub = element(by.cssContainingText('option', '-'))
    }

    visit() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        return browser.get('http://juliemr.github.io/protractor-demo/')
    }

    adicionar(one, two) {
        this.firstField.clear();
        this.firstField.sendKeys(one);
        this.secondField.clear();
        this.secondField.sendKeys(two);
        return this.goButton.click();
    }

    subtrair(one, two) {
        this.firstField.clear();
        this.firstField.sendKeys(one);
        this.secondField.clear();
        this.secondField.sendKeys(two);
        this.sub.click();
        return this.goButton.click();
    }
};

module.exports = CalculadoraPage;