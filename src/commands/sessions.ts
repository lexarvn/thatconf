import {Command, flags} from '@oclif/command'
import axios from 'axios'
import * as moment from 'moment'

export default class Sessions extends Command {
  static description = 'command for looking up sessions'

  static flags = {
    help: flags.help({char: 'h'}),
    year: flags.string({char: 'y', description: 'year', default: '2018'}),
    level: flags.string({char: 'l', description: 'level'}),
    primary: flags.string({char: 'p', description: 'primary category', options: ['ALM', 'Architecture', 'ARVR', 'Cloud', 'DataStorage', 'DevOps', 'IoTMaker', 'Languages', 'MobileClient', 'SoftSkills', 'Security', 'Testing', 'Tools', 'UxUi', 'Web', 'Other', 'Family', 'Keynote', 'THAT Conference', 'Open Spaces', 'Precon', 'FamilyPrecon'] }),
    secondary: flags.string({char: 's', description: 'secondary category', options: ['ALM', 'Architecture', 'ARVR', 'Cloud', 'DataStorage', 'DevOps', 'IoTMaker', 'Languages', 'MobileClient', 'SoftSkills', 'Security', 'Testing', 'Tools', 'UxUi', 'Web', 'Other', 'Family', 'Keynote', 'THAT Conference', 'Open Spaces', 'Precon', 'FamilyPrecon'] }),
    day: flags.string({char: 'd', description: 'day of conference', options: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday']}),
    title: flags.string({ char: 't', description: 'session title contains term'}),
    name: flags.string({ char: 'n', description: 'name of speaker'}),
    json: flags.boolean({description: 'format output as json'})
  }

  async run() {
    const {flags} = this.parse(Sessions)
    let url = `https://www.thatconference.com/api3/Session/GetAcceptedSessions?year=${flags.year}`
    let {data} = await axios.get(url)

    if (flags.level) {
      data = data.filter((sessions: any) => sessions.Level === flags.level)
    }

    if (flags.primary) {
      data = data.filter((sessions: any) => sessions.PrimaryCategory === flags.primary)
    }

    if (flags.secondary) {
      data = data.filter((sessions: any) => sessions.SecondaryCategory === flags.secondary)
    }

    if (flags.day) {
      data = data.filter((sessions: any) => moment(sessions.ScheduledDateTime).format('dddd') === flags.day)
    }

    if (flags.title) {
      data = data.filter((sessions: any) => sessions.Title != null)
      data = data.filter((sessions: any) => sessions.Title.toLowerCase().indexOf(flags.title!.toLowerCase()) > -1)
    }

    if (flags.name) {
      data = data.filter((sessions: any) => (sessions.Speakers[0].FirstName.toLowerCase() + ' ' + sessions.Speakers[0].LastName.toLowerCase()).indexOf(flags.name!.toLowerCase()) > -1)
    }

    if (flags.json) {
      this.log(JSON.stringify(data))
    } else {
      let lastDayName;

      for (let session of data) {
        var dayName = moment(session.ScheduledDateTime).format('dddd')
        const title = session.Title.trim()
        const firstName = session.Speakers[0].FirstName.trim()
        const lastName = session.Speakers[0].LastName.trim()

        if (dayName != lastDayName && !flags.day) {
          this.log(`-- ${dayName} --`)
        }

        this.log(`"${title}" by ${firstName} ${lastName} at ${moment(session.ScheduledDateTime).format('hh:mm a')}`)
        lastDayName = dayName;
      }
    }
  }
}