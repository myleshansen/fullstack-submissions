const Filter = (props) => {

    return (
        <div>
            find countries <input
                value={props.newSearch}
                onChange={props.handleSearchChange}
            />
        </div>
    )
}

export default Filter