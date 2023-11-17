const mongoose = require('mongoose');

const topicsSchema = new mongoose.Schema(
    {
        Subject: { type: String },
        topicname: { type: String },
        
        // Representing a list of subtopics associated with the topic
        subtopics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'subTopics' }]
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
