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

		function insert(value, index){
        // reference previous node (index-1)
        // curnode = the val being added becomes prevNode's next
        
        if (index === 0) {//change to accommodate the _getLength(): should be
            //if(index===0 ||| index>_getLength()) {return false;}
        //else if(index===0){}
            //handle case for NewNode being new head
                let newNode = {
                    value: value,
                    next: null
                };
                let nextNode = getHead(); // set it to the head
                newNode.next = nextNode;
                head = newNode;
        } else {
            //reference previous node
                let prevNode = get(index-1); //check for index 0 later
                //reference next node
                let nextNode = prevNode.next;
                //curNode(the value being added) becomes prevNode's next
                let curNode = {
                    value: value,
                    next: null
            };
            //insert curnode at index
            prevNode.next = curNode;
            //join cur node with rest of the list
            curNode.next = nextNode;
        }
        return true;
    }

	function remove(number){
		let priorNode = get(number-1);
		let curNode = get(number);

       	if(curNode === false){
         	return false;
       	}
       
       	if(curNode.next === null){
       		priorNode.next = null;
       		return;
       	}
       
       	if(number === 0){
        	head = head.next;
       	}

       	priorNode.next = curNode.next;

    }
	
	return {getHead: getHead,
			getTail: getTail,
			add: add,
			get: get,
			insert: insert,
			remove: remove
			};
	
}
/*let ll = linkedListGenerator();
ll.insert(20);

console.log(head);*/

