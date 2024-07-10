package main

/*
1 - Two Sum
Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/

func twoSum(nums []int, target int) []int {
	hasher := make(map[int]int)

	for idx, num := range nums {
		complement := target - num
		if complementIdx, ok := hasher[complement]; ok {
			return []int{complementIdx, idx}
		}
		hasher[num] = idx
	}
	return nil
}

func main() {

}

/* Description in Steps about solution
1 - Initiate map

2 - Loop of numbers

3- Complement calc

4- Verify the map

5- Index pair return

6- Update map

7- Finish loop

8- Return nil if the sum not equal target


*/
