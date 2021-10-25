function Category(props) {
    return (
        <div id="category-view-styling">
            <div className="categoryName" id="cat-name-style">{props.name}</div>
            <div className="categoryType" id="cat-type-style">{props.type}</div>
        </div>
    )
}
export default Category;