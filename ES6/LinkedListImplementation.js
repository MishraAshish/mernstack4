//Javascript data structure => Implementing the linked list

class LinkedList {
    constructor(){
        this.head = null; //First element of the list
        this.tail = null; //Last element of the list
    }

    append(value) {
        const newNode = {value: value, next:null}

        if(this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;

        if(!this.head){
            this.head = newNode;
        }
    }

    prepend(value) {
        const newNode = {value: value, next : this.head}
        
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
    }

    find(value){
        if (!this.head) {
            return null;
        }

        let currNode = this.head;

        while(currNode){
            if (currNode.value === value) {
                return currNode;
            }
            currNode = currNode.next;
        }

        return null;
    }


    delete(value) {
        if (!this.head) {
            return;
        }

        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let currNode = this.head;

        while (currNode.next) {
            if (currNode.next.value === value) {
                currNode.next = currNode.next.next;
            } else {
                currNode = currNode.next;
            }
        }

        if (this.tail && this.tail.value === value) {
            this.tail = currNode;
        }
    }

    insertAfter(value, afterValue) {
        const existingNode = this.find(afterValue);

        if (existingNode) {
            const newNode = {value : value, next : existingNode.next}
            existingNode.next = newNode;
        }
    }


    toArray(){
        const elements = [];

        let currNode = this.head;
        while(currNode){
            elements.push(currNode);
            currNode = currNode.next;
        }

        return elements;
    }
}

const linkedList1 = new LinkedList();

linkedList1.append(1)
linkedList1.append("Test")
linkedList1.append("teada")
linkedList1.append(true)
linkedList1.prepend("Ashish")
linkedList1.prepend("Javascript Developer")
console.log(linkedList1.toArray())

linkedList1.delete("Test")
console.log(linkedList1.toArray())

console.log(linkedList1.find("Test"))
console.log(linkedList1.find("Ashish"))

linkedList1.insertAfter("New Value Test - 1","Ashish")

console.log(linkedList1.toArray())