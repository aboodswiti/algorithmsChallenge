export function electionsWinners(votes: number[], k: number): number {
    let count = 0;
    const maxVotes = Math.max(...votes);
    const sortedVotes = votes.sort((a, b) => b - a)
    if (sortedVotes[0] !== sortedVotes[1] && k == 0) return 1;

    for (let i = 0; i < votes.length; i++) {
        let candidate = votes[i] + k;
        if (candidate > maxVotes) count++
    }
    return count;
}

console.log(electionsWinners([2, 3, 5, 2], 3));
console.log(electionsWinners([4, 3, 5, 2], 0));
