// Polyfill for localStorage and window.location during SSR
// This needs to run before any code tries to access localStorage or window.location
(function() {
  if (typeof global !== 'undefined') {
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

    if (typeof window === 'undefined') {
      // @ts-ignore
      if (!global.window) {
        // @ts-ignore
        global.window = {
          localStorage: global.localStorage,
          location: {
            protocol: 'http:',
            host: 'localhost:3000',
            hostname: 'localhost',
            port: '3000',
            pathname: '/',
            search: '',
            hash: '',
            href: 'http://localhost:3000/',
            origin: 'http://localhost:3000',
          },
        } as any;
      } else {
        // @ts-ignore
        if (!global.window.localStorage) {
          // @ts-ignore
          global.window.localStorage = global.localStorage;
        }
        // @ts-ignore
        if (!global.window.location) {
          // @ts-ignore
          global.window.location = {
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
        }
      }
    }
  }
})();

