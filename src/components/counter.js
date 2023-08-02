import { generateUniqueId } from "../generateUniqueId";

let i =0;

class Counter {
    constructor(){
        this.count = 0;
        this.uniqueId=generateUniqueId(i.toString());
        i++;
    }

    increment(){
        this.count++;
        this.updateDOM();
    }

    decrement(){
        this.count--;
        this.updateDOM();
    }

    updateDOM(){
        const counterValue = document.getElementById(this.uniqueId);
        counterValue.innerText = `Count: ${this.count}`;
    }

    render(){
        const counterContainer = document.createElement("div");
        const counterValue = document.createElement("p");
        const incButton = document.createElement("button");
        const decButton = document.createElement("button");

        counterValue.innerText = `Count: ${this.count}`;
        incButton.innerText = "+";
        decButton.innerText = "-";

        counterContainer.classList.add("counterContainer");
        counterValue.id = this.uniqueId;
        incButton.id = "incrementBtn";
        decButton.id = "decrementBtn";

        counterContainer.appendChild(counterValue);
        counterContainer.appendChild(incButton);
        counterContainer.appendChild(decButton);

        incButton.addEventListener('click', this.increment.bind(this));
        decButton.addEventListener('click', this.decrement.bind(this));

        return counterContainer;
    }

    mount(el){
        if(el){
            el.appendChild(this.render());
            return;
        }
        document.body.appendChild(this.render());
        return;
    }
}

export default Counter;