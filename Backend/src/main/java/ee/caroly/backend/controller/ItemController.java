package ee.caroly.backend.controller;

import ee.caroly.backend.model.Item;
import ee.caroly.backend.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("items")
    public List<Item> getItems() {
        
        return itemService.getItems();
    }

    @PostMapping("items")
    public void postItem(@RequestBody Item item) {
        itemService.saveItem(item);
    }

    // tehke serverile restart
    // localhost:8080/items

    // delete päringu
    // edit päringu
    // view one item päringu

    // andmebaas PostgreSQL - relatsiooniline andmebaas

    // kategooria osas
}
