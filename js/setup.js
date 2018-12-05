'use strict';

var setupBlock = document.querySelector('.setup');
var similarListElement = setupBlock.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var setupBlockOpen = document.querySelector('.setup-open');
var setupBlockClose = setupBlock.querySelector('.setup-close');
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var wizardCoatInput = document.querySelector('input[name = coat-color]');
var wizardEyesInput = document.querySelector('input[name = eyes-color]');
var wizardFireballInput = document.querySelector('input[name = fireball-color]');
var setupUserName = setupBlock.querySelector('.setup-user-name');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var getRandomIntegerFromInterval = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

var getRandomElementFromArray = function (array) {
  return array[getRandomIntegerFromInterval(0, array.length - 1)];
};

var createWizard = function () {
  var wizard = {
    name: getRandomElementFromArray(WIZARD_NAMES) + ' ' + getRandomElementFromArray(WIZARD_SURNAMES),
    coatColor: getRandomElementFromArray(COAT_COLORS),
    eyesColor: getRandomElementFromArray(EYES_COLORS),
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

var onInputFocus = function (evt) {
  if (evt.type === 'focus') {
    document.removeEventListener('keydown', onPopupEscPress);
  } else {
    document.addEventListener('keydown', onPopupEscPress);
  }
};

var openPopup = function () {
  setupBlock.classList.remove('hidden');
  setupBlock.querySelector('.setup-similar').classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  setupUserName.addEventListener('focus', onInputFocus);
  setupUserName.addEventListener('blur', onInputFocus);
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupBlock.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  setupUserName.removeEventListener('focus', onInputFocus);
  setupUserName.removeEventListener('blur', onInputFocus);
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
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

wizardCoat.addEventListener('click', function () {
  var coatColor = getRandomElementFromArray(COAT_COLORS);
  wizardCoat.style.fill = coatColor;
  wizardCoatInput.value = coatColor;
});

wizardEyes.addEventListener('click', function () {
  var eyesColor = getRandomElementFromArray(EYES_COLORS);
  wizardEyes.style.fill = eyesColor;
  wizardEyesInput.value = eyesColor;
});

wizardFireball.addEventListener('click', function () {
  var fireballColor = getRandomElementFromArray(FIREBALL_COLORS);
  wizardFireball.background.fill = fireballColor;
  wizardFireballInput.value = fireballColor;
});
