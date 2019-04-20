// Based on https://blog.bitsrc.io/keep-your-promises-in-typescript-using-async-await-7bdc57041308

type msgCallback = (msg: string) => void;

// callback-style
// function takes a callback, then returns the string message in 3 parts, 1000ms apart.
const start = (callback: msgCallback): void => {
  setTimeout(() => {
    callback("hello");
    setTimeout(() => {
      callback("and welcome");
      setTimeout(() => {
        callback("to async/await using TypeScript");
      }, 1000);
    }, 1000);
  }, 1000);
};

// alternative in async-await style
const wait = (ms: number): Promise<void> => new Promise((res) => setInterval(res, ms));

const startAsync = async (callback: msgCallback): Promise<void> => {
  await wait(1000);
  callback("hello");
  await wait(1000);
  callback("and welcome");
  await wait(1000);
  callback("to async/await using TypeScript");
};

// Try them both out

start(console.log);
startAsync(console.log);
