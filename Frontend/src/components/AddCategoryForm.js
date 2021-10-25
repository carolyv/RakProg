import { useRef } from 'react';

function AddCategoryForm(props) {

    const nameInputRef = useRef();
    const catTypeInputRef = useRef();

    function formSubmitHandler(e) {
        e.preventDefault();
        const nameValue = nameInputRef.current.value;
        const catTypeValue = catTypeInputRef.current.value;

        const category = {
            name: nameValue,
            category: catTypeValue
        }

        props.onAddCategory(category);
    }

    return (
        <form className="category-form" onSubmit={formSubmitHandler}>
            <label>Kategooria nimi</label><br />
            <input id="add-item-form-input" type="text" placeholder="Kategooria nimi" ref={nameInputRef}/><br />
            <label>Kategooria tüüp</label><br />
            <select id="add-item-form-input" type="text" required ref={catTypeInputRef}>
                <option value="BASIC">BASIC</option>
                <option value="DELUXE">DELUXE</option>
                <option value="PREMIUM">PREMIUM</option>
            </select><br />
            <button id="button-uni-styling">Sisesta kategooria</button>
        </form>
    )
}
export default AddCategoryForm;