var initialCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'whatever',
        nicknames: ['Arwenka','Elrond']
    },
    {
        clickCount: 0,
        name: 'Jarmila',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        imgAttribution: 'whatever',
        nicknames: ['Berta']
    },
    {
        clickCount: 0,
        name: 'Jolana',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
        imgAttribution: 'whatever',
        nicknames: ['Berta','Cecilka','Elrond']
    }
];

var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);
    var self = this;
    this.level = ko.computed(function () {
        var clicks = self.clickCount();
        if (clicks < 2) {
            return "Newborn";
        }
        if (clicks < 5) {
            return "Newbie :)";
        }
        else {
            return "Senior :D";
        }
    });
};


var ViewModel = function () {
    var self = this;
    this.catList = ko.observableArray([]);
    initialCats.forEach(function (cat){
        self.catList.push(new Cat(cat));
    });
    
    this.setCurrentCat = function (){
        self.currentCat(this);
    }
    
    this.currentCat = ko.observable(this.catList()[0]);
    
    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel())