// features/step_definitions/calculadoraStep.js
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const CalculadoraPage = require('../pages/calculadoraPage.js')
const EC = protractor.ExpectedConditions;


chai.use(chaiAsPromised);
const expect = chai.expect;

module.exports = function () {
    const page = new CalculadoraPage();

    this.Given(/^que eu esteja na tela de calculos$/, function (callback) {
        page.visit();
        expect(browser.getTitle())
            .to.eventually.equal('Super Calculator')
            .and.notify(callback);
    });

    this.When(/^eu fizer calculos de adicao$/, function (callback) {
        page.adicionar('10', '20').then(callback);
    });

    this.Then(/^devo visualizar o resultado da adicao$/, function (callback) {
        browser.wait(EC.visibilityOf(CalculadoraPage.result), 6000);
        browser.sleep(5000);
        expect(page.result.getText()).to.eventually.equal('30')
        .and.notify(callback);
    });


    this.When(/^eu fizer novos calculos de adicao$/, function (callback) {
        page.adicionar('100', '200').then(callback);
    });

    this.Then(/^devo visualizar o novo resultado de adicao$/, function (callback) {
        expect(page.result.getText()).to.eventually.equal('200')
        .and.notify(callback);
    });

    this.When(/^eu fizer calculos de subtracao$/, function (callback) {
        page.subtrair('100', '200').then(callback);
    });

    this.Then(/^devo visualizar resultado de subtracao$/, function (callback) {
        expect(page.result.getText()).to.eventually.equal('100')
        .and.notify(callback);
    });

    this.When(/^eu fizer novos calculos de subtracao$/, function (callback) {
        page.subtrair('50', '20').then(callback);
    });

    this.Then(/^devo visualizar o novo resultado de subtracao$/, function (callback) {
        expect(page.result.getText()).to.eventually.equal('100000')
        .and.notify(callback);
    });
}