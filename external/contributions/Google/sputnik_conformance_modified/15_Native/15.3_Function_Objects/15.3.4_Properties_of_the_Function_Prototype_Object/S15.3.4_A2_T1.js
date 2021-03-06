// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4_A2_T1;
* @section: 15.3.4;
* @assertion: The Function prototype object is itself a Function object that, when invoked, accepts any arguments and returns undefined;
* @description: Call Function.prototype();
*/

//CHECK#1
try {
  if (Function.prototype() !== undefined) {
    $ERROR('#1: The Function prototype object is itself a Function object that, when invoked, accepts any arguments and returns undefined');
  }
} catch (e) {
  $ERROR('#1.1: The Function prototype object is itself a Function object that, when invoked, accepts any arguments and returns undefined: '+e);
}
