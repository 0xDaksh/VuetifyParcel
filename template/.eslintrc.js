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
    extends: 'airbnb-base'
    {{/if_eq}}
  }