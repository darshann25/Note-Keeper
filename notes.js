// console.log('Starting notes.js');

module.exports.age = 23;

module.exports.addNote = () => {
    console.log('addNote');
    return 'New Note';
};

module.exports.add = (a, b) => {
    return a + b
}