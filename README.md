# Text Resources

The text-resources is a javascritpt library that provides a set resource bundles for locale-sensitive information such as dates, messages and numbers.

The text-resources library is built on 3 base objects: `CurrencyNames`, `FormatData`, and `LocaleNames`. These base objects are key/value pair where the key is a locale language tag and the value is an object with locale-sensitive information for the language tag.

## Installation

### Loading text-resources in a browser

```html
<!-- text-resources for default locale -->
<script src="dist/text-resources.js"></script>

<!-- text-resources for specific locale -->
<script src="dist/text-resources-en.js"></script>
<script src="dist/text-resources-en-GB.js"></script>
<script src="dist/text-resources-en-US.js"></script>
<script src="dist/text-resources-fr.js"></script>
<script src="dist/text-resources-fr-FR.js"></script>
```

### Loading text-resources in Node.js

```javascript
require("text-resources");
```

## Usage

The text-resources library provides a set of resource bundle for localizing information. There is no API for manipulating the properties in this library.

## Contributing

To contribute to this library, just fork this repository, create a branch for the locale on which you are going to work to and then add a text-resources for a new locale or modify an existing one if necessary. When your work is ready, just create a pull request to bring your work to the development branch of this repository.

### The text-resources branch name

The text-resources branch name must follow the pattern `text-resources-[a-z]{2}(-[A-Z]{2})?`

Suppose that you want to create text-resources files for the following locales: `es`, `es-AR`, `es-ES`, `es-MX`, `it`, `it-IT`.

You can create a branch for each of these locales. Here are the branches for the locales above: `text-resources-es`, `text-resources-es-AR`, `text-resources-es-ES`, `text-resources-es-MX`, `text-resources-it`, `text-resources-it-IT`.

You can also create a branch for a set of related branches. In the precedent example, there is 4 branches related to the spanish language and 2 to the italian. So you it can be useful to create the `text-resources-es` branch for all spanish locales and `text-resources-it` for italian locales.

### The text-resources files

Suppose that you want to create text-resources files for the italian locale. You have to create the following files: `currency-names-it.js`, `format-data-it.js`, and `locales-names-it.js`. It is recommended to make a copy of the base files and then rename by appending the locale language tag.

The aim of the text-resources library is to emulate the resources bundle classes used in Java Programming Language in the `java.text` package. The files of this library are based on the content of these resource bundles. Download the source code of the Java Programming Language at <http://download.java.net/openjdk/jdk7>. The resource bundle files used by this library are located to the directories `openjdk/jdk/src/share/classes/sun/text/resources` and `openjdk/jdk/src/share/classes/sun/util/resources`.

## License

Copyright (c) 2017 Yannick Ebongue

Released under the MIT License (see [LICENSE.txt](LICENSE.txt))
