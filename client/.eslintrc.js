
module.exports = {
    "parser":  '@typescript-eslint/parser', 
    "extends": ['plugin:@typescript-eslint/recommended','plugin:prettier/recommended'], 
      "env": {
          "browser": true,
          "es6": true
      },
      "rules": {
        "prettier/prettier": 1, //  eslint-plugin-prettier 使用prettier作为eslint规则
        "semi": ["error", "never"] // 禁止使用分号
      }
  };