// O(n)
// to know is O(n) is look for loop
function sum_char_code(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i);
  }
  return sum;
}

// O(n)
function sum_char_code2(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i);
  }
  
  for (let i = 0; i < n.length; ++i){
    sum += n.charCodeAt(i);
  }
  return sum;
}

// O(N)
function sum_char_code3(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    const charCode = n.charCodeAt(i);
    // capital E
    if (charCode === 69){
      return sum;
    }
    sum += n.charCodeAt(i);
  }
  return sum;
}

// O(N'2)
function sum_char_code4(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    for (let j = 0; j < n.length; ++j){
        sum += n.charCodeAt(i);                          
    }
  }
  return sum;
}

//O(N'3)
function sum_char_code5(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    for (let j = 0; j < n.length; ++j){
      for (let k = 0; k < n.length; ++k){
        sum += n.charCodeAt(i);  
      }              
    }
  }
  return sum;
}