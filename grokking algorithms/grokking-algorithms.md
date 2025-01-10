## Understanding Algorithms

## Topics seen in book to search

- logaritms
- conjuntos

##  1 - Introduction

### Algorithm

- Algorithm is a set of instructions that perform a task.

### Binary Search

- Binary search is a algorithm, our input is a ordered list of elements, if element that we search is on list, the binary search return to us the localization, if not returns none.

- In a simple way, the binary search is a form that we try to reduce the number of interactions that code will have.

- It's important says that binary search only works when our list is ordered.

- lets see some example in RUST:

```rust
//so we have an array of numbers [1, 4, 30, 55, 65, 83, 90, 100] and we want find the number 83.
// log 8 == 3 , so to find the number 83 in a binary search we need  pass for max 3 trys.

pub fn binary_search(array: &[i32], key: i32) -> Option<usize>{
 let mut low = 0;
 let mut high = arr.len() - 1;

  while low <= high {
    let mid = (low + high) / 2;

    if arr[mid] == target {
        return Some(mid);
    } else if arr[mid] < target {
        low = mid + 1;
    } else {
       high = mid - 1;
    }
  }
    None
}

fn main (){
  let arr = [1, 4, 30, 55, 65, 83, 90, 100];
    let target = 83;
    match binary_search(&arr, target) {
        Some(index) => println!("O elemento {} foi encontrado na posição {}", target, index),
        None => println!("O elemento {} não foi encontrado", target),
    }
}
```

- O(n) time of linear runtime
- O(log n) time of logaritmic runtime

### Big O Notation

Big O is a special notation that says how fast is one algorithm, so Big O is
important 'cause as developer we always lead with algorithms so it's important knows how fast or slows the algorithms is.

So also is important says that runtime of simple search and binary search grows different. That's why Big O notation is great, because with it we can know how fast is a algorithm.

For example we have a size n list, so the runtime in Big O is **O(n)**, so this way we can compare the number of operations. Big O notation establishes the runtime for the worst hypothesis

- **Examples of runtime Big O**
- **O(log n)**, knows as logaritmic time - binary search
- **O(n)**, linear time - simple search
- **O(n \* log n)**, ordering algorithm - quicksort
- **O(n2)**, ordering lazy algorithm, ordering by selection
- **O(n!)**, very lazy algorithm, traveling salesman


## 2 -  Selection Sort

Whenever you need to store an item in memory, you request some space from the computer, and it provides you with an address where you can store your item. When you want to store multiple items, there are two primary ways to do so: arrays and lists.

- **Arrays**
  - **Memory:** It requires contiguous memory in the computer, meaning the memory slots are allocated next to each other, one after the other.
  
  - **Add elements to a list:** If we want add a new element in our array, we'll need find a slot in memory large enough for all elements or reserving extrax space early, but to do this is a potential waste of memory.

  - **Reading:** Arrays are fast at reading any element since the address is logically deduced using simple maths. -- O(1)

  - **Inserts:** arrays, you must move all items that are below the address of insertion. -- O(n)

  - **Deletions:** it's like inserts -- O(n)

- **Linked List:**
  - **Memory:** It does not require contiguous memory. Instead, each element contains a reference to the address of the next element in the list.

  - **Add elements to a list:** Easy to update, it's not necessary pre-allocate or reserve memory.
  - **Reading:** linked list are slower since we have to read each element's address to find next elements address. -- O(n)
  
  - **Inserts:** Using linked lists, simply change the address to which the previous element is pointing. -- O(1)


  - **Deletions:** it's like insert -- O(1)


### Selection sort

- Selection sort is an algorithm, and the input is an unordered list of elements. The goal of selection sort is to rearrange the list so that the elements are ordered, typically in ascending or descending order.

- In simple terms, selection sort works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and placing it in its correct position in the sorted portion of the list.

- The key idea is that selection sort reduces the unsorted portion of the list one element at a time by selecting the correct element and placing it in the sorted part.

- It’s important to note that selection sort always makes a number of comparisons equal to the size of the list, regardless of whether the list is already partially sorted or not

- Example with code:
```ocaml

```


## Recursion 
    “Loops may achieve a performance gain for your program. Recursion may achieve a performance gain for your programmer. Choose which is more important in your situation!”     -- Leigh Caldwell


### Base Case and Recursive Case
 Because a recursive function calls itself, it’s easy to write a function incorrectly that ends up in an infinite loop.
```ocaml
let rec loop_infinito () =
  print_endline "Oh no! A Infinite loop appeared";
  loop_infinito ()
```
- the above code will run indefinitely.

Every recursion function has two parts: base case and recursive case. The recursive case is when a function call itself. The base case is when a function not call itself again.

let's rewrite the code above but wih base case:
```ocaml
let rec regressive i =
  print_int i; 
  print_newline ();
  if i <= 1 then  
    ()
  else 
    regressive (i - 1)
```

### The Stack

A call stack is a LIFO ("Last In, First Out") data structure where elements are inserted and removed only from the top. This structure is used to manage the execution of functions or subroutines in a program.

let's see a example:
```ocaml

```
So if I call the function greet("felipe"), the first step computer will allocate a box of memory to this call, after that the pc saves in memory the values of all variables, and finally print "hello, Felipe!".