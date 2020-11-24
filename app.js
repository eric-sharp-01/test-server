const express = require('express')
const app = express()
const axios = require('axios');
const camelcaseObjectDeep = require('camelcase-object-deep');
const port = 3001
const imageUrlExample = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_175f85b6948%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_175f85b6948%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"

app.get('/summary', (req, res) => {
  axios.get('https://api.covid19api.com/summary').then(({ data }) => {
    let converted = camelcaseObjectDeep(data);
    res.json(converted)
  })
})

app.get('/countries', (req, res) => {
  axios.get('https://api.covid19api.com/countries').then(({ data }) => {
    let converted = camelcaseObjectDeep(data);
    let filtered = converted.filter(item => {
      return item.country.toLowerCase().includes(req.query.name.toLowerCase())
    })
    res.json(filtered)
  })
})

app.get('/countries/:slug', (req, res) => {
  let slug = req.params.slug;
  axios.get(`https://api.covid19api.com/total/country/${slug}`).then(({ data }) => {
    let converted = camelcaseObjectDeep(data);
    res.json(converted)
  })
})

app.post('/api/auth', (req, res) => {
  let data = {
    tokenType: 'Bear',
    token: "test-token-auth"
  }
  res.json(data)
})

app.get('/api/account-data', (req, res) => {
  let data = {
    "id": 1,
    "name": "Online Order Test1",
    "email": "testdev.onyxtyres@gmail.com",
    "phone": "123123123z",
    "address": "Online Order Test1",
    "currency": "AUD",
    "gstRate": 0.2,
    "internationalFreight40": 2000,
    "internationalFreight20": 1000,
    "localFreight40": 400,
    "localFreight20": 200,
    "clearanceCost40": 600,
    "clearanceCost20": 300,
    "brandGroupShow": [
        "HILO/ANNAITE",
        "GRENLANDER/INVOVIC"
    ],
    "currency": "AUD",
    "currencyRate": 1.5,
    "gstRate": 0.1
  }
  res.json(data)
})

app.get('/api/container/brandgroups', (req, res) => {
  let data = [
    {
      "groupName": "Shandong Mirage Tyres",
      "brands": [
        {
          "id": 28,
          "name": "MIRAGE",
          "patterns": {
            "Steer": [
                {
                    "pattern": "MG708",
                    "imgUrl": imageUrlExample
                },
                {
                    "pattern": "MG709",
                    "imgUrl": imageUrlExample
                }
            ],
            "Drive": [
                {
                    "pattern": "MG710",
                    "imgUrl": imageUrlExample
                },
                {
                    "pattern": "MG711",
                    "imgUrl": imageUrlExample
                }
            ],
            "Trailer": [
                {
                    "pattern": "MG712",
                    "imgUrl": imageUrlExample
                }
            ],
            "All position": [
                {
                    "pattern": "MG713",
                    "imgUrl": imageUrlExample
                }
            ]
          }
        }
      ]
    }
  ]
  res.json(data)
})


app.get('/api/container/categories', (req, res) => {
  let data =  [
    "TBR",
   "COMM"
  ]
  res.json(data)
})

app.get('/api/container/products', (req, res) => {
  let data =  {
    "data": [
      {
        "id": 1,
        "name": "AMBERSTONE 11R22.5-16PR 100 TRAILER 146-111",
        "usdFOB": 53.00,
        "brand": "Amberstone" ,
        "brandGroup": "group1",
        "position": "Steering",
        "tag": "TBR",
        "pattern": "BW380",
        "vol20": 0.67,
        "vol40": 0.67,
        "orderQtyAvail": 100,
        "imgUrl": ""
      },
      {
        "id": 2,
        "name": "AMBERSTONE 11R22.5-16PR 100 TRAILER 146-222",
        "usdFOB": 53.00,
        "brand": "Amberstone" ,
        "brandGroup": "group1",
        "position": "Steering",
        "tag": "TBR",
        "pattern": "BW380",
        "vol20": 0.67,
        "vol40": 0.67,
        "orderQtyAvail": 100,
        "imgUrl": ""
      },
      {
        "id": 3,
        "name": "AMBERSTONE 11R22.5-16PR 100 TRAILER 146-333",
        "usdFOB": 53.00,
        "brand": "Amberstone" ,
        "brandGroup": "group1",
        "position": "Steering",
        "tag": "TBR",
        "pattern": "BW380",
        "vol20": 0.67,
        "vol40": 0.67,
        "orderQtyAvail": 100,
        "imgUrl": ""
      },
      {
        "id": 4,
        "name": "AMBERSTONE 11R22.5-16PR 100 TRAILER 146-444",
        "usdFOB": 53.00,
        "brand": "Amberstone" ,
        "brandGroup": "group1",
        "position": "Steering",
        "tag": "TBR",
        "pattern": "BW380",
        "vol20": 0.67,
        "vol40": 0.67,
        "orderQtyAvail": 100,
        "imgUrl": ""
      },
      {
        "id": 5,
        "name": "AMBERSTONE 11R22.5-16PR 100 TRAILER 146-555",
        "usdFOB": 53.00,
        "brand": "Amberstone" ,
        "brandGroup": "group1",
        "position": "Steering",
        "tag": "TBR",
        "pattern": "BW380",
        "vol20": 0.67,
        "vol40": 0.67,
        "orderQtyAvail": 100,
        "imgUrl": ""
      }
    ],
    "meta": {
        "current_page ": 1,
        "total" : 5,
        "per_page": 20
    }
  }
  res.json(data)
})

app.get('/api/container/orders', (req, res) => {
  let data = [];
  for(let i = 0; i < 102; i++){
      data.push({
        index: i + 1,
        "id": 1,
        "refNumber": `ABDC-${i * 2 + 120}-SD-DAD`,
        "tag": "Initial",
        "status": "Waiting Confirm",
        "date": "2020-6-15",
        "qty": 1200,
        "amount": 1299,
        "deposit30": 1299,
        "remain70": 1299,
        "currency": 6.9,
        "conSize": 40,
      });
  }
  res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})