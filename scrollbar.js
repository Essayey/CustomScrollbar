let mech = document.createElement('div');
mech.style.height = `${window.innerHeight}px`;
mech.id = 'scrollBar';


let gear = document.createElement('div');
gear.insertAdjacentHTML("beforeend",'<svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.1416 5.8928L37.1286 10.7699C33.592 11.667 30.2781 13.0731 27.2453 14.9101L23.7404 11.3946C22.7963 10.4454 21.5349 9.92174 20.1941 9.91816C18.8552 9.91459 17.589 10.4355 16.6419 11.3756L10.7887 17.2037C8.8864 19.0938 8.87956 22.4059 10.7677 24.2982L14.3903 27.9622C12.6372 30.9514 11.2838 34.1578 10.4098 37.6918L5.19048 37.6778C2.42273 37.6705 0.141394 39.8758 0.134007 42.6435L0.111957 50.9047C0.10457 53.6725 2.37419 55.8559 5.14194 55.8633L10.3592 55.8772C11.2123 59.4138 12.5506 62.6474 14.2897 65.6499L10.6476 69.2926C8.74538 71.1807 8.73854 74.4948 10.6267 76.399L16.4488 82.2543C17.3808 83.1934 18.6722 83.7312 19.9931 83.7347C21.3319 83.7383 22.5941 83.2233 23.5432 82.2772L27.0748 78.7804C30.0978 80.6317 33.4041 82.0574 36.9359 82.9714L36.9229 87.8505C36.9155 90.6202 39.1349 92.8616 41.8967 92.8689L50.1519 92.891C52.9216 92.8984 55.103 90.6688 55.1104 87.899L55.1234 83.0199C58.66 82.1248 61.9939 80.7188 65.0267 78.8857L68.5456 82.4013C69.4896 83.3525 70.7551 83.8762 72.0959 83.8798C73.4368 83.8833 74.7049 83.3644 75.6541 82.4203L81.5113 76.5922C82.4605 75.6462 82.9842 74.3888 82.9877 73.0499C82.9913 71.7111 82.4723 70.4489 81.5303 69.4978L77.9058 65.8197C79.6609 62.8265 81.0144 59.6001 81.8903 56.0682L87.1016 56.0821C89.8694 56.0894 92.1066 53.918 92.114 51.1503L92.136 42.8891C92.1434 40.1213 89.9179 37.904 87.1502 37.8966L81.9369 37.8827C81.0818 34.3441 79.7455 31.1305 78.0064 28.128L81.6424 24.5014C82.5955 23.5553 83.1192 22.2959 83.1228 20.953C83.1264 19.6122 82.6074 18.348 81.6653 17.3989L75.8433 11.5396C74.9012 10.5905 73.6398 10.0688 72.3009 10.0612C70.9601 10.0577 69.6999 10.5786 68.7488 11.5207L65.1972 15.0134C62.1722 13.1642 58.8439 11.7404 55.3161 10.8244L55.3291 5.94534C55.3365 3.17759 53.1672 0.896353 50.3974 0.88896L42.1422 0.866927C39.3805 0.857554 37.149 3.12505 37.1416 5.8928ZM61.8619 46.9409C61.8385 55.7024 54.7811 62.7881 46.1057 62.765C37.4242 62.7418 30.4147 55.6186 30.4381 46.857C30.4615 38.0935 37.5089 31.0038 46.1904 31.027C54.8678 31.0521 61.8853 38.1774 61.8619 46.9409Z" fill="rgba(40,200,100,0.5)"/></svg>')
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