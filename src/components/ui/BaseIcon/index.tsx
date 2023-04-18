type BaseIconProps = {
  type: string;
};

const BaseIcon = ({ type }: BaseIconProps) => (
  <span className="material-icons">{type}</span>
);

export default BaseIcon;
