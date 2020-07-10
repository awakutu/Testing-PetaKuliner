/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0a27a4163254fc8fce870c8cc3a3f94f"
  },
  {
    "url": "contoh.js",
    "revision": "00a872ed9e97c81bb1f1940d23f6a893"
  },
  {
    "url": "images/example-color.png",
    "revision": "d3f90fc9839df31bfa52fbef2766c116"
  },
  {
    "url": "images/lines.png",
    "revision": "80804782ee3172ae83504cd9fa493757"
  },
  {
    "url": "images/logo.png",
    "revision": "4d3bf22f5d0bfdc95d2e6699f4b657bb"
  },
  {
    "url": "index.html",
    "revision": "d333f75cfe217e765659a6a4fbaaa2cf"
  },
  {
    "url": "mygrid.css",
    "revision": "c835b458c94d5e84df1a4ebe8eea5eb7"
  },
  {
    "url": "projek1/add2numbers.css",
    "revision": "9c5d47cc5f758fa6fd61d2f6fff873ea"
  },
  {
    "url": "projek1/add2numbers.html",
    "revision": "c063962ab86d945c20595a061ca4a311"
  },
  {
    "url": "projek1/add2numbers.js",
    "revision": "2f0da2cf37b224558a423b45312fbc7b"
  },
  {
    "url": "projek1/front.css",
    "revision": "23cb7d75eaa19b8924af570ec8605560"
  },
  {
    "url": "projek1/front.html",
    "revision": "705457ed55d1832695e65a70300f305e"
  },
  {
    "url": "projek1/images/add.png",
    "revision": "d5b65d541ebc2a933fe4b4fcd99b983d"
  },
  {
    "url": "projek1/images/logo.png",
    "revision": "4d3bf22f5d0bfdc95d2e6699f4b657bb"
  },
  {
    "url": "projek2/data/peta.json",
    "revision": "5843dda2ff256b8ffc92a2ce67302500"
  },
  {
    "url": "projek2/img/greenbarn.jpg",
    "revision": "f9fe3b9b63862f3932fd44be60811bb5"
  },
  {
    "url": "projek2/img/punokawan.jpg",
    "revision": "fc48bef0f58c99a3b86d51f629a265f8"
  },
  {
    "url": "projek2/peta.css",
    "revision": "f4e108645db678615cabf7001fcd85e3"
  },
  {
    "url": "projek2/peta.html",
    "revision": "4958b3cc8e48e3db93e02b2bf77d1f2d"
  },
  {
    "url": "projek2/peta.js",
    "revision": "21c7a7eaa459f74f7fb433aff5c8fd28"
  },
  {
    "url": "projek2/peta2.js",
    "revision": "1baf41d5464dd5fa396a65fc8820ed2b"
  },
  {
    "url": "projek2/peta3.js",
    "revision": "5f81ee332563f7039b0e13878d8a301e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
