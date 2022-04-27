import * as Content from './contents/index.hu-HU'

export default async ({ $md }) => {
  return await Promise.resolve({
    menu: {
      intro: 'Bemutatkozás',
      skills: 'Szakterületeink',
      teams: 'Munkatársaink',
      responsibility: 'Felelősségvállalás',
      contact: 'Kapcsolat',
    },

    intro: {
      title: 'Bemutatkozás',
      quote: $md.render(`„Fight for the things that you care about,
          but do it in a way that will lead others to join you.”
          Ruth Bader Ginsburg`),
      section1: Content.Intro01,
      section2: Content.Intro02,
      section3: Content.Intro03,
    },

    skills: {
      title: 'Szakterületeink',
      content: Content.Skills,
    },

    responsibility: {
      title: 'Társadalmi felelősségvállalásunk',
      content: Content.Responsibility,
      quote: 'Think legally, act socially.',
    },
  })
}
