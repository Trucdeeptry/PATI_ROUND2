
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.BVYsYAdG.js","/cdn/shopifycloud/checkout-web/assets/c1/app.No_v7g3n.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.D5hs5Ze_.js","/cdn/shopifycloud/checkout-web/assets/c1/page-Information.DTDMzCWD.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.BFw3qApv.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalPickup.DAWeDkT4.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.DZPpSDYY.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.BZXmuC6P.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.CjGn_Lz5.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalPickup.Cuz4ryjJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.CBpWLJzT.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0917/5649/5191/files/logo_c850d8ea-8fc1-4628-9f1e-4660a0808612_x320.png?v=1747491202"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
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
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  