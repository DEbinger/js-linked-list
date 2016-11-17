/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
	var head = null;
	function getHead() {
		return head;
	}
	function getTail() {
		var curNode = head;
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
		var tail = getTail();
		var newNode = {
			value : newValue,
			next : null
		};
			if (tail !== null) {
				curNode = curNode.newNode;
			}else{
			return newNode;
			}
}
/*	function remove() {
		newNode.remove();
	}*/
	function get() {
		// body...
	}
	function insert() {
		// body...

	}
	return {getHead: getHead,
			getTail: getTail,
			add: add,
			};
	
}
/*var ll = linkedListGenerator();
ll.add();
ll.add();
ll.add();
ll.add();
ll.add();
ll.add();
ll.add();
var theHead = 
var theTail = 
console.log(theHead);

*/