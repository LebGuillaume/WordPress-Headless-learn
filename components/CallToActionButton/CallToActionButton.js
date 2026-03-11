import ButtonLink from "components/ButtonLink/ButtonLink";

const CallToActionButton = ({ buttonLabel, destination, align = "left" }) => {
  return (
    <div className={`text-${align}`}>
      <ButtonLink destination={destination} label={buttonLabel}>
        {buttonLabel}
      </ButtonLink>
    </div>
  );
};

export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default CallToActionButton;
