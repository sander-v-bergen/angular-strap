/**
 * angular-strap
 * @version v2.3.2 - 2015-12-15
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';

angular.module('mgcrea.ngStrap.select').run([ '$templateCache', function($templateCache) {
  $templateCache.put('select/select.tpl.html', '<select tabindex="-1" class="select dropdown-menu" ng-show="$isVisible()" role="select"><option role="presentation" ng-repeat="match in $matches" ng-class="{active: $isActive($index)}" value="match.label">{{match.label}}</option></select>');
} ]);