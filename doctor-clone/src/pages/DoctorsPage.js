

// import React, { useState } from 'react';
// import { Container, Row, Col } from 'reactstrap';
// import SidebarFilters from '../components/SidebarFilters';
// import DoctorCard from '../components/DoctorCard';
// import img1 from '../assets/img1.png'; // example images
// import img2 from '../assets/img2.png';

// const DoctorsPage = () => {
//   const [filters, setFilters] = useState({
//     mode: [],
//     experience: [],
//     fees: [],
//     language: [],
//   });

//   const doctors = [
//     {
//       id: 1,
//       name: 'Dr. Lakshmi Sanjitha Kakani',
//       specialty: 'General Physician',
//       degrees: 'MBBS, MD',
//       experience: 6,
//       fees: 499,
//       imageUrl: img1,
//       mode: ['Hospital Visit', 'Online Consult'],
//       language: ['English', 'Telugu'],
//     },
//     {
//       id: 2,
//       name: 'Dr. Mohammed Huzef Ul Arifeen',
//       specialty: 'General Practitioner',
//       degrees: 'MBBS',
//       experience: 3,
//       fees: 350,
//       imageUrl: img2,
//       mode: ['Online Consult'],
//       language: ['English', 'Hindi'],
//     },
//     {
//       id: 3,
//       name: 'Dr. Arjun Reddy',
//       specialty: 'Cardiologist',
//       degrees: 'MBBS, DM Cardiology',
//       experience: 12,
//       fees: 1200,
//       imageUrl: img1,
//       mode: ['Hospital Visit'],
//       language: ['English', 'Telugu'],
//     },
//     {
//       id: 4,
//       name: 'Dr. Priya Sharma',
//       specialty: 'Dermatologist',
//       degrees: 'MBBS, MD Dermatology',
//       experience: 8,
//       fees: 700,
//       imageUrl: img2,
//       mode: ['Online Consult'],
//       language: ['English', 'Hindi'],
//     },
//     {
//       id: 5,
//       name: 'Dr. Rahul Jain',
//       specialty: 'Orthopedic',
//       degrees: 'MBBS, MS Ortho',
//       experience: 18,
//       fees: 1500,
//       imageUrl: img1,
//       mode: ['Hospital Visit'],
//       language: ['English'],
//     },
//     {
//       id: 6,
//       name: 'Dr. Sneha Kulkarni',
//       specialty: 'Pediatrician',
//       degrees: 'MBBS, MD Pediatrics',
//       experience: 4,
//       fees: 450,
//       imageUrl: img2,
//       mode: ['Online Consult', 'Hospital Visit'],
//       language: ['English', 'Marathi'],
//     },
//     {
//       id: 7,
//       name: 'Dr. Vikram Singh',
//       specialty: 'ENT Specialist',
//       degrees: 'MBBS, MS ENT',
//       experience: 11,
//       fees: 950,
//       imageUrl: img1,
//       mode: ['Online Consult'],
//       language: ['English', 'Hindi', 'Punjabi'],
//     },
//   ];
  

//   const applyFilters = (doc) => {
//     const { mode, experience, fees, language } = filters;

//     const inMode = !mode.length || mode.some(m => doc.mode.includes(m));
//     const inExp = !experience.length || experience.some(range => {
//       if (range === '0-5') return doc.experience <= 5;
//       if (range === '6-10') return doc.experience >= 6 && doc.experience <= 10;
//       if (range === '11-16') return doc.experience >= 11 && doc.experience <= 16;
//       if (range === '17+') return doc.experience > 16;
//       return false;
//     });
//     const inFees = !fees.length || fees.some(fee => {
//       if (fee === '100-500') return doc.fees >= 100 && doc.fees <= 500;
//       if (fee === '500-1000') return doc.fees > 500 && doc.fees <= 1000;
//       if (fee === '1000+') return doc.fees > 1000;
//       return false;
//     });
//     const inLang = !language.length || language.some(lang => doc.language.includes(lang));

