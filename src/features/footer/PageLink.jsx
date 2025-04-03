const PageLink = (props) => {
  return (
    <button
      style={{ padding: "7px 15px", borderRadius: "5px", border: "none" }}
    >
      {props.pageName}
    </button>
  );
};

export default PageLink;
