const mongoose = require('mongoose');

const topicsSchema = new mongoose.Schema(
    {
        topic: { type: String },
        
        // Change the slides field to an array of objects
        slides: [
            {
                text: { type: String },
                imageUrl: { type: String }
            }
        ],

    },
    {
        collection: 'subTopics'
    }
);

const SubTopicsNotes = mongoose.model('subTopicsNotes', topicsSchema);

SubTopicsNotes.on('error', (err) => {
    console.error('Mongoose SubTopics Model Error:', err);
});

module.exports = SubTopicsNotes;
