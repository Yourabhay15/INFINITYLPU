// This file runs at the very beginning of the Next.js application
// It's used to set up polyfills before any other code runs

// Run polyfills immediately (synchronously) before async register
if (typeof global !== 'undefined') {
  // Create localStorage mock if it doesn't exist
  if (!global.localStorage) {
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

    // @ts-ignore
    global.localStorage = localStorageMock;
  }
  
  // Ensure window object exists with localStorage, location, and common methods
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
  
  // Create document mock for SSR
  if (typeof document === 'undefined') {
    // @ts-ignore
    if (!global.document) {
      // @ts-ignore
      global.document = {
        createElement: function(tagName: string): any {
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
          } as any;
        },
        createElementNS: function(): any {
          return {} as any;
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
      } as any;
    }
  }
}

export async function register() {
  // Polyfills are already set up synchronously above
  // This function is kept for Next.js instrumentation API compatibility
}