//     return inMode && inExp && inFees && inLang;
//   };

//   const filteredDoctors = doctors.filter(applyFilters);

//   return (
//     <Container fluid className="mt-4">
//       <Row className="m-3">
//         <Col md="3">
//           <SidebarFilters filters={filters} onFilterChange={setFilters} />
//         </Col>
//         <Col md="9">
//           <DoctorCard doctors={filteredDoctors} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default DoctorsPage;


// const fetchDoctors = async () => {
//   try {
//     const params = {};

//     // Log filters to check how params are being formed
//     console.log(filters);

//     if (filters.mode.length) {
//       params.mode = filters.mode;
//     }
//     if (filters.language.length) {
//       params.language = filters.language;
//     }
//     if (filters.experience.length) {
//       const exp = filters.experience[0];
//       if (exp === '0-5') params.minExperience = 0;
//       else if (exp === '6-10') params.minExperience = 6;
//       else if (exp === '11-16') params.minExperience = 11;
//       else if (exp === '17+') params.minExperience = 17;
//     }
//     if (filters.fees.length) {
//       const fee = filters.fees[0];
//       if (fee === '100-500') params.maxFees = 500;
//       else if (fee === '500-1000') params.maxFees = 1000;
//       else if (fee === '1000+') params.maxFees = 10000;
//     }

//     console.log('Sending params:', params); // Check API params

//     const response = await axios.get('http://localhost:8080/api/doctors/list-doctor-with-filter', {
//       params,
//       paramsSerializer: params => {
//         const searchParams = new URLSearchParams();
//         for (const key in params) {
//           if (Array.isArray(params[key])) {
//             params[key].forEach(val => searchParams.append(key, val));
//           } else {
//             searchParams.append(key, params[key]);
//           }
//         }
//         return searchParams.toString();
//       }
//     });

//     setDoctors(response.data.doctors);
//   } catch (error) {
//     console.error('Error fetching doctors:', error);
//   }
// };


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import SidebarFilters from '../components/SidebarFilters';
import DoctorCards from '../components/DoctorCard';

const DoctorsPage = () => {
  const [filters, setFilters] = useState({
    mode: [],
    experience: [],
    fees: [],
    language: [],
  });

  const [doctors, setDoctors] = useState([]);

  const fetchDoctors = async () => {
    try {
      const params = {};

      if (filters.mode.length) {
        params.mode = filters.mode;
      }
      if (filters.language.length) {
        params.language = filters.language;
      }
      if (filters.experience.length) {
        const exp = filters.experience[0];
        if (exp === '0-5') params.minExperience = 0;
        else if (exp === '6-10') params.minExperience = 6;
        else if (exp === '11-16') params.minExperience = 11;
        else if (exp === '17+') params.minExperience = 17;
      }
      if (filters.fees.length) {
        const fee = filters.fees[0];
        if (fee === '100-500') params.maxFees = 500;
        else if (fee === '500-1000') params.maxFees = 1000;
        else if (fee === '1000+') params.maxFees = 10000;
      }

      const response = await axios.get('http://localhost:8080/api/doctors/list-doctor-with-filter', {
        params,
        paramsSerializer: params => {
          const searchParams = new URLSearchParams();
          for (const key in params) {
            if (Array.isArray(params[key])) {
              params[key].forEach(val => searchParams.append(key, val));
            } else {
              searchParams.append(key, params[key]);
            }
          }
          return searchParams.toString();
        }
      });

      setDoctors(response.data.doctors);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, [filters]);

  return (
    <Container fluid className="mt-4">
      <Row className="m-3">
        <Col md="3">
          <SidebarFilters filters={filters} onFilterChange={setFilters} />
        </Col>
        <Col md="9">
          <DoctorCards doctors={doctors} />
        </Col>
      </Row>
    </Container>
  );
};

export default DoctorsPage;
