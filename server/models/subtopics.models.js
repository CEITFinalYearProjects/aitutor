const mongoose = require('mongoose');

const topicnotesSchema = new mongoose.Schema(
    {
        topic: { type: mongoose.Schema.Types.ObjectId, ref: 'topics' },
        
        // Change the slides field to an array of objects
        slides: [
            {
                text: { type: String },
                imageUrl: { type: String }
            }
        ],

    },
    {
        collection: 'topicnotes'
    }
);

const topicnotes = mongoose.model('topicnotes', topicnotesSchema);

topicnotes.on('error', (err) => {
    console.error('Mongoose subtopics Model Error:', err);
});

module.exports = topicnotes;
