var utils = require('../utils');

module.exports = function NameType(config) {
	var selectElem = function(elem) {
		return self.selector + ' ' + self.elements[elem];
	};
	var self = {
		selector: '.field-type-name[for="' + config.fieldName + '"]',
		elements: {
			label: '.FormLabel',
			firstName: 'input[name="' + config.fieldName + '.first"]',
			firstNamePlaceholder: 'input[placeholder="First name"]',
			lastName: 'input[name="' + config.fieldName + '.last"]',
			lastNamePlaceholder: 'input[placeholder="Last name"]',
		},
		commands: {
			assertUIVisible: function(browser, args) {
				browser
					.expect.element(selectElem('label')).to.be.visible;
				browser
					.expect.element(selectElem('label')).text.to.equal(utils.titlecase(config.fieldName));
				browser
					.expect.element(selectElem('firstName')).to.be.visible;
				browser
					.expect.element(selectElem('firstNamePlaceholder')).to.be.visible;
				browser
					.expect.element(selectElem('lastName')).to.be.visible;
				browser
					.expect.element(selectElem('lastNamePlaceholder')).to.be.visible;
			},
			assertUINotVisible: function(browser, args) {
				browser
					.expect.element(selectElem('label')).to.not.be.visible;
				browser
					.expect.element(selectElem('label')).text.to.equal(utils.titlecase(config.fieldName));
				browser
					.expect.element(selectElem('firstName')).to.not.be.visible;
				browser
					.expect.element(selectElem('firstNamePlaceholder')).to.not.be.visible;
				browser
					.expect.element(selectElem('lastName')).to.not.be.visible;
				browser
					.expect.element(selectElem('lastNamePlaceholder')).to.not.be.visible;
			},
			assertUIPresent: function(browser, args) {
				browser
					.expect.element(selectElem('label')).to.be.present;
				browser
					.expect.element(selectElem('firstName')).to.be.present;
				browser
					.expect.element(selectElem('firstNamePlaceholder')).to.be.present;
				browser
					.expect.element(selectElem('lastName')).to.be.present;
				browser
					.expect.element(selectElem('lastNamePlaceholder')).to.be.present;
			},
			assertUINotPresent: function(browser, args) {
				browser
					.expect.element(selectElem('label')).to.not.be.present;
				browser
					.expect.element(selectElem('firstName')).to.not.be.present;
				browser
					.expect.element(selectElem('firstNamePlaceholder')).to.not.be.present;
				browser
					.expect.element(selectElem('lastName')).to.not.be.present;
				browser
					.expect.element(selectElem('lastNamePlaceholder')).to.not.be.present;
			},
			fillInput: function(browser, input) {
				browser
					.clearValue(selectElem('firstName'))
					.setValue(selectElem('firstName'), input.firstName)
					.clearValue(selectElem('lastName'))
					.setValue(selectElem('lastName'), input.lastName);
			},
			assertInput: function(browser, input) {
				browser
					.getValue(selectElem('firstName'), function(result) {
						browser.api.assert.equal(result.value, input.firstName);
					});
				browser
					.getValue(selectElem('lastName'), function(result) {
						browser.api.assert.equal(result.value, input.lastName);
					});
			},
		},
	};

	return self;
};
