import React from 'react'
import { Box, Typography, Grid } from '@mui/material'

const images = [
  'https://lh3.googleusercontent.com/p/AF1QipMA6uPOKMEMKI0sZeQY7N9bCXBgfiseQVXKdGe3=w229-h164-n-k-no-nu',
  'https://lh3.googleusercontent.com/p/AF1QipOBupsZwMq8I0_hOvVZKm1QpF1iiYhdS6RLapkU=w229-h383-n-k-no-nu',
  'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHWwlMJAAOaCugJkpu8jZXHjgmvlccnUNCV-dBo9MFa4DyE4Z_A2BbKUAGKiscqptKTJpHySLicGQrCFaPMEXqY_5AkCH7QMT6dNQ7eRTPECqrX6iijtZTRvPvDDxO6pXLUHrLNopq9URvq=w229-h191-n-k-no-nu',
  'https://lh3.googleusercontent.com/p/AF1QipNWmVL6JDaOTuexp3BT4enyLKzQYT7e8Ke4EIKa=w229-h230-n-k-no-nu',
  'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFrt0tYYqaQkWbjtufOkMxVDhL_1jUVpBBl8wykj55sDWpyHRsLF3tl27toXNiTalx4AZ9lP1Wps3ujvCnHvXSZKJEz8uCSG99uc2GSoP0WRadvZFdsNTW6DenB1Mk4r7BRRtW8gw=w229-h287-n-k-no-nu',
  'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGzNoDVbQjpH5YH1GmFUSLynvMie4L1Vvc0ZU6niqiP-T39iRDs6FgZbDCsEPYK1SFcv709r_94UUuNf-Uivxlzr18SAI6cBB2wLKb_gZzs0GfBjKmIEtxh87ExBUrEZIcJLbY9=w229-h230-n-k-no-nu',
  'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHRWpTLnpB3AqkdndsGeM4pmNYn-JlxeiqD0VCgtWNb_JphmUpTjmjhssktFd5J06USjDjTyVZ8W0KLr2KbCkncX5mnKULMlcsoTbOg15cEqrdM9njW_qPc9LkNWC5z7Lh06-sY88QdYUOD=w229-h164-n-k-no-nu',
  'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGhCMMCAjV6dxkTR3w-A40e3ihDNAjjGKQi-nb5BDPnEqUouGUo5SGP_6INqaq-gZsWwBLoV_nyTefkMDgsao_ZGEI_gNRAk6K7v_5vJFr78dL2es-PMGpvdSRsRA7xGq5JxsFjnZdZ_Xg_=w229-h164-n-k-no-nu',
  'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFkivy_BUtJCnCBrMKciIEY3kVAWmhBMRnrvx9BBqGHo2wmWLS3JEDKLp6Xv3nFlKV0vCWWOUGf9_KomPw2cmK5CNHX0fu63QlBednbuH1mLOUtnB_ZjiAmo2zU7vBlPGElGdfoH6_SVsBR=w229-h383-n-k-no-nu',
  'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHpSbCojIn8Xpkag6yKjjt8m3QEtolCQu2lAT68zir0swffReLdCb_-beEUtyfro-b03gX5ghG4c3SBZtkEM4shfllMkBWDNaF4MMp5_l5NEt8ogp-p9PWjYzqbUSeG2Ezr-mhSsCAgmisf=w229-h230-n-k-no-nu',
  'https://lh3.googleusercontent.com/p/AF1QipM483ll9DVi3lvzcJw64WT3071OdA-HRhF7q9Yn=w229-h287-n-k-no-nu',
  'https://lh3.googleusercontent.com/p/AF1QipP__NXr2V38bfDSTrORbsQec-mXKM-u0lsidv7l=w229-h383-n-k-no-nu',
  'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEZ6kwLvTkAZr8cYDsKWVie7GA_iZFfgLZrv4RHagdMe68Mc6AKYWaD90An88_0civE7OpPfNAeJSsdNNGGhb4v3tWRo4MKzModp1LqZlxiK32_RZ9Ysj9qFpJHfnsQW1pZ5GFV6WdwPShq=w229-h383-n-k-no-nu',
  'https://lh3.googleusercontent.com/p/AF1QipMhttjyUoegBNsaJ2J8lkmd7bvY4b8BGZoTF_3O=w229-h383-n-k-no-nu',
  'https://lh3.googleusercontent.com/gps-cs-s/APNQkAH472N_sBTFSMevMOnWKp884-R5kBkU0B7_rQeE2KhSQ4ljNsMx4-aJqoD_uCPH4aXi5l16ixQDczYcxKDwPIzpRB2cAoFO0qKqI7PmpurmhGTHL5S3qF8leOCnES6TybMcjJY7UMIYq90=w229-h287-n-k-no-nu',
  'https://lh3.googleusercontent.com/p/AF1QipPnip4vpjbgG4NzlIaFt4MQJFsT0lXwGqpd72It=w229-h383-n-k-no-nu',
  'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGjfCfX9NFMGJJGTbmUKSvvlnAkCl1rW1bjuHg8XElhuPD-WW4QdFE9sfXwAlUnHmKnLVE-m7roQqltLC9WvSLIv9SoNfDyvIPpYqPEGLU2u052qQTrplJgkYQ9FSIjLs6Fnw9AuWhlWbs=w222-h371-n-k-no-nu',
  'https://lh3.googleusercontent.com/p/AF1QipO1HKAotE6nCxvbpbhHwBfscdKR9qQrcUOTK_pH=w222-h278-n-k-no-nu',
  'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHbWTHLCXK8BR4bxW9Cmdmj00X_CHRfNTACr3HtmOiqMkpmp7lVjXWjQdPE1JvqtyZGt_K2Ne24rS3orQoNk7vbpligpcSKpw-lUYexR8Nb764rkqVjlMHNf9S2DG2LzFoTpNvc7izm174r=w222-h278-n-k-no-nu',
  'https://lh3.googleusercontent.com/gps-cs-s/APNQkAH4XyRgLOLodn1OcHYg5za128yA0XHZbQOmmoVokaNnTNZXhNqW_QWipb5cq788LE6mFEidTnYJSKmxFlwmfCEh8x2RtYHzqipCtacAFbyIw-JhzQU98omHoSJQCExQjQlPwg8QFQ2olKM=w222-h223-n-k-no-nu',
  'https://lh3.googleusercontent.com/gps-cs-s/APNQkAE81E4j-a8dUSS-GRbRr8ThKv2__MHUhejcHLjtOkAgne8ATmmaquQGTP40UjG-hwRovif9xECsdCGTnG00xJXP_Ut06_L1U1ae0RKkXXARf_t_I27yCVVo5dpUKNxQcmThm179Zw=w222-h223-n-k-no-nu',
  
]

const Gallery = () => {
  return (
    <Box sx={{ p: { xs: 3, md: 6 }, backgroundColor: '#FFF7F2' }}>

      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          mb: 4,
          color: '#440E03'
        }}
      >
        ☕ Cafe Gallery
      </Typography>

      {/* Image Grid */}
      <Grid container spacing={3}>
        {images.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              component="img"
              src={img}
              alt={`gallery-${index}`}
              sx={{
                width: '100%',
                height: 220,
                borderRadius: 3,
                objectFit: 'cover',
                transition: '0.3s',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            />
          </Grid>
        ))}
      </Grid>

    </Box>
  )
}

export default Gallery
