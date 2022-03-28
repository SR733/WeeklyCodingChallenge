/*
Pls provide the link to your solution in the comments section not later than Friday morning.

100 Lockers: There are 100 closed lockers in a hallway. A man begins by opening all 100 lockers. 
Next, he closes every second locker. Then, on his third pass, he toggles every third locker 
(closes it if it is open or opens it if it is closed). This process continues for 100 passes, 
such that on each pass 'i', the man toggles every 'i'th locker. After his 100th pass in the 
hallway, in which he toggles only locker #100, how many lockers are open?
*/
/*
Answer: The state(open or closed) of the lockers will be opened only if the number of factors
is odd. The only lockers opened with the odd factors are the ones that are the perfect squares
(1,4,9,16,25,36,49,64,81,and 100). 
*/

    var lockers = []; //number of lockers
    for(i=0;i<100;i++){
        lockers[i] = 0; //lockers' value = 0; lockers is open
    };
    var count = 0;
    
    function changeLockers(func ,arr){ //change the lockers' value after the person inspects
        for(i=2; i<=arr.length;i++){ //loops that checks lockers
            for(j=0; j<arr.length;j++){ //loops through every lockers
                if(j != 0 && (j+1)%i == 0){ //change the value of the lockers
                    if(arr[j] != 1){
                        arr[j] = 1;
                    } else {
                        arr[j] = 0;
                    }
                }
            }
        } return func(arr) //return the array after lockers have be
    }
function countLockersOpen(arr){
    for(i=0; i<arr.length;i++){
        if(arr[i] == 0){
            count++;
        }
    } return count
}
console.log(`The number of Lockers that are still open 
after a person's 100th pass in the hallway is: 
${changeLockers(countLockersOpen,lockers)}`);
