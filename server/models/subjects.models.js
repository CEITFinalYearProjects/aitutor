const mongoose = require('mongoose');

const subjectsSchema = new mongoose.Schema(
    {
        subjectName: { type: String },
        classLevels: { type: String },
        
        // Representing a list of topics associated with the subject
        topics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'topics' }]
    },
    {
        collection: 'subjects'
    }
);

const Subjects = mongoose.model('subjects', subjectsSchema);

Subjects.on('error', (err) => {
    console.error('Mongoose Subjects Model Error:', err);
});

module.exports = Subjects;
