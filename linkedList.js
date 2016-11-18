/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
	let head = null;

	function getHead() {
		return head;
	}

	function getTail() {
		let curNode = head;
		while( curNode !== null){
			if(curNode.next !== null){
				curNode = curNode.next;
			}else{
				return curNode;
			}
		}
		return curNode;
	}
	function add(newValue){
		let tail = getTail();
		let newNode = {
			value : newValue,
			next : null
		};
		if (tail === null) {
			head = newNode;
		}else{
			tail.next = newNode;
		}
		return newNode;
	}

	function get(number) {
		let curNode = head;
		for (let i = 0; i < number; i++)
			if (curNode.next === null) {
				return false;
			}else{
				curNode = curNode.next;	
			}
		return curNode;
	}

	function insert() {
		// body...

	}
	function remove() {
		newNode.remove();
	}

	return {getHead: getHead,
			getTail: getTail,
			add: add,
			get: get
			};
	
}
/*let ll = linkedListGenerator();
ll.add('dog');
ll.add();
ll.add();
ll.add();
ll.add();
ll.add();
ll.add();
var theHead = 
var theTail = 
console.log(head);*/

