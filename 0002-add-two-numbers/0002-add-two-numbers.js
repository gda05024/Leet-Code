/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0; // 올림 값
    let result = []; // 결과를 담을 배열 (연결 리스트 대신 배열 사용)
    
    // 두 리스트가 다 끝날 때까지 계속 더한다
    while (l1 !== null || l2 !== null || carry !== 0) {
        let val1 = l1 ? l1.val : 0; // l1이 있으면 val1에 l1의 값, 없으면 0
        let val2 = l2 ? l2.val : 0; // l2가 있으면 val2에 l2의 값, 없으면 0

        let sum = val1 + val2 + carry; // 두 값과 carry를 더함
        carry = Math.floor(sum / 10); // sum이 10 이상이면 carry에 1을 넘김
        result.push(sum % 10); // 결과 값의 일의 자리만 추가

        // l1과 l2 리스트의 다음 노드를 확인
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    // 배열을 연결 리스트로 변환하여 반환
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of result) {
        current.next = new ListNode(num);
        current = current.next;
    }
    
    return dummy.next; // 첫 번째 더미 노드를 제외하고 반환
};
