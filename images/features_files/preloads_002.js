
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.e9c888b839083bc30955.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4353.latest.en.a8d4d419700b289ebb08.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5927.latest.en.a73146dcbf67c395149d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9180.latest.en.84180e58b327a9a672f8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.476260af2d1514786bbe.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3912.latest.en.5ceaef5ee1dd7e3346d2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3272.latest.en.88bd8cf33f40715a2326.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4766.latest.en.a77acf19aa8a57301bdb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/7467.latest.en.37734058c4e05a7081dc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/254.latest.en.24ccf3a7287a537019e9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4746.latest.en.389fd7f85eb8a3f6e713.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6714.latest.en.6fb5ab6c5915e14fed01.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9045.latest.en.14d0ef2d027c32d67520.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.8fb33543b3a2f4655dca.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/4353.latest.en.64026a2ae3d99b1fa93b.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.2e0eaac22a5cb50aa5d6.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.en.2e09285a536b15d91085.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  