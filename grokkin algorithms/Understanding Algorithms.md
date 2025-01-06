## Understanding Algorithms

## Topics seen in book to search

- logaritms
- conjuntos

## Algorithm

- Algorithm is a set of instructions that perform a task.

## Binary Search

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

## Big O Notation

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
