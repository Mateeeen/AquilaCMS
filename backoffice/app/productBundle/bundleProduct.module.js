var currModule = {
	name: "bundleProduct"
};

angular.module('aq.' + currModule.name, [
	'aq.' + currModule.name + '.routes',
	'aq.' + currModule.name + '.services',
	'aq.' + currModule.name + '.controllers',
	'aq.' + currModule.name + '.directives',
	'aq.' + currModule.name + '.filters'
]);