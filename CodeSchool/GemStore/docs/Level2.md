# Code School - Shaping up with Angular.JS - Level 2 - Notes

## Filters

Recipe:

```
{{ data | filter:options }}
```

Examples:

* currency
* date:'YYYY-mm-dd HH:mm:ss'
* uppercase
* limitTo:8 - used within ng-repeat
* orderBy:'price' - ascending order - used within ng-repeat
* orderBy:'-price' - descending order - used within ng-repeat

## Image sources

Using "src" would try to load the given string before Angular would replace it,
which can be avoided by using the ng-src directive.

```
<img ng-src="{{controller.image.source}}"/>
```

## Hiding empty lists

```
<div ng-show="stuff.length">
```

## Data binding - 2-way

Initializing a variable with ng-init:

```
<div ng-init="someVariable = 1">
```

Setting a variable with directives, like on click:

```
<a ng-click="someVariable = 6">
```

The following expression is updated at every change:

```
{{someVariable}}
```

Checking for variable values in directives, like ng-show:

```
<div ng-show="someVariable === 6">
```

## Dynamic CSS class setting using variables

```
<div ng-class="{ active:someVariable === 6 }">
```