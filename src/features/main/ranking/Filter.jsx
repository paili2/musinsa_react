import FilterTab from "./FilterTab";

const Filter = () => {
    return (
        <div
            style={{
                display: "flex",
                gap: "10px",
                justifyContent: "flex-end",
                paddingBottom: "10px",
            }}
        >
            <FilterTab filterType={"성별"}></FilterTab>
            <FilterTab filterType={"전체 연령"}></FilterTab>
            <FilterTab filterType={"전체 가격"}></FilterTab>
            <FilterTab filterType={"실시간"}></FilterTab>
        </div>
    );
};

export default Filter;
