const merge = (arr1, arr2) => {
  let i = 0
  let j = 0
  let resultArray = []
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      resultArray.push(arr1[i])
      i++
    } else {
      resultArray.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    resultArray.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    resultArray.push(arr2[j])
    j++
  }
  console.log(resultArray)
  console.log(resultArray.length)
  return resultArray
}

const mergeSort = arr => {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

console.log(mergeSort([1, 10, 30, 40, 2, 14, 50, 99, 100]))
