'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['101, 137, 164', '241, 43, 107', '146, 100, 161', '56, 159, 117', '215, 210, 55', '0, 0, 0'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getWizardFullName(name, surname) {
  return name + ' ' + surname;
}

var wizardsQuantity = 4;
var wizards = [];
for (var i = 0; i < wizardsQuantity; i++) {
  var wizardsName = names[getRandomArbitrary(0, names.length - 1)];
  var wizardsSurname = surnames[getRandomArbitrary(0, surnames.length - 1)];
  var wizardsFullName = getWizardFullName(wizardsName, wizardsSurname);
  var wizardsCoatColor = 'rgb(' + coatColor[getRandomArbitrary(0, coatColor.length - 1)] + ')';
  var wizardsEyesColor = eyesColor[getRandomArbitrary(0, eyesColor.length - 1)];
  var wizard = {
    name: wizardsFullName,
    coatColor: wizardsCoatColor,
    eyesColor: wizardsEyesColor,
  };

  wizards.push(wizard);
}
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

function renderWizard(wizarder) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizarder.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizarder.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizarder.eyesColor;

  return wizardElement;
}

var documentFragment = document.createDocumentFragment();
for (i = 0; i < wizards.length; i++) {
  documentFragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(documentFragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
