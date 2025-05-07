const mongoose = require('mongoose');

const PartnerSchema = new mongoose.Schema({
    instituteName : {
        type: String,
        required: true,
    },
    instituteType: {
      type: String,
    //   required: true
    },
    contactPerson: {
      type: String,
    //   required: true
    },
    position: {
      type: String,
    //   required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    estimatedStudents: {
      type: Number,
    //   required: true
    },
    needs: {
      type: String,
    //   required: true
    }
})

module.exports = mongoose.model('Partner', PartnerSchema)

