export const Dice = ({ face, rolling }) => {
  return (
    <div className="containerofdice ">
      <i className={` fas fa-dice-${face} ${rolling && "shaking"}`}></i>
    </div>
  );
};
