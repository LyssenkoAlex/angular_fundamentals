const { Observable, forkJoin, of} = require('rxjs');
const {
  distinctUntilChanged,
  switchMap,
  catchError,
  pluck,
  map,
} = require('rxjs/operators');

const userActionEmulation$ = new Observable(observer => {
  setTimeout(() => observer.next({ value: 'A' }), 1000);
  setTimeout(() => observer.next({ value: 'B' }), 1500);
  setTimeout(() => observer.next({ value: 'B' }), 1600);
  setTimeout(() => observer.next({ value: 'C' }), 2000);
  setTimeout(() => observer.next({ value: 'D' }), 3500);
  setTimeout(() => observer.next({ value: 'E' }), 3500);
  setTimeout(() => observer.next({ value: 'E' }), 5000);
  setTimeout(() => observer.complete(), 5001);
});

const sucessRequestEmulation$ = new Observable(observer => {
  setTimeout(() => {
    observer.next({ value: `It's a response value` });
    observer.complete();
  }, 600);
});

const errorRequestEmulation$ = new Observable(observer => {
  setTimeout(() => {
    observer.error({ error: `It's error from the server` });
    observer.complete();
  }, 1000);
});

userActionEmulation$.pipe(
// YOUR CODE STARTS HERE
    pluck('value'),
    map(val => {if (val === 'C' || val === 'E') return val;}),
    distinctUntilChanged(),
    switchMap(value => errorRequestEmulation$.pipe(
        catchError(error => {
          const obj = {value, error: error.error};
          return of(obj);})
    )),
    switchMap(value => sucessRequestEmulation$.pipe(
        pluck('value'),
        map(response => `Value - ${value.value}; Response - ${response}; Error - ${value.error}`)))

// YOUR CODE ENDS HERE
).subscribe(
  (result) => console.log(result),
  (err) => { throw err },
  () => console.log('Execution ended'),
);

console.log('Execution started');

// Expected output !console.log!:

// Execution started
// Value - C; Response - It's a response value; Error - It's error from the server
// Value - E; Response - It's a response value; Error - It's error from the server
// Execution ended
