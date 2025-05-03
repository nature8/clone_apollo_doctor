// import React from 'react';
// import { Card, CardBody, Button, Row, Col, Badge } from 'reactstrap';

// const doctors = [
//   {
//     id: 1,
//     name: 'Dr. Lakshmi Sanjitha Kakani',
//     specialization: 'General Physician/ Internal Medicine Specialist',
//     experience: '6 YEARS',
//     degrees: 'MBBS, MD (GENERAL MEDICINE)',
//     location: 'Andhra Pradesh, Visakhapatnam',
//     fee: 499,
//     doctorOfHour: true,
//     imageUrl: '/assets/img1.png' // Replace with real images
//   },
//   {
//     id: 2,
//     name: 'Dr. Mohammed Huzef Ul Arifeen',
//     specialization: 'General Practitioner',
//     experience: '3 YEARS',
//     degrees: 'MBBS',
//     location: 'Telangana, Hyderabad',
//     fee: 350,
//     availableIn: '1 minute',
//     imageUrl: '/assets/img2.png'
//   },
//   {
//     id: 3,
//     name: 'Dr. Lakshmi Sindhura Kakani',
//     specialization: 'General Physician/ Internal Medicine Specialist',
//     experience: '10 YEARS',
//     degrees: 'MBBS, MD (GENERAL MEDICINE)',
//     location: 'Telangana, Hyderabad',
//     fee: 499,
//     cashback: 75,
//     imageUrl: '/assets/img3.png'
//   }
// ];

// const DoctorCard = () => {
//   return (
//     <div className="p-3">
//       <h3 className="mb-3 fw-bold">Consult General Physicians Online - Internal Medicine Specialists</h3>
//       <p className="text-muted">{doctors.length} doctors</p>
//       {doctors.map((doc) => (
//         <Card className="mb-3 shadow-sm border" key={doc.id}>
//           <CardBody>
//             <Row className="align-items-center">
//               <Col xs="auto">
//                 <img src={doc.imageUrl} alt={doc.name} className="rounded-circle" width="60" height="60" />
//               </Col>
//               <Col md="7">
//                 <h5 className="mb-1 fw-bold">{doc.name}</h5>
//                 <p className="mb-0 text-muted">{doc.specialization}</p>
//                 <small className="text-primary">
//                   {doc.experience} • {doc.degrees}
//                 </small>
//                 <p className="mb-0 text-muted small">{doc.location}</p>
//               </Col>
//               <Col md="2" className="text-md-end text-start mt-3 mt-md-0">
//                 <div className="fw-bold fs-5">₹{doc.fee}</div>
//                 {doc.cashback && (
//                   <small className="text-success">₹{doc.cashback} Cashback</small>
//                 )}
//               </Col>
//               <Col md="2" className="text-md-end text-start mt-3 mt-md-0">
//                 {doc.doctorOfHour && (
//                   <Badge color="warning" className="mb-2 text-dark">Doctor of the Hour</Badge>
//                 )}
//                 <Button color="primary" size="sm" block>
//                   Consult Online
//                 </Button>
//                 {doc.availableIn && (
//                   <div className="text-muted small mt-1">Available in {doc.availableIn}</div>
//                 )}
//               </Col>
//             </Row>
//           </CardBody>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default DoctorCard;

const DoctorCard = ({ doctors }) => {
    return (
      <div>
        {doctors.map(doctor => (
          <div key={doctor.id} className="p-3 border rounded mb-3 shadow-sm">
            <div className="d-flex align-items-center">
              <img src={doctor.imageUrl} alt={doctor.name} width="70" height="70" className="me-3 rounded-circle" />
              <div>
                <h5 className="mb-1">{doctor.name}</h5>
                <p className="mb-1 text-muted">{doctor.specialty}</p>
                <p className="mb-1 text-secondary">{doctor.experience} years • {doctor.degrees}</p>
                <p className="fw-bold text-primary">₹{doctor.fees}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default DoctorCard;
  