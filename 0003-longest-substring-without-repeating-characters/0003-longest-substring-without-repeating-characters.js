/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //  슬라이딩 윈도우 기법
    let seen = {}; // 이미 등장한 문자와 그 문자가 등장한 인덱스를 저장한 객체, 이 객체로 각 문자의 마지막 위치를 추적
    let start = 0 // 현재 유효한 부분 문자열의 시작 인덱스
    let maxLength = 0; // 반복되지 않는 가장 긴 부분 문자열의 길이

    for (let end = 0; end < s.length; end++) {
    // 현재 문자가 이미 나온 적이 있는지 확인
    if (seen[s[end]] !== undefined) {
        // 중복된 문자가 있으면 start 포인터를 그 다음 인덱스로 이동
        start = Math.max(start, seen[s[end]] + 1);
    }
    
    // 현재 문자의 최신 인덱스를 seen 객체에 저장
    seen[s[end]] = end;

    // 가장 긴 부분 문자열의 길이를 갱신
    maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
};