// see https://github.com/rozek/build-configuration-study

import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/node-red-javascript-interface-library.js',
  output: [
    {
      file:     './dist/node-red-javascript-interface-library.umd.js',
      format:    'umd', // builds for both Node.js and Browser
      name:      'JIL', // required for UMD modules
      sourcemap: true,
      plugins: [terser({ format:{ comments:false, safari10:true } })],
    },{
      file:     './dist/node-red-javascript-interface-library.esm.js',
      format:   'esm',
      sourcemap:true,
    },{
      file:     './dist/node-red-javascript-interface-library.iife.js',
      format:   'iife',
      name:     'JIL',
      sourcemap:true,
    }
  ],
};