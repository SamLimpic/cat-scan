import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import CatSchema from '../models/Cat'
import VoteSchema from '../models/Vote'
import AccountSchema from '../models/Account'

class DbContext {
  Votes = mongoose.model('Vote', VoteSchema);
  Cats = mongoose.model('Cat', CatSchema);
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
