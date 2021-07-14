//const meetings = [{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }]
//const meetings = [{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }]
const meetings = [
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
]

function mergeRanges(meetings) {
  const startTimes = []
  const endTimes = []
  
  for (const pair of meetings) {
    startTimes.push(pair["startTime"])
    endTimes.push(pair["endTime"])
  }

  startTimes.sort((a, b) => a - b);
  endTimes.sort((a, b) => a - b);

  const returnTimes = [{
    startTime: startTimes[0],
    endTime: endTimes[0]
  }]

  let offset = 1

  for (let i = 1; i < startTimes.length; i++) {
    if (startTimes[i] <= returnTimes[i - offset]["endTime"]) {
      returnTimes[i - offset]["endTime"] = endTimes[i];
      offset++;
    } else {
      returnTimes.push({
        startTime: startTimes[i],
        endTime: endTimes[i]
      });
    }
  }
  console.log(returnTimes)
  return returnTimes;
}

mergeRanges(meetings)
