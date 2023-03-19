const search = function (nums, target) {
    let left = 0,
        right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        if (nums[mid] < target) left = mid + 1;

        if (nums[mid] > target) right = mid - 1;
    }

    return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
