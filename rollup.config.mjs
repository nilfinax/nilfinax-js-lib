import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';

const production = process.env.NODE_ENV === 'production';

export default [
  // ESM (para bundlers modernos, Node 20+, Deno, Bun):
  {
    input: 'src/index.js',
    output: {
      file: 'dist/nilfinax.esm.mjs',
      format: 'esm',
      sourcemap: true
    },
    plugins: [
      resolve(),
      commonjs(),
      production && terser()
    ]
  },

  // CJS (para Node legado, require()):
  {
    input: 'src/index.js',
    output: {
      file: 'dist/nilfinax.cjs.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'auto'
    },
    plugins: [
      resolve(),
      commonjs(),
      production && terser()
    ]
  },

  // UMD dev (para browser via CDN, com validações, global _NX):
  {
    input: 'src/index.js',
    output: {
      file: 'dist/nilfinax.umd.js',
      format: 'umd',
      name: '_NX',
      sourcemap: true
    },
    plugins: [
      resolve(),
      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
        preventAssignment: true
      })
    ]
  },

  // UMD prod (para browser via CDN, sem validações minificado, global _NX):
  {
    input: 'src/index.js',
    output: {
      file: 'dist/nilfinax.umd.min.js',
      format: 'umd',
      name: '_NX',
      sourcemap: true
    },
    plugins: [
      resolve(),
      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        preventAssignment: true
      }),
      terser()
    ]
  }
];
