const swap = (arr, index1, index2) => {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

const pivot = (arr, start = 0, end = arr.length + 1) => {
  let pivot = arr[start]
  let swapIndex = start

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++
      swap(arr, swapIndex, i)
    }
  }
  swap(arr, start, swapIndex)
  console.log(arr)
  return swapIndex
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)
    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)
  }
}

quickSort([4, 8, 2, 1, 5, 9, 6, 18])
