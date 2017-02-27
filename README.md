# rfn for IE 8

###Blind Click/Touch Event
```js
$(el).rClick(function() {
  // some handlers
});
```
##Config
> rfn.config

###Browser Detection
rfn.config.browser.versions

| Name        | Description     | Return  |
| ----------- | --------------- | ------- |
| trident     | IE              | boolean |
| presto      | Opera           | boolean |
| webKit      | Safari, Chrome  | boolean |
| gecko       | Firefox         | boolean |
| safari      | Safari          | boolean |
| mobile      | Mobile          | boolean |
| ios         | iOS             | boolean |
| android     | Android         | boolean |
| iPhone      | iPhone/QQHD     | boolean |
| iPad        | iPad            | boolean |
| webApp      | webApp          | boolean |
| weixin      | weixin          | boolean |
| qq          | QQ              | boolean |

####IE Version
rfn.config.browser.trident

| Name        | Description     | Return  |
| ----------- | --------------- | ------- |
| lte_IE6     | < IE6           | boolean |
| lte_IE7     | < IE7           | boolean |
| lte_IE8     | < IE8           | boolean |
| lte_IE9     | < IE 9          | boolean |
| gte_IE10    | < IE10          | boolean |
| eq_IE8      | = IE8           | boolean |
| eq_IE9      | = IE9           | boolean |
| eq_IE10     | = IE10          | boolean |
| eq_IE11     | = IE11          | boolean |
| Trident     | IE core         | string  |

####Browser Version
**{String}** rfn.config.browser.appVersion

####Browser Language
**{String}** rfn.config.browser.language

####Browser Cookies
**{Boolean}** rfn.config.browser.cookie

###Mouse Type
**{String}** rfn.config.mouseEvent
| Return      | Description     |
| ----------- | --------------- |
| touchend    | Touchend        |
| click       | Mouse click     |




