"use strict";
// CREA UNA CLASE LLAMADA MOBILE CON LAS SIGUIENTES CARACTERISTICAS
exports.__esModule = true;
exports.Mobile = void 0;
//    Propiedades Publicas
//    - name
//    - model
//    - trademark
//    - sdSize
//    - color
//    - is5G
//    - cameraNumber
//    - price
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    // Getters
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getSdsize = function () {
        return this.sdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.getIs5G = function () {
        return this.is5G;
    };
    Mobile.prototype.getCameranumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    // Setters
    Mobile.prototype.setName = function (newName) {
        this.name = newName;
    };
    Mobile.prototype.setModel = function (newModel) {
        this.model = newModel;
    };
    Mobile.prototype.setTrademark = function (newTrademark) {
        this.trademark = newTrademark;
    };
    Mobile.prototype.setSdsize = function (newSdsize) {
        this.sdSize = newSdsize;
    };
    Mobile.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    Mobile.prototype.setIs5G = function (newIs5G) {
        this.is5G = newIs5G;
    };
    Mobile.prototype.setCameraNumber = function (newCameraNumber) {
        this.cameraNumber = newCameraNumber;
    };
    Mobile.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    // METODOS
    Mobile.prototype.printMobile = function () {
        var formatMobile = ("The characteristics of the mobile name are: " + "\n" +
            "Name: " + this.name + "\n" +
            "Model: " + this.model + "\n" +
            "Trademark: " + this.trademark + "\n" +
            "SD Size (GB): " + this.sdSize + "\n" +
            "Color: " + this.color + "\n" +
            "Is 5g?: " + this.is5G + "\n" +
            "Number of Cameras: " + this.cameraNumber + "\n" +
            "Price: " + this.price + "\n");
        return formatMobile;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
