/* @flow */

let supportsCaptureOption = false;
try {
  let opts = (Object:any).defineProperty({}, 'capture', {
    get: function() {
      supportsCaptureOption = true;
    }
  });
  window.addEventListener('test', null, opts);
} catch (e) {
  //ignore
}

export default supportsCaptureOption;
