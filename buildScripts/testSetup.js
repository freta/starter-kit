// this file isn't transpiled, so must use commonJS and ES5

// Register babel to transpile before our tests run.
require("babel-register")();
// Disabele webpak features that mocha doesn't understand.
require.extensions[".css"] = function () {};
