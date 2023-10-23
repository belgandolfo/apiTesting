const settingsFile = open(`./${__ENV.ENVIRONMENT}/settings.json`)

export default function () {
    return JSON.parse(settingsFile)
}