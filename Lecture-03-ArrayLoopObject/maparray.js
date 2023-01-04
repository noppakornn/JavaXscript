const finalParticipants = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];

const announcement = finalParticipants.map((member) => {
    return member + " joined the contest.";
});

console.log(announcement);