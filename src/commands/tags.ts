import {Command, flags} from '@oclif/command'
import axios from 'axios'

export default class Tags extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    year: flags.string({char: 'y', description: 'year', default: '2018'})
  }

  static args = [{name: 'file'}]
  async run() {
    const {args, flags} = this.parse(Tags)
    const url = `https://www.thatconference.com/api3/Session/GetAcceptedSessions?year=${flags.year}`
    let {data} = await axios.get(url)


    var allTags:string[] = new Array() 

    for (let user of data) {

      let tags = user.Tags


      for (let tag of tags.keys()) {
        let name = tags[tag];
        allTags.push(name)
      }

    }

    // this.log(allTags.count)

    var uniqueTags = Array.from(new Set(allTags))
    // this.log(uniqueTags.count)

    for (let tag of uniqueTags) {
      // this.log(tag.Name)
    }
  }
}