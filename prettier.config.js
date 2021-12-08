/**
 * prettier.config.js 파일 설정 관련 참고한 글들
 * 
 * - [official] https://prettier.io/docs/en/options.html
 * - [official] https://prettier.io/docs/en/configuration.html#docsNav
 * - https://velog.io/@kyusung/eslint-prettier-config
 * - https://velog.io/@noyo0123/lint-prettier-%EC%84%A4%EC%A0%95
 */

/**
 * "singleQuote": true,     // 문자열 사용시 따옴표 사용
 * "semi": true,            // 세미콜론 강제
 * "useTabs": false,        // 탭 사용 여부??
 * "tabWidth": 4,           // 인덴트 할때 4칸 기준으로 들여쓰기 진행
 * "trailingComma": "none", // 쉼표로 나눠지는 여러줄의 문장에서 마지막에 comma를 강제할지 말지
 * "printWidth": 150,       // 한줄의 최대 길이(적게 설정하면 파일 저장시 자동 개행됨)
 * "arrowParens": "avoid",  // 화살표 함수 사용할때 파라미터를 무조건 괄호로 묶어줄 것인지
 * "bracketSpacing": true,  // object 리터럴을 나타낼 때 브라켓과 내용 사이에 스페이스를 줄 것 인지
 * "bracketSameLine": true  // JSX 같은 곳에서 > 를 사용할때, 마지막 문장에 같이 사용할지, 아님 무조건 개행을 하고 따로 > 만 저장할지.
 */
module.exports = {
    "singleQuote": true,
    "semi": true,
    "useTabs": false,
    "tabWidth": 4,
    "trailingComma": "none",
    "printWidth": 150,
    "arrowParens": "avoid",
    "bracketSpacing": true,
    "bracketSameLine": true
}