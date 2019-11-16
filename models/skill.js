const skills = [
    {skill: 'JavaScript', learned: true},
    {skill: 'Express', learned: false},
    {skill: 'HTML', learned: true}
];


module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne
};

function deleteOne() {
    skill.splice(id, 1);
}

function update() {
    skill.splice(id, 1, skill);
}

function create() {
    skills.push(skills);
}

function getOne(id) {
    return skills[id];
}

function getAll() {
    return skills;
}idk