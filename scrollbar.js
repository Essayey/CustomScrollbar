let mech = document.createElement('div');
mech.style.height = `${window.innerHeight}px`;
mech.id = 'scrollBar';


let gear = document.createElement('div');
gear.id = 'scrollBarGear';
// Gear initital position position 
let angle = 32;
let scrollRatio = (document.body.scrollHeight - (window.innerHeight - 92))/(window.innerHeight - 92);
let gearTop;
calculatePosition();

//
let th = document.createElement('div');
th.style.height = `${window.innerHeight}px`;
th.id = 'scrollBarRack';



document.body.appendChild(gear);
document.body.appendChild(th);
document.body.appendChild(mech);
let mechNode = document.getElementById('scrollBar');
console.log(mechNode);

window.addEventListener('scroll', calculatePosition);

window.addEventListener('resize', () => {
    scrollRatio = (document.body.scrollHeight - (window.innerHeight - 92))/(window.innerHeight - 92);
    calculatePosition();
    th.style.height = `${window.innerHeight}px`;
    mech.style.height = `${window.innerHeight}px`;
});

mechNode.addEventListener('click', function(e){
    window.scrollTo({
        top: (e.pageY - window.scrollY) * scrollRatio,
        behavior: "smooth"
    });
    calculatePosition();
});


mechNode.addEventListener('mousedown', function(e){
    
    document.onselectstart = (e) => {return false;}
    document.onmousedown = (e) => {return false;}
    onmousemove = function(e) {
        window.scrollTo({
            top: (e.pageY - window.scrollY) * scrollRatio,
            behavior: "auto"
        });   
        calculatePosition(); 
     }
});


window.addEventListener('mouseup', function(e){
    onmousemove = null;
    document.onselectstart = (e) => {return true;}
    document.onmousedown = (e) => {return true;}
});


function calculatePosition(){
    gear.style.transform = `rotate(${angle - (window.scrollY/45.95 * (180.0/Math.PI)) / scrollRatio}deg)`
    gearTop = window.scrollY / scrollRatio;
    gear.style.top = `${gearTop}px`;
}

let state = true;
function foo(){
    if(state){
        // do
        state = false;
    }

}