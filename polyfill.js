// This file runs before any other code in Node.js
// It polyfills localStorage and window.location for SSR environments

if (typeof global !== 'undefined') {
  if (!global.localStorage) {
    const localStorageMock = {
      getItem: function(key) {
        return null;
      },
      setItem: function(key, value) {
        // No-op on server
      },
      removeItem: function(key) {
        // No-op on server
      },
      clear: function() {
        // No-op on server
      },
      key: function(index) {
        return null;
      },
      length: 0,
    };

    global.localStorage = localStorageMock;
  }
  
  const locationMock = {
    protocol: 'http:',
    host: 'localhost:3000',
    hostname: 'localhost',
    port: '3000',
    pathname: '/',
    search: '',
    hash: '',
    href: 'http://localhost:3000/',
    origin: 'http://localhost:3000',
  };
  
  const windowMock = {
    localStorage: global.localStorage,
    location: locationMock,
    addEventListener: function(event, handler) {
      // No-op on server
    },
    removeEventListener: function(event, handler) {
      // No-op on server
    },
    dispatchEvent: function(event) {
      return true;
    },
    matchMedia: function(query) {
      return {
        matches: false,
        media: query,
        onchange: null,
        addListener: function() {},
        removeListener: function() {},
        addEventListener: function() {},
        removeEventListener: function() {},
        dispatchEvent: function() { return true; },
      };
    },
    innerWidth: 1920,
    innerHeight: 1080,
    scrollY: 0,
    scrollX: 0,
  };
  
  if (typeof window === 'undefined') {
    if (!global.window) {
      global.window = windowMock;
    } else {
      if (!global.window.localStorage) {
        global.window.localStorage = global.localStorage;
      }
      if (!global.window.location) {
        global.window.location = locationMock;
      }
      if (!global.window.addEventListener) {
        global.window.addEventListener = windowMock.addEventListener;
      }
      if (!global.window.removeEventListener) {
        global.window.removeEventListener = windowMock.removeEventListener;
      }
      if (!global.window.matchMedia) {
        global.window.matchMedia = windowMock.matchMedia;
      }
    }
  }
  
  // Create document mock for SSR
  if (typeof document === 'undefined') {
    if (!global.document) {
      global.document = {
        createElement: function(tagName) {
          return {
            tagName: tagName.toUpperCase(),
            setAttribute: function() {},
            getAttribute: function() { return null; },
            removeAttribute: function() {},
            addEventListener: function() {},
            removeEventListener: function() {},
            appendChild: function() {},
            removeChild: function() {},
            style: {},
            innerHTML: '',
            textContent: '',
          };
        },
        createElementNS: function() {
          return {};
        },
        getElementById: function() { return null; },
        getElementsByTagName: function() { return []; },
        getElementsByClassName: function() { return []; },
        querySelector: function() { return null; },
        querySelectorAll: function() { return []; },
        addEventListener: function() {},
        removeEventListener: function() {},
        cookie: '',
        body: {
          appendChild: function() {},
          removeChild: function() {},
          style: {},
        },
        head: {
          appendChild: function() {},
          removeChild: function() {},
        },
      };
    }
  }
}

