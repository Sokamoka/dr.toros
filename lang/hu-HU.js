import * as Content from './contents/index.hu-HU'

export default async ({ $md }) => {
  return await Promise.resolve({
    menu: {
      intro: 'Intro',
      skills: 'Szakterületeink',
      teams: 'Munkatársaink',
      responsibility: 'Társadalmi felelősségvállalás',
      contact: 'Kapcsolat',
    },

    skills: {
      title: 'Szakterületeink',
      content: Content.Skills,
    },
  })
}
