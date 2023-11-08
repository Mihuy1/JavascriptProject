// Create an array to store the candidates and their votes
let candidates = [];

// Ask for the number of candidates
let numCandidates = prompt("How many candidates are there?");

// Loop through the number of candidates and ask for their names
for (let i = 0; i < numCandidates; i++) {
  let name = prompt(`Name for candidate ${i + 1}`);
  // Create an object for each candidate with their name and votes
  let candidate = {
    name: name,
    votes: 0,
  };
  // Add the candidate to the array
  candidates.push(candidate);
}

// Ask for the number of voters
let numVoters = prompt("How many voters are there?");

// Loop through the number of voters and ask for their votes
for (let i = 0; i < numVoters; i++) {
  let vote = prompt(`Who do you vote for?`);
  // Check if the vote is valid
  if (vote) {
    // Find the candidate with the matching name
    let candidate = candidates.find((c) => c.name === vote);
    // If the candidate exists, increment their votes
    if (candidate) {
      candidate.votes++;
    } else {
      // If the candidate does not exist, alert the voter
      alert("Invalid candidate name");
    }
  } else {
    // If the vote is empty, alert the voter
    alert("Empty vote");
  }
}

// Sort the candidates by their votes in descending order
candidates.sort((a, b) => b.votes - a.votes);

// Get the winner and their votes
let winner = candidates[0].name;
let winnerVotes = candidates[0].votes;

// Print the winner and the results to the console
console.log(`The winner is ${winner} with ${winnerVotes} votes.`);
console.log("results:");
// Loop through the candidates and print their name and votes
for (let candidate of candidates) {
  console.log(`${candidate.name}: ${candidate.votes} votes`);
}
