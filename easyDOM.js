////////////////////////////
export class div{
    constructor(parent,item,count=1){
        this.count;
        this.parent;
        this.item;

        for (let i = 0; i < count; i++) {
            const a = document.createElement("div");
            a.classList.add(item);
            parent.append(a);
        }
        const classItem = "." + item;
        if(count == 1){
            const it = document.querySelector(classItem);
            return it;
        }else{
            const it = document.querySelectorAll(classItem);
            return it;
        }
    }
}
/////////////////////////////////
export class img{
    constructor(parent,item,link){
        this.parent;
        this.item;
        this.link;

        const a = document.createElement("img");
        a.classList.add(item);
        parent.append(a);
        a.src = link;

        const classItem = "." + item;

        const it = document.querySelector(classItem);
        return it;
    }
}
////////////////////////////////
export class toDom{
    constructor (ele, x, className, itemParent){
     this.name;
     this.x;
     this.ele;
     this.className;
     this.itemParent;
    
     for (let i = 0; i < x; i++) {
        const name = document.createElement(ele);
        name.classList.add(className);
        itemParent.append(name);
     }
     return name;
 }
 }
 /////////////////////////////////////////////
export class fromDom {
    constructor(count, itemClass){
        this.name;
        this.count;
        this.itemClass;
        

        if(count==1){
            const name = document.querySelector(itemClass);
            return name;
        }else{
            const name = document.querySelectorAll(itemClass);
            return name;
        }
        
    }
}
///////////////////////////////////////////////////
export class nodeDom{
    constructor(domElement,count,itemClass,itemParnt){
        this.name;
        this.domElement;
        this.cou;
        this.itemClass;
        this.itemParnt;

        new toDom(domElement, count, itemClass, itemParnt);
        const newClass = "." + itemClass;
        return name = new fromDom(count, newClass);
    }
}
////////////////////////////////////////////////////