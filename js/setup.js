'use strict';

var wizardSetup = document.querySelector('.setup');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];

for (var i = 0; i <= 4; i++) {
  wizards[i] = {
    name: (Math.floor(Math.random() * WIZARD_NAMES.length)) + ' ' + (Math.floor(Math.random() * WIZARD_SURNAMES.length)),
    coatColor: Math.floor(Math.random() * COAT_COLORS.length),
    eyesColor: Math.floor(Math.random() * EYES_COLOR.length)
  };
}

wizardSetup.classList.remove('hidden');

// getRandomInArray(Array) - нашла еще такой вариант, но не нашла как он работает и подходит ли.
// Про задание по желанию(можно переставлять фамилии и имена местами) я не поняла пока как это делать. Можешь навести на мысль?
// Пока искала решение, нашла вот такое(https://github.com/nefe/You-Dont-Need-jQuery/blob/master/README-ru.md):
// Заметка: document.querySelector и document.querySelectorAll достаточно МЕДЛЕННЫ, старайтесь использовать getElementById, document.getElementsByClassName или document.getElementsByTagName
// если хотите улучшить производительность.
// Что в таком случае все-таки лучше?
