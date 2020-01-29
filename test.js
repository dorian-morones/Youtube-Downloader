

const Fs = require('fs')
const Path = require('path')
const Listr = require('listr')
const Axios = require('axios')

function one (tasks) {

  tasks.run()
   .then(process.exit)
   .catch(process.exit)
}


if (process.argv) {

  const tasks = [{
    title: 'Downloading',
    task: async (ctx, task) => {
      const url = 'https://udso-a.akamaihd.net/4089003392001/4089003392001_5540776940001_5453609169001.mp4?pubId=4089003392001&videoId=5453609169001"'
      const path = Path.resolve(__dirname, 'media', 'video.mp4')

      const response = await Axios({
        method: 'GET',
        url: url,
        responseType: 'stream'
      })

      response.data.pipe(Fs.createWriteStream(path))

      return new Promise((resolve, reject) => {
        response.data.on('end', () => {
          resolve()
        })

        response.data.on('error', err => {
          reject(err)
        })
      })
    }
  }]

  one(new Listr(tasks))
}

