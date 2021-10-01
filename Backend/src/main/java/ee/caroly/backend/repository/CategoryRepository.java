package ee.caroly.backend.repository;

import ee.caroly.backend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
    public interface CategoryRepository extends JpaRepository<Category, Long> {
}
