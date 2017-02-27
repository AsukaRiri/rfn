# rfn




###Config
> rfn.config

###Browser Detection
rfn.config.browser.versions

| Name        | Description     | Returns |
|:----------- |:--------------- |:------- |
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

| Name        | Description     | Returns |
|:----------- |:--------------- |:------- |
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
rfn.config.browser.appVersion

Returns
string

####Browser Language
rfn.config.browser.language

Returns
string

####Browser Cookie
rfn.config.browser.cookie

Returns
boolean

###Mouse Event
| Returns     | Description     |
|:----------- |:--------------- |
| touchend    | Touch Device    |
| click       | Desktop         |

Returns
string

###Dragging / Scrolling
**{Boolean}** rfn.dragging

--------

##Method

> jQuery

###Blind Click/Touch Event
```js
$(el).rClick(function() {
  // some handlers
});
```


###Initialize
rfn.init()

###
rfn.pageInit()

###Load CSS
rfn.loadCss( string url )

Parameters

| url | Link of the CSS file |

Description
Load CSS

Returns
null


###Smooth Scrolling
rfn.smoothScroll( options )

Parameters

| Name     | Description     | Type       | Default           |
|:-------- |:--------------- |:---------- |:----------------- |
| selector | Elements        | string     | [data-scroll]     |
| speed    | Scrolling speed | int/string | 500 //slow / fast |
| easing   | Easing          | string     | swing //linear    |
| offset   | Top offset      | int        | 0                 |

Description
Smooth scrolling to page element

Returns
null

###Cookie
rfn.setCookie( string cname, string cvalue, int exdays )

Parameters

| cname  | Cookie name  |
| cvalue | Cookie value |
| exdays | Expired days |

Description
Set Cookie

Returns
null

rfn.getCookie( string cname )

Parameters
| cname  | Cookie name  |

Description
Get Cookie Value

Returns
string


###URL Query String
rfn.getQueryString()

Description
Get all query
example
```js
  #hash?action=search&keyword=keyword
  ?action=search&keyword=keyword#hash

  returns
  { action: search, keyword: keyword }
```

Returns
object
