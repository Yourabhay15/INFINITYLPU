// This file MUST be imported first to set up polyfills before any other code runs
// It sets up localStorage and window.location for SSR environments

// Run immediately, not in a function wrapper
if (typeof global !== 'undefined') {
  // Create localStorage mock - always recreate to ensure it has all methods
  const localStorageMock = {
    getItem: function(key: string) {
      return null;
    },
    setItem: function(key: string, value: string) {
      // No-op on server
    },
    removeItem: function(key: string) {
      // No-op on server
    },
    clear: function() {
      // No-op on server
    },
    key: function(index: number) {
      return null;
    },
    length: 0,
  };

  // Always set localStorage to ensure it has all methods
  // @ts-ignore
  global.localStorage = localStorageMock;
  
  // Ensure window object exists with localStorage, location, and common methods
  // This must run even if window is undefined (SSR)
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
  
  // Create window mock with all necessary methods
  const windowMock = {
    localStorage: global.localStorage,
    location: locationMock,
    addEventListener: function(event: string, handler: any) {
      // No-op on server
    },
    removeEventListener: function(event: string, handler: any) {
      // No-op on server
    },
    dispatchEvent: function(event: any) {
      return true;
    },
    matchMedia: function(query: string) {
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
    navigator: {
      userAgent: 'Mozilla/5.0 (compatible; SSR)',
      vendor: 'SSR',
      platform: 'SSR',
      language: 'en-US',
    },
  };
  
  // @ts-ignore
  if (!global.window) {
    // @ts-ignore
    global.window = windowMock as any;
  } else {
    // @ts-ignore
    if (!global.window.localStorage) {
      // @ts-ignore
      global.window.localStorage = global.localStorage;
    }
    // @ts-ignore
    if (!global.window.location) {
      // @ts-ignore
      global.window.location = locationMock;
    }
    // @ts-ignore
    if (!global.window.addEventListener) {
      // @ts-ignore
      global.window.addEventListener = windowMock.addEventListener;
    }
    // @ts-ignore
    if (!global.window.removeEventListener) {
      // @ts-ignore
      global.window.removeEventListener = windowMock.removeEventListener;
    }
    // @ts-ignore
    if (!global.window.matchMedia) {
      // @ts-ignore
      global.window.matchMedia = windowMock.matchMedia;
    }
  }
  
  // Also set it directly on global for maximum compatibility
  // @ts-ignore
  if (typeof window === 'undefined' && !global.window) {
    // @ts-ignore
    global.window = windowMock;
  }
  
  // Create document mock for SSR
  if (typeof document === 'undefined') {
    // @ts-ignore
    if (!global.document) {
      // @ts-ignore
      global.document = {
        createElement: function(tagName: string) {
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

