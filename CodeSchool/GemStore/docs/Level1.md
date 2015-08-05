# Code School - Shaping up with Angular.JS - Level 1 - Notes

## Create a module, which can have multiple controllers to handle parts of the page.

```
var app = angular.module('module-name', ['dependencies...']);
```

Attach it to the HTML:

```
<html ng-app="module-name">
```

## Create a controller, which can have properties, which can be used to be displayed.

```
app.controller('NameOfTheController', function() {
    this.propertyToPublish = {'some': 'thing'};
});
```

Display the contents with aliasing the controller name:

```
<div ng-controller="NameOfTheController as noc">
  {{noc.propertyToPublish.some}} will equal with the word "thing".
</div>
```

## Show/hide elements based on properties

```
<div ng-show="some.boolish.value"> To show (true) or not to show (false) </div>
<div ng-show="!some.boolish.value"> Can use negation, but that's what ng-hide is for </div>
<div ng-hide="some.boolish.value"> To show or not to show </div>
```

## Loop thru multiple elements

```
<div ng-repeat="item in controller.items">
  {{item.property}}
</div>
```
