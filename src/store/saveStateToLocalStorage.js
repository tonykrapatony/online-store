export default function saveStateToLocalStorage(products) {

    const object = products.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {});
    localStorage.setItem('reduxState', JSON.stringify(object));
}
