'use strict';

var setupBlock = document.querySelector('.setup');
var similarListElement = setupBlock.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var setupBlockOpen = document.querySelector('.setup-open');
var setupBlockClose = setupBlock.querySelector('.setup-close');
var setupBlockSubmit = setupBlock.querySelector('.setup-submit');
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var wizardCoatInput = document.querySelector('input[name = coat-color]');
var wizardEyesInput = document.querySelector('input[name = eyes-color]');
var wizardfireballInput = document.querySelector('input[name = fireball-color]');

setupBlockOpen.addEventListener('click', function () {
  setupBlock.classList.remove('hidden');
});

setupBlockClose.addEventListener('click', function () {
  setupBlock.classList.add('hidden');
});


var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomIntegerFromInterval = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

var getRandomElementFromArray = function (array) {
  return array[getRandomIntegerFromInterval(0, array.length - 1)];
};

var shuffleArray = function (array) {
  for (var j = array.length - 1; j > 0; j--) {
    var randomNumber = Math.floor(Math.random() * (j + 1));
    var temp = array[j];
    array[j] = array[randomNumber];
    array[randomNumber] = temp;
  }
  return array;
};


var createWizard = function () {
  var wizard = {
    name: getRandomElementFromArray(WIZARD_NAMES) + ' ' + getRandomElementFromArray(WIZARD_SURNAMES),
    coatColor: getRandomElementFromArray(COAT_COLORS),
    eyesColor: getRandomElementFromArray(EYES_COLOR),
  };
  return wizard;
};

var getWizards = function (count) {
  var wizards = [];
  for (var i = 0; i < count; i++) {
    wizards.push(createWizard());
  }
  return wizards;
};

var wizards = getWizards(4);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

setupBlock.querySelector('.setup-similar').classList.remove('hidden');

var openPopup = function () {
  setupBlock.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupBlock.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var submitForm = function () {
  setupBlockSubmit.setAttribute('type', 'submit');
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var randomColorOfSmth = function (attribute, array, input) {
  shuffleArray(array);
  input.setAttribute('value', array[0]);
  return attribute + ': ' + array[0];
};

setupBlockOpen.addEventListener('click', function () {
  openPopup();
});
setupBlockOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupBlockClose.addEventListener('click', function () {
  closePopup();
});

setupBlockClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupBlockSubmit.addEventListener('click', function () {
  submitForm();
});

setupBlockSubmit.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    submitForm();
  }
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.setAttribute('style', randomColorOfSmth('fill', COAT_COLORS, wizardCoatInput));
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.setAttribute('style', randomColorOfSmth('fill', eyesColors, wizardEyesInput));
});

fireball.addEventListener('click', function () {
  fireball.setAttribute('style', randomColorOfSmth('background-color', fireballColors, wizardfireballInput));
});
