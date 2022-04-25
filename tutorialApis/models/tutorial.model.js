const { default: mongoose } = require("mongoose");

module.exports = mongoose => {
    const Tutorial = mongoose.model(
        'turorial', mongoose.Schema(
            {
                title: String,
                description: String,
                published: Boolean
            },
            {timestamps: true}
        )
    );
    return Tutorial;
};
