const skills = [
    {skill: 'JavaScript', learned: true},
    {skill: 'Express', learned: false},
    {skill: 'HTML', learned: true}
];


module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
    
};

function deleteOne(id) {
    skills.splice(id, 1);
}

function update(id, skill) {
    skills.splice(id, 1, skill);
}

function create(skill) {
    skills.push(skill);
}

function getOne(id) {
    return skills[id];
}

function getAll() {
    return skills;
}