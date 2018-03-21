
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
// ]
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
var frames = [
  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
]

function getResult (arr) {
  let totalScore = 0
  for (let i = 0; i < arr.length; i++) {
    const status = checkStatus(arr[i])
    if (i === 8) {
      if (status === 1) {
        totalScore += currentScore(arr[i])
      } else if (status === 2) {
        totalScore += currentScore(arr[i], arr[i + 1])
      } else {
        totalScore += 10 + arr[9][0] + arr[9][1]
      }
    } else if (i === 9) {
      if (arr[9][2]) {
        totalScore += arr[9][0] + arr[9][1] + arr[9][2]
      } else {
        totalScore += arr[9][0] + arr[9][1]
      }
    } else {
      if (status === 1) {
        totalScore += currentScore(arr[i])
      } else if (status === 2) {
        totalScore += currentScore(arr[i], arr[i + 1])
      } else if (status === 3) {
        totalScore += currentScore(arr[i], arr[i + 1], arr[i + 2])
      }
    }
  }
  return totalScore
}
// 1 means open, 2 means close-spare, 3 means close-strike
function checkStatus (arr) {
  const subArrScore = arr[0] + arr[1]
  if (subArrScore < 10) {
    return 1
  } else if (arr[0] < 10 && subArrScore === 10) {
    return 2
  } else {
    return 3
  }
}

function currentScore (currentArr, nextArr, lastArr) {
  const status = checkStatus(currentArr)
  if (status === 1) {
    return currentArr[0] + currentArr[1]
  } else if (status === 2) {
    return 10 + nextArr[0]
  } else if (status === 3) {
    if (nextArr[0] === 10) {
      return 20 + lastArr[0]
    } else {
      return 10 + nextArr[0] + nextArr[1]
    }
  }
}
