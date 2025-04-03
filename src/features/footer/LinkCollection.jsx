import PageLink from "./PageLink";

const LinkCollection = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        padding: "30px 0",
        borderBottom: "1px solid gray",
      }}
    >
      <PageLink pageName={"MUSINSA"}></PageLink>
      <PageLink pageName={"BEAUTY"}></PageLink>
      <PageLink pageName={"PLAYER"}></PageLink>
      <PageLink pageName={"OUTLET"}></PageLink>
      <PageLink pageName={"SNEAKERS"}></PageLink>
      <PageLink pageName={"BOUTIQUE"}></PageLink>
      <PageLink pageName={"kids"}></PageLink>
    </div>
  );
};

export default LinkCollection;
