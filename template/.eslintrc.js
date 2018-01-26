module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module'
    },
    env: {
      browser: true,
    },
    {{#if_eq lintConfig "standard"}}
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    {{/if_eq}}
    {{#if_eq lintConfig "airbnb"}}
    extends: 'airbnb-base',
    {{/if_eq}}
    // required to lint *.vue files
    plugins: [
      'html'
    ],
    rules: {
      {{#if_eq lintConfig "standard"}}
      // allow async-await
      'generator-star-spacing': 'off',
      {{/if_eq}}
      {{#if_eq lintConfig "airbnb"}}
      // don't require .vue extension when importing
      'import/extensions': ['error', 'always', {
        js: 'never',
        vue: 'never'
      }],
      // disallow reassignment of function parameters
      // disallow parameter object manipulation except for specific exclusions
      'no-param-reassign': ['error', {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e' // for e.returnvalue
        ]
      }],
      // allow optionalDependencies
      'import/no-extraneous-dependencies': ['error', {
        optionalDependencies: ['test/unit/index.js']
      }],
      {{/if_eq}}
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
  }