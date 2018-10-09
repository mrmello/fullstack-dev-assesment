const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampaignSchema = new Schema({
  id:   { type: Number, required: true , unique: true},
  name: { type: String, require: true},
  goal: { type: String, required: true},
  total_budget: { type: Number, required: true},
  status: { type: String, required: true},
  platforms: { type: Object, required: true},
});

module.exports = Campaign = mongoose.model('data', CampaignSchema);
