const Filter = ({ countryFilter, handlecountryFilterChange }) => {
    return(
        <div>
            find countries <input value={countryFilter} onChange={handlecountryFilterChange} />
        </div>
    )
}

export default Filter