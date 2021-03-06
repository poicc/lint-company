module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'vue/multi-word-component-names': 'off'

    // overrides: [
    //   {
    //     files: ['src/components/Hello.vue','src/components/**/Hello.vue'],
    //     rules: {
    //       'vue/multi-word-component-names': 'off'
    //     }
    //   }
    // ]
  }
}
