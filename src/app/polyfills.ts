import 'reflect-metadata';
require('zone.js/dist/zone');

declare var process;

var production = false;

try{
  production = (process.env.ENV === 'production');
}catch(e){}

if (production) {
  // Production
} else {
  // Development
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
