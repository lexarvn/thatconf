import { Command, flags } from '@oclif/command'
import axios from 'axios'

export default class Speakers extends Command {
  static description = 'command for looking up speakers'

  static flags = {
    help: flags.help({ char: 'h' }),
    year: flags.string({ char: 'y', description: 'year', default: '2018' }),
    title: flags.string({ char: 't', description: 'title contains term'}),
    company: flags.string({ char: 'c', description: 'company contains term'}),
    json: flags.boolean({ description: 'format output as json' })
  }

  async run() {
    const { args, flags } = this.parse(Speakers)

    let url = `https://www.thatconference.com/api3/speakers/getspeakers?year=${flags.year}`

    let { data } = await axios.get(url)

    if (flags.title) {
      data = data.filter((speakers: any) => speakers.Title != null)
      data = data.filter((speakers: any) => speakers.Title.toLowerCase().indexOf(flags.title!.toLowerCase()) > -1)
    }

    if (flags.company) {
      data = data.filter((speakers: any) => speakers.Company != null)
      data = data.filter((speakers: any) => speakers.Company.toLowerCase().indexOf(flags.company!.toLowerCase()) > -1)
    }

//str.indexOf(st) > -1

    if (flags.json) {
      this.log(JSON.stringify(data))
    } else {

      for (let speaker of data) {
        const firstName = speaker.FirstName.trim()
        const lastName = speaker.LastName.trim()

        let twitter = ''
        if (speaker.Twitter) {
          twitter = ` (https://twitter.com/${speaker.Twitter})`
          twitter = twitter.replace('@','')
        }

        let title = ''
        if (speaker.Title) {
          title = ` ${speaker.Title}`
        }

        let company = ''
        if (speaker.Company) {
          company = ` at ${speaker.Company}`
        }

        if (title || company) {
          title = `,${title}`
        }

        this.log(`${firstName} ${lastName}${twitter}${title}${company}`)
      }
    }
  }
}
