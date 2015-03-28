# Address Autocomplete with Google Maps


## Installation

Clone this [repository](https://github.com/weaselshark/address-autocomplete.git) or download the [latest build](https://github.com/weaselshark/address-autocomplete/archive/master.zip).

Include jQuery library and google maps API places library:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&libraries=places"></script>
```

Include address-autocomplete.js *after* the jQuery library:

```html
<script src="/path/to/address-autocomplete.js"></script>
```

## Usage

```javascript
$(function() {
    $("#autocomplete").auto_address(); // 'autocomplete' is the id of the text box to be auto filled. 
});
```

## Options

### expires

    user_region : false

Bias the autocomplete object to the user's geographical location, as supplied by the browser's 'navigator.geolocation' object. Default value is 'true'.

Ex: 
```javascript
$("#autocomplete").auto_address({
    user_region : false
});
```


## Demo

[http://weaselshark.github.io/address-autocomplete](http://weaselshark.github.io/address-autocomplete/)

## Issues & Suggestions

Please track issues, bugs, and feature requests in this tracker.

[https://github.com/weaselshark/address-autocomplete/issues](https://github.com/weaselshark/address-autocomplete/issues)