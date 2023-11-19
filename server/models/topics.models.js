const mongoose = require('mongoose');

const topicsSchema = new mongoose.Schema(
    {
        topicname: { type: String },
        subject: { type: mongoose.Schema.Types.ObjectId, ref: 'subjects' },
        subtopics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'subtopics' }]
    },
    {
        collection: 'topics'
    }
);


const Topics = mongoose.model('topics', topicsSchema);

Topics.on('error', (err) => {
    console.error('Mongoose Topics Model Error:', err);
});

module.exports = Topics;
