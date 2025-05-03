//package doctor.Controller;
//
//import doctor.model.Doctor;
//import doctor.repository.DoctorRepository;
//import jakarta.persistence.criteria.Predicate;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.*;
//import org.springframework.data.jpa.domain.Specification;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.*;
//
//@RestController
//@RequestMapping("/api/doctors")
//@CrossOrigin(origins = "*")
//public class DoctorController {
//
//    @Autowired
//    private DoctorRepository doctorRepository;
//
//    // 1. Add Doctor API
//    @PostMapping("/add-doctor")
//    public ResponseEntity<Doctor> addDoctor(@RequestBody Doctor doctor) {
//        Doctor savedDoctor = doctorRepository.save(doctor);
//        return ResponseEntity.ok(savedDoctor);
//    }
//
//    // 2. List Doctors API with Filters and Pagination
//    @GetMapping("/list-doctor-with-filter")
//    public ResponseEntity<Map<String, Object>> listDoctorsWithFilter(
//            @RequestParam(required = false) String gender,
//            @RequestParam(required = false) String language,
//            @RequestParam(required = false) Integer minExperience,
//            @RequestParam(defaultValue = "0") int page,
//            @RequestParam(defaultValue = "10") int size
//    ) {
//        Pageable pageable = PageRequest.of(page, size, Sort.by("id").descending());
//
//        Specification<Doctor> spec = (root, query, cb) -> {
//            List<Predicate> predicates = new ArrayList<>();
//
//            if (gender != null) {
//                predicates.add(cb.equal(root.get("gender"), gender));
//            }
//            if (language != null) {
//                predicates.add(cb.isMember(language, root.get("languages")));
//            }
//            if (minExperience != null) {
//                predicates.add(cb.greaterThanOrEqualTo(root.get("experience"), minExperience));
//            }
//            return cb.and(predicates.toArray(new Predicate[0]));
//        };
//
//        Page<Doctor> doctorPage = doctorRepository.findAll(spec, pageable);
//
//        Map<String, Object> response = new HashMap<>();
//        response.put("doctors", doctorPage.getContent());
//        response.put("totalItems", doctorPage.getTotalElements());
//        response.put("totalPages", doctorPage.getTotalPages());
//        response.put("currentPage", doctorPage.getNumber());
//
//        return ResponseEntity.ok(response);
//    }
//}


package doctor.Controller;

import doctor.model.Doctor;
import doctor.repository.DoctorRepository;

import jakarta.persistence.criteria.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/doctors")
@CrossOrigin(origins = "*")
public class DoctorController {

    @Autowired
    private DoctorRepository doctorRepository;

    // 1. Add a new doctor
    @PostMapping("/add-doctor")
    public ResponseEntity<Doctor> addDoctor(@RequestBody Doctor doctor) {
        Doctor savedDoctor = doctorRepository.save(doctor);
        return ResponseEntity.ok(savedDoctor);
    }

    // 2. List doctors with optional filters and pagination
//    @GetMapping("/list-doctor-with-filter")
//    public ResponseEntity<Map<String, Object>> listDoctorsWithFilter(
//            @RequestParam(required = false) String gender,
//            @RequestParam(required = false) String language,
//            @RequestParam(required = false) Integer minExperience,
//            @RequestParam(required = false) Integer maxFees,
//            @RequestParam(defaultValue = "0") int page,
//            @RequestParam(defaultValue = "10") int size
//    ) {
//        Pageable pageable = PageRequest.of(page, size, Sort.by("id").descending());
//
//        Specification<Doctor> spec = (root, query, cb) -> {
//            List<Predicate> predicates = new ArrayList<>();
//
//            if (gender != null) {
//                predicates.add(cb.equal(root.get("gender"), gender));
//            }
//            if (language != null) {
//                predicates.add(cb.isMember(language, root.get("languages")));
//            }
//            if (minExperience != null) {
//                predicates.add(cb.greaterThanOrEqualTo(root.get("experience"), minExperience));
//            }
//            if (maxFees != null) {
//                predicates.add(cb.lessThanOrEqualTo(root.get("fees"), maxFees));
//            }
//
//            return cb.and(predicates.toArray(new Predicate[0]));
//        };
//
//        Page<Doctor> doctorPage = doctorRepository.findAll(spec, pageable);
//
//        Map<String, Object> response = new HashMap<>();
//        response.put("doctors", doctorPage.getContent());
//        response.put("totalItems", doctorPage.getTotalElements());
//        response.put("totalPages", doctorPage.getTotalPages());
//        response.put("currentPage", doctorPage.getNumber());
//
//        return ResponseEntity.ok(response);
//    }
    @GetMapping("/list-doctor-with-filter")
    public ResponseEntity<Map<String, Object>> listDoctorsWithFilter(
            @RequestParam(required = false) List<String> mode,
            @RequestParam(required = false) List<String> language,
            @RequestParam(required = false) Integer minExperience,
            @RequestParam(required = false) Integer maxFees,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("id").descending());

        Specification<Doctor> spec = (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (mode != null && !mode.isEmpty()) {
                for (String m : mode) {
                    predicates.add(cb.isMember(m, root.get("mode")));
                }
            }

            if (language != null && !language.isEmpty()) {
                for (String lang : language) {
                    predicates.add(cb.isMember(lang, root.get("languages")));
                }
            }

            if (minExperience != null) {
                predicates.add(cb.greaterThanOrEqualTo(root.get("experience"), minExperience));
            }

            if (maxFees != null) {
                predicates.add(cb.lessThanOrEqualTo(root.get("fees"), maxFees));
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };

        Page<Doctor> doctorPage = doctorRepository.findAll(spec, pageable);

        Map<String, Object> response = new HashMap<>();
        response.put("doctors", doctorPage.getContent());
        response.put("totalItems", doctorPage.getTotalElements());
        response.put("totalPages", doctorPage.getTotalPages());
        response.put("currentPage", doctorPage.getNumber());

        return ResponseEntity.ok(response);
    }


}
