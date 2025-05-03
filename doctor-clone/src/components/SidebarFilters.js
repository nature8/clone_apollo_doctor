// import React, { useState } from 'react';
// import { Card, CardBody, CardTitle, FormGroup, Label, Input, Collapse, Button } from 'reactstrap';

// const SidebarFilters = () => {
//   const [experienceOpen, setExperienceOpen] = useState(false);
//   const [languageOpen, setLanguageOpen] = useState(false);



//   return (
//     <Card className="p-3 shadow-sm border">
//       <CardBody>
//         <CardTitle tag="h5" className="mb-4 text-primary">Filters</CardTitle>

//         {/* Mode of Consult */}

//         <FormGroup>
//           <Label className="fw-bold">Mode of Consult</Label>
//           <div>
//             <FormGroup check>
//               <Input type="checkbox" id="hospitalVisit" />
//               <Label check htmlFor="hospitalVisit"> Hospital Visit</Label>
//             </FormGroup>
//             <FormGroup check>
//               <Input type="checkbox" id="onlineConsult" />
//               <Label check htmlFor="onlineConsult"> Online Consult</Label>
//             </FormGroup>
//           </div>
//         </FormGroup>

//         {/* Experience */}
//         <FormGroup>
//           <Label className="fw-bold">Experience (In Years)</Label>
//           <div>
//             <FormGroup check>
//               <Input type="checkbox" id="exp1" />
//               <Label check htmlFor="exp1"> 0-5</Label>
//             </FormGroup>
//             <FormGroup check>
//               <Input type="checkbox" id="exp2" />
//               <Label check htmlFor="exp2"> 6-10</Label>
//             </FormGroup>
//             <FormGroup check>
//               <Input type="checkbox" id="exp3" />
//               <Label check htmlFor="exp3"> 11-16</Label>
//             </FormGroup>
//             <Collapse isOpen={experienceOpen}>
//               <FormGroup check>
//                 <Input type="checkbox" id="exp4" />
//                 <Label check htmlFor="exp4"> 17+</Label>
//               </FormGroup>
//             </Collapse>
//             <Button color="link" size="sm" onClick={() => setExperienceOpen(!experienceOpen)}>
//               {experienceOpen ? 'Show Less' : '+1 More'}
//             </Button>
//           </div>
//         </FormGroup>

//         {/* Fees */}
//         <FormGroup>
//           <Label className="fw-bold">Fees (In Rupees)</Label>
//           <div>
//             <FormGroup check>
//               <Input type="checkbox" id="fees1" />
//               <Label check htmlFor="fees1"> 100-500</Label>
//             </FormGroup>
//             <FormGroup check>
//               <Input type="checkbox" id="fees2" />
//               <Label check htmlFor="fees2"> 500-1000</Label>
//             </FormGroup>
//             <FormGroup check>
//               <Input type="checkbox" id="fees3" />
//               <Label check htmlFor="fees3"> 1000+</Label>
//             </FormGroup>
//           </div>
//         </FormGroup>

//         {/* Language */}
//         <FormGroup>
//           <Label className="fw-bold">Language</Label>
//           <div>
//             <FormGroup check>
//               <Input type="checkbox" id="lang1" />
//               <Label check htmlFor="lang1"> English</Label>
//             </FormGroup>
//             <FormGroup check>
//               <Input type="checkbox" id="lang2" />
//               <Label check htmlFor="lang2"> Hindi</Label>
//             </FormGroup>
//             <FormGroup check>
//               <Input type="checkbox" id="lang3" />
//               <Label check htmlFor="lang3"> Telugu</Label>
//             </FormGroup>
//             <Collapse isOpen={languageOpen}>
//               <FormGroup check>
//                 <Input type="checkbox" id="lang4" />
//                 <Label check htmlFor="lang4"> Kannada</Label>
//               </FormGroup>
//               <FormGroup check>
//                 <Input type="checkbox" id="lang5" />
//                 <Label check htmlFor="lang5"> Tamil</Label>
//               </FormGroup>
//               {/* Add more languages as needed */}
//             </Collapse>
//             <Button color="link" size="sm" onClick={() => setLanguageOpen(!languageOpen)}>
//               {languageOpen ? 'Show Less' : '+10 More'}
//             </Button>
//           </div>
//         </FormGroup>

//         {/* Facility */}
//         <FormGroup>
//           <Label className="fw-bold">Facility</Label>
//           <div>
//             <FormGroup check>
//               <Input type="checkbox" id="facility1" />
//               <Label check htmlFor="facility1"> Apollo Hospital</Label>
//             </FormGroup>
//             <FormGroup check>
//               <Input type="checkbox" id="facility2" />
//               <Label check htmlFor="facility2"> Other Clinics</Label>
//             </FormGroup>
//           </div>
//         </FormGroup>

        
        
//       </CardBody>
//     </Card>
//   );
// };

// export default SidebarFilters;


// SidebarFilters.js
import React, { useState } from 'react';
import { Card, CardBody, CardTitle, FormGroup, Label, Input, Collapse, Button } from 'reactstrap';

const SidebarFilters = ({ filters, onFilterChange }) => {
  const handleCheckboxChange = (category, value) => {
    const updatedCategory = filters[category]?.includes(value)
      ? filters[category].filter(item => item !== value)
      : [...(filters[category] || []), value];

    onFilterChange({ ...filters, [category]: updatedCategory });
  };

  return (
    <Card className="p-3 shadow-sm border">
      <CardBody>
        <CardTitle tag="h5" className="mb-4 text-primary">Filters</CardTitle>

        {/* Mode of Consult */}
        <FormGroup>
          <Label className="fw-bold">Mode of Consult</Label>
          <FormGroup check>
            <Input type="checkbox" checked={filters.mode?.includes('Hospital Visit')} onChange={() => handleCheckboxChange('mode', 'Hospital Visit')} />
            <Label check> Hospital Visit</Label>
          </FormGroup>
          <FormGroup check>
            <Input type="checkbox" checked={filters.mode?.includes('Online Consult')} onChange={() => handleCheckboxChange('mode', 'Online Consult')} />
            <Label check> Online Consult</Label>
          </FormGroup>
        </FormGroup>

        {/* Repeat similar blocks for other filters */}
        {/* Experience */}
        <FormGroup>
          <Label className="fw-bold">Experience (In Years)</Label>
          {['0-5', '6-10', '11-16', '17+'].map(range => (
            <FormGroup check key={range}>
              <Input type="checkbox" checked={filters.experience?.includes(range)} onChange={() => handleCheckboxChange('experience', range)} />
              <Label check> {range}</Label>
            </FormGroup>
          ))}
        </FormGroup>

        {/* Fees */}
        <FormGroup>
          <Label className="fw-bold">Fees (In Rupees)</Label>
          {['100-500', '500-1000', '1000+'].map(fee => (
            <FormGroup check key={fee}>
              <Input type="checkbox" checked={filters.fees?.includes(fee)} onChange={() => handleCheckboxChange('fees', fee)} />
              <Label check> {fee}</Label>
            </FormGroup>
          ))}
        </FormGroup>

        {/* Language */}
        <FormGroup>
          <Label className="fw-bold">Language</Label>
          {['English', 'Hindi', 'Telugu'].map(lang => (
            <FormGroup check key={lang}>
              <Input type="checkbox" checked={filters.language?.includes(lang)} onChange={() => handleCheckboxChange('language', lang)} />
              <Label check> {lang}</Label>
            </FormGroup>
          ))}
        </FormGroup>

      </CardBody>
    </Card>
  );
};

export default SidebarFilters;
