import React from 'react';
import { Card, CardContent, Typography, Box, Container } from '@mui/material';
import GetInTouch from './GetInTouch';

const infoData = [
  {
    title: 'Registered Office',
    details: [
      '3rd Floor, Bhavani Market, (near Sec 18 metro station)',
      'Sector-27, Noida-201301.',
    ],
  },
  {
    title: 'Admission',
    details: [
      'admission@trainingguru.in',
      '+91 95 600 77 101',
    ],
  },
  {
    title: 'Enquiry',
    details: [
      'info@trainingguru.in',
      '+91 95 600 77 108',
    ],
  },
];

export default function InfoCards() {
  return (

    <>
    <Container sx={{ py: 4 }}>
      <Box display="flex" justifyContent="center" gap={3} flexWrap="wrap">
        {infoData.map((item, index) => (
          <Card key={index} sx={{ minWidth: 280, maxWidth: 350, flexGrow: 1, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                {item.title}
              </Typography>
              {item.details.map((line, i) => (
                <Typography key={i} variant="body1" color="text.secondary">
                  {line}
                </Typography>
              ))}
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box mt={4} textAlign="center">
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Have any query?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          At Training Guru, we are committed to providing our students with the best possible learning experience and support.
          That's why we have a team of experienced trainers and staff who are passionate about helping our students achieve their career goals.
          <br /><br />
          So don't hesitate to reach out to us, and let us help you take the first step towards a brighter future in the IT industry.
          <br /><br />
          If you have any questions or would like to learn more about our IT training programs, placement services, or certifications,
          please feel free to get in touch with us. Our friendly and knowledgeable staff are always here to assist you in any way they can.
        </Typography>
      </Box>
    </Container>
    <GetInTouch />           
    </>

  );
}