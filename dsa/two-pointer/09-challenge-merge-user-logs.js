/* 
🚀 Challenge: Merging Two Sorted User Logs

Scenario:
Imagine you are building a log analytics system that processes sorted user logs from two different servers.

Each log contains a timestamp (e.g., 2025-03-31 10:00:05) and is already sorted chronologically in each server’s log file.

Your task is to merge the two logs into a single, chronologically sorted list efficiently.

🔹 Example Input:
logs1 = [
  "2025-03-31 10:00:01",
  "2025-03-31 10:00:05",
  "2025-03-31 10:00:10"
];

logs2 = [
  "2025-03-31 10:00:02",
  "2025-03-31 10:00:06",
  "2025-03-31 10:00:08"
];

🔹 Expected Output:
[
  "2025-03-31 10:00:01",
  "2025-03-31 10:00:02",
  "2025-03-31 10:00:05",
  "2025-03-31 10:00:06",
  "2025-03-31 10:00:08",
  "2025-03-31 10:00:10"
];

🔹 Challenge Goal:
Write a function mergeLogs(logs1, logs2) that merges two sorted log arrays into one sorted log list using the two-pointer approach.

💡 Why Two Pointers?
- Each log list is already sorted, so we can efficiently merge them without sorting again.
- Using two pointers, we can traverse both lists in O(n + m) time, which is much faster than merging and sorting afterward.

*/

/* 
PLAN
[1, 2, 5]
 W  

[3, 4, 6]
 R

output = [1, 2, 3, 4, 5, 6]

*/


function mergeLogs(logs1, logs2) {
    let l1Index = 0, l2Index = 0;
    let merged = [];

    while (l1Index < logs1.length && l2Index < logs2.length) {
        if (logs1[l1Index] < logs2[l2Index]) merged.push(logs1[l1Index++]);
        else merged.push(logs2[l2Index++]);
    }

    while(l1Index < logs1.length) merged.push(logs1[l1Index++]);
    while(l2Index < logs2.length) merged.push(logs2[l2Index++]);

    return merged;

}

//TEST
const logs1 = [
    "2025-02-28 10:00:01",
    "2025-03-31 22:00:05",
  ];
  
const  logs2 = [
    "2022-01-31 10:00:02",
    "2024-08-21 22:00:06",
    "2025-03-31 10:00:08"
  ];

const result = mergeLogs(logs1, logs2);
console.log(result);