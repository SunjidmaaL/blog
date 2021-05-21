// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(500).json({ name: 'Сайн уу' + Math.random () })
  }
  