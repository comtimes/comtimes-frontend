// 추가적인 사항들은 해당 링크 참고 :https://velog.io/@junghyeonsu/React-create-react-app-Typescript-%EC%B4%88%EA%B8%B0-%EC%84%B8%ED%8C%85-%EC%99%84%EB%B2%BD-%EC%A0%95%EB%A6%AC
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "prettier"],

  // extends는 ESLint에 적용할 규칙들을 정의하는 곳
  // 밑에 있는 옵션일 수록 높은 우선순위를 가짐
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],

  // 무시하고 싶은 ESLint 규칙을 명시하는 곳
  // "'해당규칙': 0" 이라고 명시하면 해당 규칙을 무시하겠다는 뜻
  rules: {
    "react/react-in-jsx-scope": 0,
    "no-use-before-define": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "linebreak-style": 0,
    // 추가적인 사항들은 문서 상단 링크 참고!
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },

  // 기존에 존재하던 설정들
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
};
